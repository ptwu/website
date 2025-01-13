import { useState, useEffect, useRef } from 'react';
import PtwuLogo from '../../assets/img/ptwulogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid';

function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export default function Navbar() {
  const [isInDarkMode, setIsInDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const firstRender = useFirstRender();

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (firstRender) {
      return;
    }

    if (isInDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isInDarkMode, firstRender]);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsInDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsInDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    handleResize();
    window.addEventListener('resize', handleResize);
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
    <nav className="relative flex flex-wrap items-center justify-between md:px-20 py-10 bg-navtan dark:bg-slate-800">
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

        {isInDarkMode ? (
          <MoonIconSolid
            className="ml-3 flex-shrink-0 h-6 w-6 cursor-pointer invert-95"
            onClick={() => setIsInDarkMode(false)}
          />
        ) : (
          <MoonIconOutline
            className="ml-3 flex-shrink-0 h-6 w-6 cursor-pointer"
            onClick={() => setIsInDarkMode(true)}
          />
        )}
      </div>
    </nav>
  );
}
