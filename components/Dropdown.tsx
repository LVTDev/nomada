"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";

const Dropdown = () => {
  const pathname = usePathname();

  const [isVisble, setIsVisible] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className={`${pathname === "/" ? "text-white" : "text-black "} group relative transition-all hover:bg-pink hover:text-white  text-center  rounded cursor-pointer`}
      >
        CONVOCATORIAS
        <Link
          href={"/convocatoria"}
          className={`${!isVisble && "hidden"} ${isVisble && "block"}  bg-blue text-white absolute transition-all z-10 -bottom-[200%] hover:scale-105 py-3 px-2 hover:text-white left-1/2 -translate-x-1/2  w-max`}
        >
          Cortometraje Mexicano 2026
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
