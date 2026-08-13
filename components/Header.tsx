import React from "react";
import LogoHeader from "./LogoHeader";
import Image from "next/image";

const Header = () => {
  return (
    <div className="justify-between flex bg-white py-3 lg:px-8 items-center">
      <LogoHeader />

      <div className="relative w-[85px] h-[36px]">

      <Image
        src={"/Tulip_logo.jpg"}
        fill
        alt="Logo tulip"
        />
        </div>
    </div>
  );
};

export default Header;
