import "./homepage-styles.css";
import historyImg from "../../assets/historia-programacion.jpg";
import gameImg from "../../assets/img2.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header className="home-header-container">
        <h1>Programacion e Historia</h1>
      </header>

      <main className="home-container">
        <h2>Contenido</h2>
        <section>
          <div className="contain-card">
            <img src={historyImg} />
            <p>Conozcamos un poco sobre la historia de la programacion</p>
            <Link to="/history">
              <button>Ir a historia</button>
            </Link>
          </div>
          <div className="contain-card">
            <img src={gameImg} />
            <p>Vamos a jugar un poco utilizando metodos aprendidos en clase</p>
            <Link to="/game">
              <button>Ir a juego</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
