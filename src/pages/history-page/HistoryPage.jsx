import VideoPlayer from "../../components/video-player/VideoPlayer";
import "./historypage-styles.css";
import SectionImg1 from "../../assets/history-img1.jpg";
import SectionImg2 from "../../assets/history-img2.webp";
import SectionImg3 from "../../assets/history-img3.jpg";
import { useEffect } from "react";

function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="history-header">
        <h1 className="blue-bg">Historia de la programacion</h1>
      </header>

      <main className="history-container">
        <section>
          <img src={SectionImg1} />
          <span>
            <h2>El principio de la historia de la programación</h2>
            <p>
              El primer lenguaje de programación fue un algoritmo creado por Ada
              Lovelace en 1883. <br />
              Ada Lovelace creó este algoritmo para el motor analítico de
              Charles Babbage. <br />
              El propósito de este algoritmo era calcular los números de
              Bernoulli.
              <br />
              En 1936, por primera vez, los códigos informáticos fueron
              especializados por Alonzo Church y Alan Turing.
              <br />
              Church expresó el cálculo lambda de forma formulativa.
            </p>
          </span>
        </section>
        <section>
          <span>
            <h2>Lenguaje de ensamblaje</h2>
            <p>
              Los primeros ordenadores modernos (alimentados eléctricamente)
              fueron creados en los años 40. Estas computadoras estaban
              limitadas en velocidad y capacidad de memoria.
              <br />
              Debido a estas limitaciones, los programadores se vieron obligados
              a escribir manualmente programas en lenguaje ensamblador. Siendo
              un lenguaje de programación de bajo nivel, era una tarea difícil
              programarlo manualmente. Los programadores se dieron cuenta
              entonces de la necesidad de lenguajes de alto nivel para disminuir
              el esfuerzo que se requería para escribir los programas en
              lenguaje ensamblador manualmente.
            </p>
          </span>

          <img src={SectionImg2} />
        </section>
        <section>
          <img src={SectionImg3} />
          <span>
            <h2>Los primeros lenguajes de programación</h2>
            <p>
              FORmulaTRANslation es el lenguaje de programación más antiguo y
              que continúa en uso. Creada por John Backus en 1957, esta
              herramienta fue desarrollada para la computación científica de
              alto nivel, matemáticas y estadísticas.
              <br />
              A día de hoy, este lenguaje se sigue usando en la industria
              automovilística, aeroespacial, gubernamental y la investigación.
              Por ejemplo, es muy útil para el pronóstico de los servicios
              meteorológicos.
              <br />
              En 1959 se desarrollo Cobol, que está detrás de la mayoría de los
              sistemas de transacciones de negocio de los procesos de las
              tarjetas de crédito, ATMs (Modo de Transferencia Asíncrona),
              telefonía, sistemas hospitalarios, gobierno, sistemas
              automatizados y señales de tráfico.
              <br />
              El desarrollo de Cobol, creado por Grace Murray Hopper, muestra un
              lenguaje famipar y uniforme para transacciones empresariales. Por
              ejemplo, lo usan en el servicio postal estadounidense. <br />
              En 1964 se creo Basic, que fue diseñado como un lenguaje
              simppficado para aquellos que no tenían como base fuertes
              conocimientos técnicos o matemáticos.
              <br />
              Entre 1969 y 1973 se crea <b>C</b>,a manos de Dennis Ritchie para
              los laboratorios Bell Telephone para usarlos en el sistema Unix.
              Se le llamó «C» porque sus características derivaban de un
              lenguaje anterior llamado «B».
              <br />
              En los laboratorios Bells, Bjarne Stroustrup modificó el lenguaje
              C al C++, creando lo que muchos consideran el lenguaje de
              programación más popular que ha existido nunca. Además, ha sido
              listado en lo alto de los top ten de los lenguajes de programación
              desde 1986 y archivado en el Hall of Fame en 2003. Hoy en día es
              usado por Firefox, Office y Adobe PDF Reader.
              <br />
              Esto dio el puntapie a que se sigan perfeccionando los lenguajes
              hasta llegar al os lenguajes de hoy en dia
            </p>
          </span>
        </section>

        <span className="video-title">Hablemos un poquito mas...</span>

        <VideoPlayer />
      </main>
    </>
  );
}

export default HistoryPage;
