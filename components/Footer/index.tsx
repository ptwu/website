export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-full p-4 md:flex md:items-center md:justify-center">
        <p className="text-sm md:text-center text-white m-4">
          © 2023 Peter Wu.
        </p>
        <p className="text-sm md:text-center text-white m-4">
          Website built from scratch with{' '}
          <a
            href="https://nextjs.org/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          ,{' '}
          <a
            href="https://www.typescriptlang.org/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          , and{' '}
          <a
            href="https://tailwindcss.com/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
