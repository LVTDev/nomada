import Image from "next/image";
import React from "react";

const ExperenciaHome = () => {
  return (
    <div className="font-montserrat relative overflow-hidden">
      <div className="relative w-full h-32 lg:h-52">
        <Image
          alt=""
          src={"/movimento.jpg"}
          fill
          className="object-cover object-[2%]"
        />
      </div>
      <p className="text-[24px] pt-8 lg:text-[52px] leading-8 lg:leading-16 lg:w-4/5 lg:ml-auto font-bold text-right lg:pr-8 font-work-sans lg:py-7">
        Buscando una <span className="text-pink">experiencia compartida</span>{" "}
        que fortalece redes culturales y amplía el acceso a nuevas audiencias.
      </p>
      <p className="text-[22px] font-semibold my-5 px-5 lg:px-12">
        Una manera distinta de construir comunidad...
      </p>
      <p className="mb-5 px-6 lg:px-12 text-[22px]">
        Cada territorio posee una identidad propia, una historia distinta y
        formas particulares de relacionarse con el cine.
      </p>
      <p className="mb-5 px-6 lg:px-12 text-[22px]">
        Por ello, <span className="font-bold">NÓMADA</span> desarrolla un modelo
        flexible que permite adaptar sus actividades a diferentes contextos,
        estableciendo alianzas con universidades, cineclubes, centros
        culturales, museos y organizaciones locales.
      </p>
      <Image
        className="mb-3 absolute top-[28%] lg:top-[38%]  left-0 rotate-90"
        width={82 / 2}
        height={202 / 2}
        src={`/logo2.png`}
        alt="colored line"
      />{" "}
      <Image
        className="mb-3 absolute bottom-[4%] lg:bottom-[6%]  right-[1%]  rotate-270"
        width={82 / 2}
        height={202 / 2}
        src={`/logo3.png`}
        alt="colored line"
      />
    </div>
  );
};

export default ExperenciaHome;
