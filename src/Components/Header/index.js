import styles from "./Header.module.css"
import logo from "./imagens/logo-1.png"

function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="imagem da logo de cão"/>
            <div>
                <span>Serviços</span>
                <span>Contatos</span>
            </div>
        </header>
    );
}

export default Header;