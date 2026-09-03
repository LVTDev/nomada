"use client";
import React from "react";
import LogoHeader from "./LogoHeader";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="absolute z-10 top-0 left-0 w-full justify-between flex bg-transparent py-2 lg:px-8 items-center">
      <LogoHeader />
      <div className="flex gap-5">
        <Dropdown />
        <div className="relative w-[70px] h-[28px]">
          <Image
            src={`${pathname === "/" ? "/Tulip_Logo.png" : "/Tulip_logo.jpg"}`}
            fill
            alt="Logo tulip"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
