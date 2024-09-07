import styles from "./Contato.module.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ContatosPet(){
    return (
      <div className={styles.corpo}>
        <h4>Envia sua perguntas</h4>
        <form>
          <label>e-mail</label>
          <br />
          <input type="text" />
          <br />
          <label>Telefone</label>
          <br />
          <input type="text" />
          <br />
          <br />
          <textarea></textarea>
          <br />
          <button>Enviar</button>
        </form>
      </div>
    );
}
      
 
export default ContatosPet;