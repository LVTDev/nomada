"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

const HeroLogo = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    gsap.to(".imgHeroCont", { y: 0, opacity:1, ease:'bounce.out',duration: .7 });
  });
  return (
      <div className="w-4/5 relative h-[80vh] imgHeroCont -translate-y-30 opacity-0">
        <Image
          fill
          src={"/heroText.png"}
          alt="Nomada festival"
          className="object-contain"
        />
      </div>
  );
};

export default HeroLogo;
