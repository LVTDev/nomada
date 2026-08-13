import React from "react";
import LogoHeader from "./LogoHeader";
import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute z-10 top-0 left-0 w-full justify-between flex bg-transparent py-2 lg:px-8 items-center">
      <LogoHeader />

      <div className="relative w-[70px] h-[28px]">
        <Image src={"/Tulip_Logo.png"} fill alt="Logo tulip" />
      </div>
    </div>
  );
};

export default Header;
