import styles from "./Servicos.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./imagens/dog_1.jpg";
import img2 from "./imagens/dog_2.jpeg";
import img3 from "./imagens/dog_3.jpeg";

function ServicosPet() {
  return (
    <div className={styles.painel}>
      <h4>Com maior amor para seus bicnhinhos</h4>
      <Carousel>
        <Carousel.Item interval={1250}>
          <img className={styles.imgDog} src={img1} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={1250}>
          <img className={styles.imgDog} src={img2} alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={1250}>
          <img className={styles.imgDog} src={img3} alt="image 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ServicosPet;
