import { useState } from 'react';
import PtwuLogo from '../../assets/img/ptwulogo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-20 py-10 bg-navtan mb-3">
      <div className="md:container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:opacity-75 "
            href="/"
          >
            <Image
              src={PtwuLogo}
              width={50}
              height={50}
              alt="Peter Wu logo"
              className="hover:opacity-75 cursor-pointer"
            />
          </Link>
          <Link
            className="text-3xl font-sourcepro font-bold inline-block mr-4 py-2 whitespace-nowrap text-white hover:opacity-75"
            href="/"
          >
            Peter Wu
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-md font-bold leading-snug text-white hover:opacity-75"
                href="/"
              >
                <span className="ml-2">home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-md font-bold leading-snug text-white hover:opacity-75"
                href="/blog"
              >
                <span className="ml-2">blog</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
