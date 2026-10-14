import { useState, useEffect } from 'react';
import PtwuLogo from '../../assets/img/ptwulogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isInDarkMode, setIsInDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleTheme = () => {
    const dark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', dark);
    setIsInDarkMode(dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (_) {}
  };

  useEffect(() => {
    setIsInDarkMode(document.documentElement.classList.contains('dark'));
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogItem = (
    <Link
      className="px-3 py-2 flex items-right text-right text-md font-bold leading-snug text-black hover:opacity-75 dark:text-zinc-100 ml-auto"
      href="/blog"
    >
      <span className="ml-2">blog</span>
    </Link>
  );

  const menuItems = (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        <Link
          className="px-3 py-2 flex items-center text-md font-bold leading-snug text-black hover:opacity-75 dark:text-zinc-100"
          href="/"
        >
          <span className="ml-2">home</span>
        </Link>
      </li>
      <li>{blogItem}</li>
    </ul>
  );

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between md:px-20 py-10 bg-navtan dark:bg-slate-800">
      <div className="md:container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-2 text-white">
          <Link
            className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:opacity-75 "
            href="/"
          >
            <Image
              src={PtwuLogo}
              alt="Peter Wu logo"
              className="hover:opacity-75 flex-shrink-0 cursor-pointer h-12 w-12 dark:invert-95"
            />
          </Link>
          <Link
            className="text-3xl font-sourcepro font-bold inline-block mr-4 py-2 whitespace-nowrap text-black hover:opacity-75 dark:text-zinc-100"
            href="/"
          >
            Peter Wu
          </Link>
        </div>

        {isMobile ? (
          blogItem
        ) : (
          <div className="lg:flex flex-grow items-right">{menuItems}</div>
        )}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isInDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-3 flex-shrink-0"
        >
        {isInDarkMode ? (
          <MoonIconSolid
            className="h-6 w-6 invert-95"
          />
        ) : (
          <MoonIconOutline
            className="h-6 w-6"
          />
        )}
        </button>
      </div>
    </nav>
  );
}
