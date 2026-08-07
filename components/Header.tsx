import React from "react";
import LogoHeader from "./LogoHeader";
import Image from "next/image";

const Header = () => {
  return (
    <div className="justify-between flex bg-white p-3">
      <LogoHeader />
      <Image
        src={"/Tulip_logo.jpg"}
        width={131}
        height={51}
        alt="Logo tulip"
      />
    </div>
  );
};

export default Header;
