import Image from "next/image";
import React from "react";

const EncuentroHome = () => {
  return (
    <div className="relative">
      <Image
        className="mb-3 absolute -top-20 -z-10 right-[6%] rotate-180 scale-30 lg:scale-100"
        width={82 }
        height={202}
        src={`/logo1.png`}
        alt="colored line"
      />

      <p className="text-center ml-6 lg:text-left lg:text-[50px] text-[38px] pt-12 pb-10  font-work-sans font-bold tracking-[-2.85px]">
        Somos un punto de encuentro. <br className="lg:hidden" /> 
        <span className="relative">
          Somos una red.
          <Image
            width={338}
            height={24}
            className="absolute -bottom-4 left-0 "
            src={"/yellowLines.png"}
            alt="yellow lines"
          />
        </span>{" "}
      </p>
      <div className="lg:flex lg:items-center lg:gap-12 px-7">
        <div className="lg:w-1/2  mx-auto aspect-[503/335] relative">
          <Image
            fill
            alt=""
            src={"/encuentro.jpg"}
            className="object-cover  border-pink border-12"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-2xl mt-8 lg:mt-0 lg:text-[30px] font-bold text-center lg:text-left font-work-sans mb-5 tracking-tight">
            Una historia que continúa transformándose...{" "}
          </p>
          <p className="font-montserrat mb-2 lg:text-[20px]">
            <span className="font-bold">NÓMADA</span> nace a partir de la
            experiencia acumulada durante más de dos décadas de trabajo en la
            organización de festivales y proyectos cinematográficos.
          </p>
          <p className="font-montserrat mb-2 lg:text-[20px]">
            Ese recorrido permitió consolidar una red de colaboradores, aliados
            y profesionales comprometidos con el fortalecimiento del cine en
            México.
          </p>
          <p className="font-montserrat mb-2 lg:text-[20px]">
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
