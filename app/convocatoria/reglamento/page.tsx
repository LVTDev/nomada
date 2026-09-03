import ListItem from "@/components/ListItem";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-center text-3xl font-bold">REGLAMENTO </h1>
        <h2 className="text-center text-lg my-4 font-bold">Competencia de Cortometraje Mexicano Festival Internacional de Cine Nómada 2026</h2>
        <h3 className="font-bold my-3">I. DISPOSICIONES GENERALES</h3>
        <h4 className="font-semibold my-1">1. Organizador y objeto</h4>
        <p>
          La convocatoria es organizada por{" "}
          <span className="font-bold">
            Festival Internacional de Cine de Monterrey A.C.
          </span>
          , con domicilio en{" "}
          <span className="font-bold">
            Calle Río Rosas Sur No. 330, Interior 2A, Col. Del Valle, C.P.
            66220, San Pedro Garza García, Nuevo León, México
          </span>
          , en adelante el “Organizador”. El{" "}
          <span className="font-bold">
            Festival Internacional de Cine NÓMADA
          </span>
          , en adelante el “Festival”, tiene por objeto promover la circulación
          y exhibición cultural del cortometraje mexicano y fomentar su
          encuentro con públicos diversos mediante un circuito itinerante en
          México.
        </p>
        <p className="mt-4">
          La sección Cortometraje Mexicano es competitiva y comprende una sola
          categoría. El Festival podrá integrar las obras seleccionadas en
          distintos programas curatoriales sin afectar su calidad de Selección
          Oficial ni su elegibilidad para los premios.
        </p>
        <h3 className="font-bold my-3">II. ELEGIBILIDAD</h3>
        <h4 className="font-semibold my-1">2. Requisitos de participación</h4>
        <p>Podrán participar cortometrajes que:</p>
        <ul>
          <ListItem
            text="cuenten con participación mexicana en su producción o coproducción"
            i={1}
          />
          <ListItem text="hayan sido terminados en 2025 o 2026" i={2} />
          <ListItem
            text="cuenten con participación mexicana en su producción o coproduccióntengan una duración mínima de 1 minuto y menor de 30 minutos, incluidos créditos"
            i={3}
          />
          <ListItem
            text="sean obras terminadas de ficción, documental, animación, experimental o formato híbrido"
            i={1}
          />
        </ul>
        <p className="my-2">
          No se admitirán obras incompletas; piezas publicitarias, corporativas
          o promocionales; tráileres, teasers, demos o reels; videoclips sin
          propuesta cinematográfica autónoma; ni episodios o fragmentos de
          contenidos seriados que no funcionen como obra independiente.
        </p>
        <p className="my-2">
          Una misma persona podrá inscribir varias obras, cada una mediante un
          registro independiente.
        </p>
        <h4 className="font-semibold my-1">3. Estreno y disponibilidad pública</h4>
        <p className="my-2">
          No se exige condición de estreno. La novedad de exhibición en México o
          en la sede correspondiente podrá considerarse como criterio
          curatorial.
        </p>
        <p className="my-2">
          No serán elegibles las obras que hayan tenido estreno comercial en
          México fuera de festivales o muestras culturales, ni aquellas
          disponibles al público general desde México, al cierre de la
          convocatoria, mediante streaming, video bajo demanda, YouTube, Vimeo,
          redes sociales u otros sitios de internet, de manera gratuita o de
          pago.
        </p>
        <p className="my-2">
          No se considerarán disponibilidad pública los enlaces privados, no
          listados o protegidos por contraseña utilizados para evaluación,
          prensa, industria o festivales, ni las exhibiciones temporales en
          línea con acceso restringido.
        </p>
        <h3 className="font-bold my-3">III. INSCRIPCIÓN</h3>
        <h4 className="font-semibold my-1">4. Plazo, plataforma y costo</h4>
        <p className="my-2">
          La convocatoria abrirá el{" "}
          <span className="font-bold">5 de septiembre de 2026</span> y cerrará
          el{" "}
          <span className="font-bold">
            8 de noviembre de 2026 a las 23:59 horas, tiempo del centro de
            México.
          </span>
        </p>
        <p className="my-2">
          La inscripción será gratuita y se realizará exclusivamente mediante{" "}
          <a
            href="https://filmfreeway.com/FestivalInternacionaldeCineNomada"
            className="font-bold"
          >
            FilmFreeway
          </a>
        </p>
        <h4 className="font-semibold my-1">5. Información y screener</h4>
        <p className="my-2">
          La persona participante deberá completar la información solicitada en
          FilmFreeway y el cuestionario adicional del Festival, incluyendo datos
          sobre participación mexicana, historial de exhibiciones,
          disponibilidad pública, titularidad de derechos, uso de inteligencia
          artificial, clasificación de audiencia y aceptación de este
          Reglamento.
        </p>
        <p className="my-2">
          El screener deberá corresponder a la versión final inscrita,
          permanecer accesible durante el periodo de evaluación y contar con
          contraseña vigente cuando corresponda.
        </p>
        <p className="my-2">
          Las obras habladas total o parcialmente en una lengua distinta del
          español, incluidas las lenguas originarias de México, deberán incluir
          subtítulos en español.
        </p>
        <p className="my-2">
          La información proporcionada deberá ser veraz. La falsedad u omisión
          sustancial podrá causar la descalificación de la obra.
        </p>
        <h3 className="font-bold my-3">IV. DERECHOS E INTELIGENCIA ARTIFICIAL</h3>
        <h4 className="font-semibold my-1">6. Facultad y cadena de derechos</h4>
        <p className="my-2">
          Quien inscribe declara contar con facultades suficientes para
          registrar la obra, aceptar su selección y autorizar los usos previstos
          en este Reglamento.
        </p>
        <p className="my-2">
          Asimismo, garantiza contar con los derechos, licencias y
          autorizaciones necesarios sobre los elementos incorporados en la obra,
          incluyendo guion, música, interpretaciones, voces, imágenes, archivos,
          obras de terceros, marcas, imagen y datos personales.
        </p>
        <h4 className="font-semibold my-1">7. Uso de inteligencia artificial</h4>
        <p className="my-2">
          La persona participante deberá declarar si utilizó herramientas de
          inteligencia artificial y, en su caso, indicar de manera general en
          qué elementos o etapas.
        </p>
        <p className="my-2">
          Su uso no será, por sí mismo, motivo de descalificación; sin embargo,
          la persona participante será responsable de contar con los derechos y
          autorizaciones necesarios.
        </p>
        <p className="my-2">
          El Festival podrá solicitar aclaraciones o excluir una obra cuando
          existan indicios fundados de falta de autorización, apropiación o
          suplantación no consentida.
        </p>
        <h3 className="font-bold my-3">V. SELECCIÓN</h3>
        <h4 className="font-semibold my-1">8. Comité y criterios</h4>
        <p className="my-2">
          Las obras serán evaluadas por un Comité de Selección designado por el
          Festival, que podrá considerar calidad artística y técnica,
          originalidad, pertinencia cultural, diversidad, clasificación de
          audiencia y viabilidad de integración al Circuito.
        </p>
        <p className="my-2">
          Sus decisiones serán definitivas e inapelables y no se proporcionará
          retroalimentación individual.
        </p>
        <p className="my-2">
          El Festival prevé seleccionar aproximadamente{" "}
          <span className="font-bold">seis cortometrajes;</span> el número final
          podrá variar de acuerdo con las necesidades de programación.
        </p>
        <h4 className="font-semibold my-1">9. Notificación, aceptación y retiro</h4>
        <p className="my-2">
          La Selección Oficial será notificada a las personas responsables y
          anunciada públicamente en 11 diciembre de 2026, a través del correo
          registrado en FilmFreeway y/o los canales oficiales del Festival.
        </p>
        <p className="my-2">
          La participación quedará confirmada cuando la persona titular acepte
          la carta de selección y autorización de exhibición dentro del plazo
          indicado.
        </p>
        <p className="my-2">
          Antes de esa confirmación, la obra podrá retirarse. Después de
          aceptada, sólo podrá retirarse por causa grave, imposibilidad jurídica
          comprobable o acuerdo escrito con el Festival.
        </p>
        <h3 className="font-bold my-3">VI. CIRCUITO DE EXHIBICIÓN</h3>
        <h4 className="font-semibold my-1">10. Periodo y funciones</h4>
        <p className="my-2">
          La Selección Oficial podrá exhibirse presencialmente en México entre{" "}
          <span className="font-bold">
            11 diciembre de 2026 y el 30 de noviembre de 2027,{" "}
          </span>{" "}
          en hasta{" "}
          <span className="font-bold">
            doce funciones culturales y sin fines de lucro por obra.
          </span>
        </p>
        <p className="my-2">
          Las sedes podrán incluir salas independientes, centros culturales,
          instituciones educativas, cineclubes, museos, bibliotecas, espacios
          comunitarios, públicos o alternativos e instituciones aliadas.
        </p>
        <p className="my-2">
          El Festival podrá organizar la Selección en distintos bloques según
          duración, audiencia, sede o condiciones técnicas, sin exceder el
          máximo de exhibiciones autorizado.
        </p>
        <h4 className="font-semibold my-1">11. Autorización de exhibición</h4>
        <p className="my-2">
          Al confirmar su participación, la persona titular otorgará al
          Organizador una autorización no exclusiva, gratuita, temporal y
          limitada al territorio mexicano para las funciones comprendidas en el
          Circuito.
        </p>
        <p className="my-2">
          Esta autorización no implica cesión de derechos patrimoniales,
          licencia de distribución comercial ni facultad para sublicenciar o
          explotar la obra fuera del Circuito.
        </p>
        <p className="my-2">
          No se pagarán screening fees, regalías ni otras contraprestaciones por
          la participación en la Selección Oficial o en el Circuito.
        </p>
        <h4 className="font-semibold my-1">12. Exhibición en línea y sedes aliadas</h4>
        <p className="my-2">
          El Festival no exhibirá en línea la obra completa ni pondrá el archivo
          de exhibición a disposición del público sin autorización adicional,
          previa y por escrito.
        </p>
        <p className="my-2">
          Las sedes aliadas sólo podrán utilizar la obra para las funciones
          autorizadas y bajo coordinación del Festival, sin adquirir facultades
          independientes de reproducción, publicación o exhibición posterior.
        </p>
        <h3 className="font-bold my-3">VII. PROMOCIÓN Y MATERIALES</h3>
        <h4 className="font-semibold my-1">13. Uso promocional</h4>
        <p className="my-2">
          Las personas seleccionadas autorizan al Festival a utilizar título,
          sinopsis, ficha técnica, cartel, fotogramas, fotografías, tráiler o
          teaser, nombres y semblanzas acreditadas, así como fragmentos de la
          obra con una duración acumulada máxima de 60 segundos, exclusivamente
          para comunicar y promover la Selección Oficial, funciones, actividades
          y premios.
        </p>
        <p className="my-2">
          Estos materiales podrán difundirse en el sitio web, redes sociales,
          YouTube, boletines, prensa y materiales del Festival o sus sedes, de
          forma orgánica o pagada.
        </p>
        <p className="my-2">
          Los fragmentos podrán adaptarse técnicamente en duración, subtítulos,
          encuadre o relación de aspecto, sin alterar de forma engañosa o
          denigrante el sentido de la obra.
        </p>
        <p className="my-2">
          La autorización no incluye la publicación de la obra completa ni de
          una parte sustancial de ella. Los materiales podrán conservarse
          posteriormente para memoria y archivo histórico del Festival, sin
          explotación comercial de la obra.
        </p>
        <h4 className="font-semibold my-1">14. Materiales de exhibición</h4>
        <p className="my-2">
          Las obras seleccionadas deberán entregar, dentro del plazo indicado
          por el Festival:
        </p>
        <ul>
          <ListItem text="archivo MP4 con códec H.264" i={1} />
          <ListItem
            text="resolución mínima Full HD 1920 × 1080 o equivalente según la relación de aspecto"
            i={2}
          />
          <ListItem text="audio sincronizado" i={3} />
          <ListItem text="enlace de descarga directo y vigente" i={1} />
        </ul>
        <p className="my-2">
          Cuando corresponda, deberán incluir subtítulos en español integrados o
          en archivo .srt.
        </p>
        <p className="my-2">
          El Festival podrá solicitar materiales promocionales y técnicos
          complementarios, así como la sustitución de archivos con errores. No
          se admitirán modificaciones creativas posteriores a la selección,
          salvo correcciones técnicas autorizadas.
        </p>
        <h3 className="font-bold my-3">VIII. CLASIFICACIÓN, JURADO Y PREMIOS</h3>
        <h4 className="font-semibold my-1">15. Clasificación de audiencia</h4>
        <p className="my-2">
          La persona participante deberá informar si la obra cuenta con
          clasificación oficial en México. La ausencia de clasificación al
          momento de la inscripción no impedirá su evaluación ni selección.
        </p>
        <p className="font-bold">
          En caso de que la clasificación o cualquier autorización relacionada
          resulte necesaria para la exhibición pública de la obra, su obtención
          y los costos correspondientes serán responsabilidad de la persona
          titular de la obra. El Festival no asumirá dichos costos.
        </p>
        <p className="my-2">
          El Festival podrá establecer advertencias, restricciones de acceso o
          integrar la obra en un programa compatible con la clasificación que
          corresponda.
        </p>
        <h4 className="font-semibold my-1">16. Jurado y Premio del Público</h4>
        <p className="my-2">
          El{" "}
          <span className="font-bold">
            Premio a Mejor Cortometraje Mexicano
          </span>{" "}
          será determinado por un Jurado designado por el Festival. Sus
          integrantes deberán revelar conflictos de interés y abstenerse cuando
          corresponda.
        </p>
        <p className="my-2">
          <span className="font-bold">El Premio del Público</span>
          se determinará mediante votación en las funciones que designe el
          Festival. Ganará la obra con mayor número de votos válidos; en caso de
          empate, resolverá el Jurado.
        </p>
        <p className="my-2">
          El Festival podrá invalidar votos duplicados, automatizados o
          manipulados.
        </p>
        <h4 className="font-semibold my-1">17. Reconocimientos</h4>
        <p className="my-2">Se otorgarán:</p>
        <ul>
          <ListItem
            text="Mejor Cortometraje Mexicano: estatuilla, diploma y laurel oficial"
            i={1}
          />
          <ListItem
            text="Premio del Público: estatuilla, diploma y laurel oficial"
            i={2}
          />
          <ListItem
            text="Selección Oficial: diploma de participación y laurel oficial"
            i={3}
          />
        </ul>
        <p className="my-2">
          No habrá premios en efectivo. Una misma obra podrá recibir ambos
          premios y el Jurado podrá otorgar menciones especiales sin premio
          económico.
        </p>
        <p className="my-2">
          Las obras ganadoras se anunciarán en{" "}
          <span className="font-bold">febrero de 2027</span>.
        </p>
        <p className="my-2">
          La asistencia de representantes de las obras seleccionadas o ganadoras
          no será obligatoria. Los gastos de transporte, hospedaje,
          alimentación, viáticos y cualquier otro gasto relacionado con su
          asistencia correrán por cuenta exclusiva de cada participante. El
          Festival no cubrirá ni reembolsará dichos gastos.
        </p>
        <h3 className="font-bold my-3">IX. RESPONSABILIDAD, DATOS Y DISPOSICIONES FINALES</h3>
        <h4 className="font-semibold my-1">18. Reclamaciones y responsabilidad</h4>
        <p className="my-2">
          La persona participante será responsable de contar con los derechos,
          licencias y autorizaciones necesarios para la inscripción y exhibición
          de la obra, así como de atender cualquier reclamación de terceros
          relacionada con éstos.
        </p>
        <p className="my-2">
          El Festival podrá cancelar, suspender, modificar o reprogramar una
          función por razones operativas, técnicas, de seguridad, disposiciones
          de autoridad, caso fortuito, fuerza mayor o cualquier otra
          circunstancia ajena a su control, sin que ello genere obligación de
          indemnización o compensación para las personas participantes.
        </p>
        <p className="my-2">
          El Festival y las sedes aliadas no serán responsables por fallas
          técnicas, interrupciones, actos de terceros, pérdida de oportunidades,
          gastos realizados por las personas participantes ni otros daños
          indirectos derivados de la participación en la convocatoria o el
          Circuito.
        </p>
        <h4 className="font-semibold my-1">19. Datos personales y comunicaciones</h4>
        <p className="my-2">
          Los datos personales serán tratados para administrar la convocatoria,
          evaluar las obras, contactar participantes, formalizar autorizaciones,
          organizar exhibiciones y premios y difundir la programación, conforme
          al aviso de privacidad disponible en
          <a href="https://www.nomadafilmfestival.com/avisoDePrivacidad">
            {" "}
            https://www.nomadafilmfestival.com/avisoDePrivacidad
          </a>
          .
        </p>
        <p className="my-2">
          La persona participante declara estar facultada para proporcionar los
          datos, fotografías y semblanzas de terceros incluidos en la
          inscripción.
        </p>
        <p className="my-2">
          Las comunicaciones enviadas al correo registrado en FilmFreeway se
          considerarán válidas.
        </p>
        <h4 className="font-semibold my-1">20. Descalificación</h4>
        <p className="my-2">El Festival podrá descalificar una obra por:</p>
        <ul>
          <ListItem
            text="incumplimiento de los requisitos de participación"
            i={1}
          />
          <ListItem
            text="información falsa o sustancialmente incompleta"
            i={2}
          />
          <ListItem text="falta de derechos o autorizaciones" i={3} />
          <ListItem
            text="problemas no subsanados en el screener o materiales"
            i={1}
          />
          <ListItem
            text="falta de respuesta a comunicaciones esenciales"
            i={2}
          />
          <ListItem
            text="existencia de un riesgo legal, de seguridad o regulatorio que impida razonablemente su exhibición"
            i={3}
          />
        </ul>
        <h4 className="font-semibold my-1">21. Cambios de programación</h4>
        <p className="my-2">
          Por razones operativas, técnicas, presupuestarias, de seguridad,
          disposiciones de autoridad, caso fortuito o fuerza mayor, el Festival
          podrá modificar fechas, sedes, horarios, ruta o programas.
        </p>
        <p className="my-2">
          Ningún cambio ampliará el periodo, territorio, número de exhibiciones
          o usos autorizados sin el consentimiento adicional de la persona
          titular cuando sea necesario.
        </p>
        <h4 className="font-semibold my-1">22. Interpretación, ley aplicable y jurisdicción</h4>
        <p className="my-2">
          Las situaciones no previstas serán resueltas por el Festival de buena
          fe y conforme a la legislación aplicable.
        </p>
        <p className="my-2">
          La convocatoria y este Reglamento se regirán por las leyes de los
          Estados Unidos Mexicanos.
        </p>
        <p className="my-2">
          Cualquier controversia que no pueda resolverse mediante diálogo
          directo se someterá a los tribunales competentes de{" "}
          <span className="font-bold">
            tribunales competentes de Monterrey, Nuevo León, México
          </span>
          , salvo disposición legal imperativa en contrario.
        </p>
        <h4 className="font-semibold my-1">23. Aceptación y contacto</h4>
        <p className="my-2">
          La inscripción implica la aceptación íntegra de la convocatoria y este
          Reglamento.
        </p>
        <p className="my-2">
          La aceptación formal de la Selección Oficial confirma además la
          autorización de exhibición y uso promocional en los términos aquí
          establecidos y en la carta correspondiente.
        </p>
        <p className="my-2">
          Para dudas sobre la convocatoria: programacion@nomadafilmfestival.com
        </p>
      </div>
    </div>
  );
};

export default page;
