---
title: 'Implementing C++/C# interop for Linux'
date: '2023-04-19'
hashtags: ['systems', 'cpp', 'csharp', 'linux', 'research']
leadingImagePath: '/dotnetcpp.png'
blurb: "I was pretty surprised to find a lack of good C++/C# interop resources online for Linux, given that most of the online tutorials were for C++/CLI, which only works with Windows. Here, we'll explore the basics, internals, and gory bits like making pointers to native memory safely, with some remarks on performance."
---

# Getting started

If there's one thing I could convey before skimming the article or moving onto another blog post,
if you're looking to make C++/C# interop work on Linux, **ignore any resources to do with C++/CLI.**
C++/CLI is a part of the Common Language Infrastructure and built into Microsoft's Visual Studio,
but [they have no plans to include it in .NET Core](https://github.com/dotnet/core/issues/2508) anytime soon.

To get started, you'll need:

- Linux OS installation
- Your favorite C++ compiler
- [The .NET SDK](https://learn.microsoft.com/en-us/dotnet/core/install/linux)

# Managed and unmanaged code

Some key vocabulary to know when delving into C++ <-> C#/Java interop are the notions of **managed**
and **unmanaged** code. **Unmanaged**, or "native" code is executed directly by the operating system
without the use of any runtime environment: think low-level or assembly languages, or languages
typically directly compiled to Assembly such as C++ or Rust that can be executed by the CPU without
any intermediate steps.

On the other hand, **managed** code refers to, you guessed it, programs executed within a runtime
environment such as the .NET Framework or the Java Virtual Machine. These programs have automatic
memory management, security features, and other services, but with no free lunch—also incurring
an additional overhead. A common design pattern among managed languages is **just-in-time
compilation** (JIT). Managed code compiled in the runtime environment is first transpiled to an
intermediate language: in C# specifically, this is the .NET Common Intermediate Language (CIL).
Once the code actually needs to be run, it is compiled to native assembly, which can actually be
executed by the CPU. This is convenient to make sure your code "just works" in all environments,
as long as they offer .NET or JVM support or whatnot.

Our goal here is to allow communication between the managed and unmanaged parts of a codebase.

# Basics of marshalling

One more thing before we get started with the actual interop code. To get a good footing on the
performance of interoperability between C++ and C#, we need to talk about **marshalling**.
Marshalling is the process of transforming data between different representations or formats between
two languages. Unfortunately, a `std::string` from C++ isn't so easily passed over to C# without
extra work: `std::string` differs highly in representation from compiler to compiler, and more
importantly, is within unmanaged memory; the `System.String` data in C# are garbage collected and
do not have an explicit memory address on the heap, and is subject to change at any time during
program execution.

If you want the simplest plug-and-play between C++ and C# types, you can use the `MarshalAs`
attribute when passing managed data types to unmanaged code that have predefined marshalling rules
(these are implemented through the (`ICustomMarshaler`](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.icustommarshaler?view=net-7.0)).

The interface is as follows:

```cpp
MyFunction(char* string) // Within some C++ DLL.
```

```cs
MyFunction([MarshalAs(UnmanagedType.LPStr)] string) // Within some C# DLL.
```

The `Unmanaged.LPStr` indicates that the C# string should be marshalled as a null-terminated ANSI
string, since the C++ side expects a traditional C string. See below for a handy guide on
how it fits all together with respect to memory layouts!

![The anatomy of unmanaged and managed memory layouts, and how marshalling occurs to convert types between them.](/unmanagedmanaged.png)

_Insight: Make sure to marshal types between C++ and C# that are not blittable; see next section for
the definition of this._

## Blittable types

Many common data types have a common representation in both unmanaged and managed memory, and do
not require [special handling by the interop marshaler](https://learn.microsoft.com/en-us/dotnet/framework/interop/blittable-and-non-blittable-types).
While they may still be copied, each of them have a tiny representation in memory so it can be done
exceptionally efficiently. The blittable types are listed below, with their C++ counterpart:

```cpp
// preferring standardized types which don't differ based on implementation
System.Byte <-> uint8_t
System.SByte <-> int8_t
System.Int16 <-> int16_t
System.UInt16 <-> uint16_t
System.Int32 <-> int32_t
System.UInt32 <-> uint32_t
System.Int64 <-> int64_t
System.UInt64 <-> uint64_t
System.IntPtr <-> void* // or any pointer type, but will be an opaque pointer in C#
System.UIntPtr <-> void*
System.Single <-> float
System.Double <-> double
```

_Insight_: Prefer blittable types in interop scenarios whenever possible, whether it be function
parameters or struct fields. If you have extremely complicated data structures, try to break down
function calls between C++ and C# to the truly necessary parts.

# Your C++/C# interop options

## Platform Invoke (P/Invoke)

TODO

## Command Language Runtime (CLR) Hosting

TODO

# Gory stuff: working with native memory in managed code

If you don't plan to use C++/C# interop for extremely performance-critical scenarios (below the ms
level), you don't need to read this section.

However, if you're in a position where avoiding the overhead of a `memcpy` is essential, you will
absolutely need to access native memory via pointers, as marshalling data has a copying overhead.

## Pinned memory

TODO

## The `IntPtr` class.

TODO

# Case study: Cascade

The original purpose I had for implementing C++/C# interop was for the Cascade system. You can
read more about how I did it in the [paper I wrote here](/cascade_cs_writeup.pdf).
