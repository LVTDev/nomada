import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoHeader = () => {
  return (
    <Link href={'/'} className="flex">
      <Image
        src="/logo1.png"
        height={53}
        width={21}
        alt="logo part 1"
      />
      <Image
        src="/logo2.png"
        height={53}
        width={21}
        alt="logo part 1"
      />
    </Link>
  );
};

export default LogoHeader;
