"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* container  */}
      <nav className="-opacity-0 flex fixed z-10 bg-slate-500 w-full  justify-between h-[75px] border-b-[1px] border-stone-400 text-white items-center">
        {/* logo  */}
        <div className="flex-col justify-center pl-4">
          <Link href="/">
            <Image src="/logo/brand.png" width={200} height={200} alt="" />
          </Link>
        </div>

        {/* nav link  */}
        <div
          className={`absolute md:static top-[75px]  md:top-0 text-black md: w-[70%] flex justify-center md:justify-end py-4 bg-black md:bg-transparent md:pr-4 ${
            isMenuOpen ? "left-0" : "left-[-100%]"
          } ease-in-out duration-300 shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col gap-10 md:flex-row text-white text-lg items-center">
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              <button className="border-[1px] border-gray-400 rounded-full bg-red-200 text-black px-4 py-1">
                <Link href="/login">Start Free Trial</Link>
              </button>
            </li>
          </ul>
        </div>

        {/* hamburger */}
        <div className="md:hidden pr-4">
          <button onClick={() => handleMenu()} className="text-2xl">
            {isMenuOpen ? <VscChromeClose /> : <RxHamburgerMenu />}{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
