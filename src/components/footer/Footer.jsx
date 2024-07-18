import logoImg from "../../assets/logo.png";
import "./footer-styles.css";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logoImg} />
        <h3>
          Programacion <br />
          e <br />
          historia
        </h3>
      </div>

      <div>
        <p>Sitio con fines educativos - Creado por Juan Cruz Vetromile</p>
      </div>
    </footer>
  );
}

export default Footer;
