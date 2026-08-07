import Image from "next/image";
import React from "react";

const ExperenciaHome = () => {
  return (
    <div className="font-montserrat">
      <div className="relative w-full h-32 lg:h-52">
        <Image
          alt=""
          src={"/movimento.jpg"}
          fill
          className="object-cover object-[2%]"
        />
      </div>
      <p className="text-[28px] lg:text-[52px] leading-16 lg:w-4/5 lg:ml-auto font-bold text-right pr-8 font-work-sans lg:py-7">
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
    </div>
  );
};

export default ExperenciaHome;
