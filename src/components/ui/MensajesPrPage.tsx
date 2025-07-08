import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './styles.css'

// Array de IDs de los videos de YouTube
const videoIds = [
  "VAEQ_SzZYhs", // Reemplaza con tus propios IDs de video
  "khXveCtFpg0",
  "MENLwPumn94",
  "Iha1AyQkSvE",
  "F4VITdFvWAo"
];

// Generar los elementos del carrusel dinámicamente
const items = videoIds.map((id, index) => (
  <div className="item" key={index}>
    <div className="media">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
        title={`YouTube video player ${index}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
));

export const MensajesPrPage: React.FC = () => {
  const [mainIndex, setMainIndex] = useState<number>(0);

  const slideNext = (): void => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = (): void => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  return (
    <div className="page-container">
      <h2>Mensajes de Natan Alfaro</h2>
      <p>¡Bienvenido al espacio de mensajes de Natan Alfaro!</p>

      {/* Carrusel */}
      <div className="carousel-container">
        <AliceCarousel
          activeIndex={mainIndex}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
        <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
        <div className="caption-container">
          <p className="caption">
      
          </p>
        </div>

        <div className="btn-prev" onClick={slidePrev}>
          &lang;
        </div>
        <div className="btn-next" onClick={slideNext}>
          &rang;
        </div>
      </div>
    </div>
  );
};
