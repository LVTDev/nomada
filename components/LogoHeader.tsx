import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoHeader = () => {
  return (
    <Link href={"/"} className="flex">
      <Image
        src="/logo1.png"
        height={53 / 1.4}
        width={21 / 1.4}
        alt="logo part 1"
        className="mr-2"
      />
      <Image
        src="/logo2.png"
        height={53 / 1.4}
        width={21 / 1.4}
        alt="logo part 1"
      />
    </Link>
  );
};

export default LogoHeader;
