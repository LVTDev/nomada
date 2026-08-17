"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const BottomGridHome = () => {
  const info = [
    { name: "festival", image: "/festival.jpg", color: "yellow" },
    { name: "industria", image: "/industria.jpg", color: "blue" },
    { name: "lab", image: "/lab.jpg", color: "pink" },
    { name: "territorio", image: "/territorio.jpg", color: "yellow" },
    { name: "en línea", image: "/enLinea.jpg", color: "pink" },
    { name: "comunidad", image: "/comunidad.jpg", color: "blue" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".grid-item", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="lg:mt-20 pb-4" ref={containerRef}>
      <p className="text-yellow"></p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-y-3.5">
        {info.map((inf, i) => (
          <div key={i} className="mx-auto grid-item">
            <p className={`underline text-${inf.color} font-bold text-[30px]`}>
              0{i + 1}
            </p>
            <p className="font-bold text-[30px] uppercase">{inf.name}</p>
            <Image
              className="mb-3"
              width={220}
              height={12}
              src={`/single${inf.color}Line.png`}
              alt="colored line"
            />
            <div className="relative h-[215px] w-[321px]">
              <Image
                className="object-cover"
                src={inf.image}
                fill
                alt={inf.name}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center uppercase tracking-tight leading-12 mb-10 text-[18px] lg:text-[48px] my-10 lg:my-20 font-work-sans font-bold">
        Próximamente | Agenda de <br />
        Actividades 2026–2027
      </p>
    </div>
  );
};

export default BottomGridHome;