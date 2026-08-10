import Image from "next/image";
import React from "react";

const EncuentroHome = () => {
  return (
    <div className="relative">
      <Image
        className="mb-3 absolute -top-3 -z-10 right-[20%] rotate-180"
        width={82 / 3}
        height={202 / 3}
        src={`/logo1.png`}
        alt="colored line"
      />

      <p className="text-center lg:text-[53px] text-[38px] pt-8 pb-4  font-work-sans font-extrabold">
        Somos un punto de encuentro. <br className="lg:hidden" />{" "}
        <span className="relative">
          Somos
          <Image
            width={338}
            height={24}
            className="absolute -bottom-3 -left-20"
            src={"/yellowLines.png"}
            alt="yellow lines"
          />
        </span>{" "}
        una red.
      </p>
      <div className="lg:flex lg:gap-8 px-7">
        <div className="w-3/4 lg:w-1/3 h-[50vh] relative">
          <Image
            fill
            alt=""
            src={"/encuentro.jpg"}
            className="object-cover  border-pink border-12"
          />
        </div>
        <div className="lg:w-2/3">
          <p className="text-2xl lg:text-[32px] font-bold font-work-sans mb-5">
            Una historia que continúa transformándose...{" "}
          </p>
          <p className="font-montserrat mb-2 lg:text-[22px]">
            <span className="font-bold">NÓMADA</span> nace a partir de la
            experiencia acumulada durante más de dos décadas de trabajo en la
            organización de festivales y proyectos cinematográficos.
          </p>
          <p className="font-montserrat mb-2 lg:text-[22px]">
            Ese recorrido permitió consolidar una red de colaboradores, aliados
            y profesionales comprometidos con el fortalecimiento del cine en
            México.
          </p>
          <p className="font-montserrat mb-2 lg:text-[22px]">
            Hoy esa experiencia evoluciona hacia una{" "}
            <span className="font-bold">nueva etapa.</span>
          </p>
        </div>
      </div>
      <p className="text-[28px] my-6 lg:my-12 lg:text-[38px] font-bold font-work-sans px-2 lg:px-8">
        Un <span className="text-blue">Festival</span> de cine en movimiento.
      </p>
    </div>
  );
};

export default EncuentroHome;
