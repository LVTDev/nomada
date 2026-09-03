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
        className={`${pathname === "/" ? "text-white" : "text-black "} group relative`}
      >
        CONVOCATORIAS
        <Link
          href={"/convocatoria"}
          className={`${!isVisble && "hidden"} ${isVisble && "block"}  bg-blue absolute z-10 -bottom-[200%] py-3 px-2 hover:text-white left-1/2 -translate-x-1/2 text-black w-max`}
        >
          Cortometraje Mexicano 2026
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
