import Image from "next/image";
import React from "react";
import Facebook from "./social logos/Facebook";
import Twitter from "./social logos/Twitter";
import Instagram from "./social logos/Instagram";
import Youtube from "./social logos/Youtube";
import Tiktok from "./social logos/Tiktok";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white relative pb-8">
      <div className="w-[276px] relative h-[117px] mx-auto my-8">
        <Image
          fill
          src={"/heroText.png"}
          alt="Nomada festival"
          className="object-contain"
        />
      </div>
      <div className="mx-auto  text-center">
        <div className="flex w-max mx-auto mb-6">
          <div className="flex gap-2 w-max">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61592783435357&locale=es_LA"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nomadafilmfestival/"
            >
              <Instagram />
            </a>
            <a target="_blank" href="https://x.com/Nomadafilmfest">
              <Twitter />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCIjpyC0z_Sqoc4rdFKNuwtg"
            >
              <Youtube />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@nomadafilmfest">
              <Tiktok />
            </a>
          </div>
          <p className="w-max ml-10">@nomadafilmfest</p>
        </div>
        <div className="flex w-max mx-auto mb-6">
          <Envelope />
          <p className="ml-4">info@nomadafilmfest.com</p>
        </div>
        <p className="mb-10">
          2026 &reg; Nómada. Todos los Derechos Reservados.
        </p>
      </div>
      <div>
        <div className="mx-auto relative w-[70px] h-[28px]">
          <Image src={"/Tulip_Logo.png"} fill alt="Logo tulip" />
        </div>
      </div>
      <div className="py-3  lg:text-left">
        <div className="flex gap-3 font-bold text-sm justify-center lg:justify-start">
          <p>Términos y ayuda</p>
          <Link href={'/avisoDePrivacidad'}>Política de privacidad</Link>
        </div>
      </div>
      <Image
        className="mb-3 absolute -top-18 lg:-top-28  right-[60px] lg:right-30 scale-30 lg:scale-100"
        width={82 / 1.6}
        height={202 / 1.6}
        src={`/logo1.png`}
        alt="colored line"
      />{" "}
      <Image
        className="mb-3 absolute -top-18 lg:-top-28  right-[40px] lg:right-[200px] scale-30 lg:scale-100"
        width={82 / 1.6}
        height={202 / 1.6}
        src={`/logo2.png`}
        alt="colored line"
      />{" "}
      <Image
        className="mb-3 absolute -top-18 lg:-top-28  right-[20px] lg:right-[280px] scale-30 lg:scale-100"
        width={82 / 1.6}
        height={202 / 1.6}
        src={`/logo3.png`}
        alt="colored line"
      />
    </div>
  );
};

export default Footer;

const Envelope = () => {
  return (
    <div className="w-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          fill="rgb(255, 255, 255)"
          d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"
        />
      </svg>
    </div>
  );
};
