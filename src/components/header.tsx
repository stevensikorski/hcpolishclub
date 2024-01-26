import Image from "next/image";
import Link from "next/link";

import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export default function HeaderComponent() {
  return (
    <header className="h-16 w-full z-50 top-0 fixed bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="h-16 p-3 sm:mx-auto flex justify-between max-w-3xl sm:max-w-6xl">
        {/* Main Button */}
        <Link href="/" className="flex">
          <Image src="/CoatOfArms.svg" alt="Coat of Arms" height="40" width="40" className="rounded-md"></Image>
          <div className="h-10 py-1 ml-2 my-auto">
            <p className="h-1/2 text-sm text-primary tracking-tighter text-nowrap flex items-center">Polish Club</p>
            <p className="h-1/2 text-sm text-primary tracking-tighter text-nowrap flex items-center font-semibold">Hunter College</p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="h-10 justify-center items-center hidden lg:flex">
          <li className="relative">
            <Link href="/" className="flex items-center mx-2 px-4 py-2 relative transition-property rounded-md hover:bg-slate-50">
              <p className="text-primary">Home</p>
            </Link>
          </li>

          <li className="relative">
            <Link href="/" className="flex items-center mx-2 px-4 py-2 relative transition-property rounded-md hover:bg-slate-50">
              <p className="text-primary">Events</p>
            </Link>
          </li>

          <li className="relative">
            <div className="flex items-center">
              <Link href="/" className="mx-2 px-4 py-2 relative transition-property rounded-md transition-property hover:bg-slate-50">
                <div className="flex items-center">
                  <p className="text-primary">Members</p>
                  <FaChevronDown className="ml-2 h-3 w-3 text-secondary" />
                </div>
              </Link>
            </div>

            <div className="hidden absolute z-50 mt-2 p-2 space-y-2 w-48 bg-white border rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 1</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 2</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 3</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 4</p>
              </Link>
            </div>
          </li>

          <li className="relative">
            <div className="flex items-center">
              <Link href="/" className="mx-2 px-4 py-2 relative transition-property rounded-md transition-property hover:bg-slate-50">
                <div className="flex items-center">
                  <p className="text-primary">About Us</p>
                  <FaChevronDown className="ml-2 h-3 w-3 text-secondary" />
                </div>
              </Link>
            </div>

            <div className="hidden absolute z-50 mt-2 p-2 space-y-2 w-48 bg-white border rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 1</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 2</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 3</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 4</p>
              </Link>
            </div>
          </li>

          <li className="relative">
            <div className="flex items-center">
              <Link href="/" className="mx-2 px-4 py-2 relative transition-property rounded-md transition-property hover:bg-slate-50">
                <div className="flex items-center">
                  <p className="text-primary font-semibold">Get Involved</p>
                  <FaChevronDown className="ml-2 h-3 w-3 text-secondary" />
                </div>
              </Link>
              <span className="absolute inset-x-2 -bottom-[12px] h-[2px] bg-czerwony"></span>
            </div>

            <div className="hidden absolute z-50 mt-2 p-2 space-y-2 w-48 bg-white border rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 1</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 2</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 3</p>
              </Link>
              <Link href="/" className="block">
                <p className="p-2 text-sm text-secondary rounded-md transition-property hover:bg-slate-50">Dropdown item 4</p>
              </Link>
            </div>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex gap-2">
          <button className="px-4">
            <p>Sign in</p>
          </button>
          <button className="px-4 rounded-md bg-czerwony text-white">
            <p>Sign up</p>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="h-10 w-10 flex justify-center items-center lg:hidden">
          <IoMenu className="h-7 w-7 text-primary" />
        </button>
      </div>
    </header>
  );
}
