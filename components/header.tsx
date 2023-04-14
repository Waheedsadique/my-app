"use client";
import Image from "next/image";

import Link from "next/link";

import Myproject from "./wallet";
type props = {};

export default function Header({}: props) {
  return (
    <header
      className=" sticky top-0 flex items-start justify-around max-w-7xl
         mx-auto z-20  p-5 xl:items-center "
    >
      <div className="flex flex-row items-baseline  cursor-pointer">
        <Link href={"/"}>
          {" "}
          <Image
            src={"/w-logo.png"}
            height={32}
            width={32}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <Link href={"/"}>
          {" "}
          <span className="hidden md:inline-flex text-gray-400 p-2">
            Muhammad Waheed
          </span>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Myproject />
      </div>
    </header>
  );
}
