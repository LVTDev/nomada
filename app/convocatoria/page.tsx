import ListItem from "@/components/ListItem";
import Link from "next/link";
import React from "react";

const page = () => {
  function createList(list: string[] | React.ReactNode[]) {
    let i = 1;
    return list.map((item, ite) => {
      const newI = i;
      i++;
      if (i > 2) i = 0;
      return <ListItem key={ite} text={item} i={newI + 1} />;
    });
  }

  return (
    <div className="pt-12">
      <div className="w-[90%] mx-auto pt-10">
        <h1 className="text-center text-3xl font-bold mb-8">
          CONVOCATORIA CORTOMETRAJE MEXICANO 2026
        </h1>
        <div>
          <p>
            <span className="font-bold">
              El Festival Internacional de Cine Nómada {" "}
            </span>
            convoca a personas realizadoras, productoras y titulares de derechos
            patrimoniales de autor de cortometrajes mexicanos a inscribir sus
            obras en la primera edición competitiva de la sección{" "}
            <span className="font-bold">Cortometraje Mexicano</span> . La
            Selección Oficial formará parte de un circuito cultural itinerante,
            presencial y sin fines de lucro, que recorrerá distintas entidades
            de la República Mexicana entre diciembre de 2026 y noviembre de
            2027.
          </p>
          <p className="my-4">
            <Link className="underline italic" href={"/convocatoria/reglamento"}>Conoce el reglamento</Link>
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3">¿Quiénes pueden participar?</h3>
          <ul>{createList(list1)}</ul>
        </div>
        <div>
          <h3 className="font-bold mt-5 mb-3">Condiciones de estreno y disponibilidad </h3>
          <p>
            No se exige condición de estreno. Sin embargo, la novedad de la
            exhibición en México o en el territorio de la sede correspondiente
            podrá considerarse como criterio curatorial de preferencia, sin
            garantizar la selección.
          </p>
          <p>
            No serán elegibles las obras que hayan tenido estreno comercial en
            México o que, al cierre de la convocatoria, se encuentren
            disponibles al público general desde México en plataformas de video
            bajo demanda, servicios de streaming, YouTube, Vimeo, redes sociales
            u otros sitios de internet, de manera gratuita o de pago. Los
            enlaces privados, no listados o protegidos por contraseña utilizados
            como screener, así como las exhibiciones temporales de festivales en
            línea con acceso restringido, no se considerarán disponibilidad
            pública.
          </p>
          <h3 className="font-bold mt-5 mb-3">Selección, exhibición y premios</h3>
          <ul>{createList(list2)}</ul>
          <h3 className="font-bold mt-5 mb-3">Fechas clave:</h3>
          <ul>{createList(listFechas)}</ul>
          <div className="mt-8">
            <a
              href="https://filmfreeway.com/FestivalInternacionaldeCineNomada"
              target="_blank"
              className="underline italic mt-8"
            >
              REGISTRA TU CORTOMETRAJE AQUÍ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const list1 = [
  "Obras cinematográficas terminadas en 2025 o 2026 que cuenten con participación mexicana en su producción o coproducción.",
  "Cortometrajes de ficción, documental, animación, experimental o formato híbrido.",
  "Obras con duración mínima de 1 minuto y máxima de 29 minutos con 59 segundos, incluidos créditos iniciales y finales.",
  "Una misma persona podrá inscribir más de una obra; cada cortometraje deberá registrarse por separado cada uno.",
];

const list2 = [
  "El Festival prevé integrar una Selección Oficial de aproximadamente seis cortometrajes.",
  "Toda la Selección Oficial podrá participar en hasta doce funciones presenciales, culturales y sin fines de lucro, en distintas entidades de México, entre diciembre de 2026 y noviembre de 2027.",
  "No habrá pago de derechos de exhibición o screening fees, por ser un proyecto cultural sin fines de lucro.",
  "Premio a Mejor Cortometraje Mexicano: estatuilla, diploma y laurel oficial.",
  "Premio del Público: estatuilla, diploma y laurel oficial.",
  "Las obras de la Selección Oficial recibirán diploma de participación y laurel oficial.",
  "No se otorgarán premios en efectivo.",
];

const listFechas = [
  <div key={0}>
    <b>5 de septiembre de 2026</b>
    <br />
    Apertura de la convocatoria.
  </div>,
  <div key={1}>
    <b>8 de noviembre de 2026, a las 23:59 </b>
    <br />
    Cierre de la convocatoria, conforme al horario del centro de México.
  </div>,
  <div key={2}>
    <b>11 Diciembre de 2026</b>
    <br />
    Notificación y anuncio de la Selección Oficial. Inicio del circuito de
    exhibiciones.
  </div>,
  <div key={3}>
    <b>19 Febrero de 2027</b>
    <br />
    Ceremonia de premiación y anuncio de las obras ganadoras.
  </div>,
  <div key={3}>
    <b>30 de noviembre de 2027</b>
    <br />
    Cierre del Circuito de Muestra de Cortometrajes Méxicano Nómada 2026.
  </div>,
];
