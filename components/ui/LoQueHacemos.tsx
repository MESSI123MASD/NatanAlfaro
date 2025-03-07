import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar estilos del carrusel
import "./LoQueHacemos.css";

const LoQueHacemos: React.FC = () => {
  return (
    <div className="loQueHacemosContainer">
      {/* Cuadro de información */}
      <div className="infoBox">
        <h2>Lo que hacemos</h2>
        <p>
          Somos una comunidad dedicada a la enseñanza, el crecimiento y la
          expansión del mensaje a través de diferentes actividades y ministerios.
        </p>
      </div>
    

   


      {/* Carrusel de fotos o videos */}
      <div className="carouselContainer">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={22000}
        >
          <div>
            <img src="/assets/2.JPG" alt="Imagen 1" />
          </div>
          <div>
            <img src="/assets/3.JPG" alt="Imagen 2" />
          </div>

          <div>
            <img src="/assets/1.JPG" alt="" />
          </div>
          <div>
  <video controls>
    <source src="/assets/25k.mp4" type="video/mp4" />
  </video>
</div>

        </Carousel>
      </div>
    </div>
  );
};

export default LoQueHacemos;
