import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className='min-h-screen backdrop-brightness-10   bg-[url("/heroBG.jpg")] bg-center bg-no-repeat bg-cover flex items-center justify-center relative'>
        <img
          src="/darkenbg.png"
          alt=""
          className="absolute top-1/2 right-[10%] -translate-y-1/2"
        />
        <div className="w-4/5 relative h-[70vh]">
          <Image
            fill
            src={"/heroText.png"}
            alt="Nomada festival"
            className="object-contain"
          />
        </div>
      </div>
      <div className='min-h-screen overflow-hidden  bg-[url("/bgSection2.jpg")]  bg-no-repeat bg-fill bg-left text-black flex flex-col justify-center px-20 relative'>
        {/* <img
          src="/whiteFilter.png"
          alt=""
          className="absolute left-0 scale-200 top-0  w-screen h-full object-fill"
        /> */}
        <img
          src="/whiteFilter.png"
          alt=""
          className="absolute -rotate-90 -left-20 scale-200 top-0  w-screen h-full object-fill"
        />
        <div className="lg:w-1/2 z-10">
          <p className="uppercase text-[37px] lg:text-[50px] font-bold font-work-sans leading-12">
            UNA <span className="text-blue">NUEVA forma</span>
            <br />
            de entender el <br />
            cine, <span className="text-pink">LA INDUSTRIA</span>,
            <br />
            el territorio y la
            <br />
            <span className="relative">
              comunidad
              <Image
                width={338}
                height={24}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                src={"/yellowLines.png"}
                alt="yellow lines"
              />
            </span>
          </p>
          <p className="font-montserrat mt-10">
            Un Festival Internacional de Cine itinerante impulsado por Tulip
            Pictures que más que un evento anual, es una plataforma cultural que
            busca fortalecer la circulación de películas, acercar nuevas voces a
            distintas audiencias y generar espacios de encuentro para el cine
            durante todo el año.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
