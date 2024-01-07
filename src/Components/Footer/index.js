import styles from "./Footer.module.css"
import logo from "./imagens/logo-1.png"

function Footer() {
    return(
        <footer className={styles.footer}>
            <img  src={logo} alt="imagem logo cão"/>
        </footer>

    );
}

export default Footer;