import { useState, useEffect } from 'react';
import PtwuLogo from '../../assets/img/ptwulogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isInDarkMode, setIsInDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const blogItem = (
    <Link
      className="px-3 py-2 flex items-center text-md font-bold leading-snug text-black hover:opacity-75"
      href="/blog"
    >
      <span className="ml-2">blog</span>
    </Link>
  );

  const menuItems = (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        <Link
          className="px-3 py-2 flex items-center text-md font-bold leading-snug text-black hover:opacity-75"
          href="/"
        >
          <span className="ml-2">home</span>
        </Link>
      </li>
      <li>{blogItem}</li>
    </ul>
  );

  return (
    <nav className="relative flex flex-wrap items-center justify-between md:px-20 py-10 bg-navtan">
      <div className="md:container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-2 text-white">
          <Link
            className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:opacity-75 "
            href="/"
          >
            <Image
              src={PtwuLogo}
              alt="Peter Wu logo"
              className="hover:opacity-75 flex-shrink-0 cursor-pointer h-12 w-12"
            />
          </Link>
          <Link
            className="text-3xl font-sourcepro font-bold inline-block mr-4 py-2 whitespace-nowrap text-black hover:opacity-75"
            href="/"
          >
            Peter Wu
          </Link>
        </div>

        {isMobile ? (
          blogItem
        ) : (
          <div className="lg:flex flex-grow items-center">{menuItems}</div>
        )}

        {isInDarkMode ? (
          <MoonIconSolid
            className="ml-3 flex-shrink-0 h-6 w-6 cursor-pointer"
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
