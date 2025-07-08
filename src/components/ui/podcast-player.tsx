"use client"

import { useState } from "react"
import "./podcast-styles.css"

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false) // Estado para la visibilidad de la descripción

  return (
    <div className="container">
      <div className="podcast-grid">
        {/* Left Column - Podcast Info */}
        <div className="podcast-info">
          <span className="label">Faro Del Espíritu</span>
          <h1 className="title">Encuentra mis series más recientes de Faro Del Espíritu</h1>
          <p className="description">Disfruta de uno de los Mensajes Mas  Escuchados.</p>

          {/* Botón para mostrar/ocultar la descripción */}
          <button 
            className="btn toggle-description-btn"
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
          >
            {isDescriptionVisible ? 'Ocultar' : 'Historia'}
          </button>

          {/* Descripción desplegable */}
          {isDescriptionVisible && (
            <p className="full-description">
              Este es el lugar donde puedes encontrar una amplia variedad de mensajes y enseñanzas del Pastor Natán Alfaro. Cada programa está diseñado para inspirar, enseñar y profundizar en la fe cristiana. ¡Sigue escuchando y recibiendo bendiciones!
            </p>
          )}

          <div className="button-group">
            <button className="btn apple-btn">YOUTUBE</button>
            <button className="btn spotify-btn">SPOTIFY</button>
          </div>
        </div>

        {/* Right Column - Player Card */}
        <div className="player-card">
          <div className="episode-info">
            <img
             src="/assets/FDE.png"
              alt="Podcast cover"
              className="episode-image"
            />
            <div className="episode-text">
              <h2 className="episode-title">PROGRAMA PRUEBA</h2>
              <p className="episode-author">PASTOR NATÁN ALFARO</p>
            </div>
          </div>

          <div className="player-controls">
            <div className="control-buttons">
              <button className="control-btn">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </button>
              <button className="control-btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? (
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
              <button className="control-btn">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
              </button>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
                <input type="range" min="0" max="100" className="progress-input" defaultValue="0" />
              </div>
              <div className="time-display">
                <span>0:00</span>
                <span>36:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
