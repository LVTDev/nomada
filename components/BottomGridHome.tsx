import Image from "next/image";
import React from "react";

const BottomGridHome = () => {
  const info = [
    { name: "festival", image: "/festival.jpg", color: 'yellow' },
    { name: "industria", image: "/industria.jpg",color: 'blue'  },
    { name: "lab", image: "/lab.jpg", color: 'pink' },
    { name: "territorio", image: "/territorio.jpg",color: 'yellow' },
    { name: "en línea", image: "/enLinea.jpg", color: 'pink' },
    { name: "comunidad", image: "/comunidad.jpg", color: 'blue' },
  ];
  return (
    <div>
        <p className="text-yellow"></p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-y-3.5">
        {info.map((inf, i) => (
          <div key={i}className="mx-auto">
            <p className={`underline text-${inf.color} font-bold text-[30px]`} >0{i + 1}</p>
            <p className="font-bold text-[30px] uppercase">{inf.name}</p>
            <Image className="mb-3" width={220} height={12} src={`/single${inf.color}Line.png`}  alt="colored line"/>
            <div className="relative h-[215px] w-[321px] ">
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
      <p className="text-center w-screen text-[38px] my-10 font-work-sans font-bold lg:text-[50px]">
        Próximamente | Agenda de <br />
        Actividades 2026–2027
      </p>
    </div>
  );
};

export default BottomGridHome;
