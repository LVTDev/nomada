"use client";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

const TypewriterText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Blink the cursor
    gsap.to("#cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    const spans = containerRef.current?.querySelectorAll<HTMLElement>(
      ".typewriter-text span:not(#cursor)",
    );
    if (!spans || spans.length === 0) return;

    // Hide all word spans initially
    gsap.set(Array.from(spans), { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.3 });

    spans.forEach((span) => {
      const originalText = span.textContent || "";
      span.textContent = "";
      gsap.set(span, { opacity: 1 });

      // Type each character one by one
      const chars = originalText.split("");
      let revealed = "";

      chars.forEach((char, i) => {
        tl.add(
          () => {
            revealed += char;
            span.textContent = revealed;
          },
          `+=${i === 0 ? 0.15 : 0.07}`,
        ); // slight pause between words, fast within
      });

      // Pause between words
      tl.add(() => {}, "+=0.4");
    });

    return () => {
      tl.kill();
      gsap.killTweensOf("#cursor");
    };
  }, []);

  return (
    <div ref={containerRef}>
      <p className="text-xl md:text-4xl mb-8 text-right mx-auto typewriter-text">
        <span id="cursor">|</span>
        {/* <span className="font-extralight">PICTURES</span>
        <span>FILMS</span>
        <span className="font-bold">CINEMA</span> */}
        {/* <span>NUEVA</span>
        <span>FORMA</span> */}
        <span>Un</span>
        <span>Festival</span>
        <span>de</span>
        <span>cine</span>
        <span>en</span>
        <span>movimiento</span>
      </p>
    </div>
  );
};

export default TypewriterText;
