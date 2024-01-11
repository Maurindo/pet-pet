import { Link } from "react-router-dom";
import styles from "./Footer.module.css"
import logo from "./imagens/logo-1.png"

function Footer() {
    return(
        <footer className={styles.footer}>
           <Link to="/"><img  src={logo} alt="imagem logo cão"/></Link>
        </footer>

    );
}

export default Footer;