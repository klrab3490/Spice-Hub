"use client";

import SearchBar from "./searchbar";
import NavLoginButton from "./navloginbutton";
import { ModeToggle } from "@/components/mode-toggle";
import { MoreVertical } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex py-4 px-20 absolute w-screen gap-20">
      <div className="flex items-center gap-5">
        <a
          href="/"
          className="text-lg font-semibold"
        >
          LOGO
        </a>
      </div>
      <div className="flex-1 hidden md:flex">
        <div className="w-full">
          <SearchBar />
        </div>
      </div>
      <div className="flex gap-12">
        <Link href="/sell">
          <div className="flex items-center gap-2 h-full">
            <ShoppingBag />
            <p className="whitespace-nowrap">Become a Seller</p>
          </div>
        </Link>
        <div className="flex items-center">
          <NavLoginButton />
        </div>
        <div className="flex items-center justify-self-end">
          <ModeToggle />
        </div>
        <div className="flex items-center">
          <MoreVertical />
        </div>
      </div>
    </nav>
  );
}
