import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import logo from "./imagens/logo-1.png"

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="imagem da logo de cão"/></Link>
            <div>
                <Link to="/Servicos"><span>Serviços</span></Link>
                <span>Contatos</span>
            </div>
        </header>
    );
}

export default Header;