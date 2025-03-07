import React from 'react';
import { FC, useRef } from "react";
import './BioProfile.css';
import { Link } from 'react-router-dom';

interface BioProfileProps {
  name: string;
  description: string;
  imagePath: string;
}

export const BioProfile: React.FC<BioProfileProps> = ({ name, description, imagePath }) => {
  return (
    <header id="biografia">
      <div className="container" id="bioProfile">
        <div className="content">
          <img src={imagePath} alt={name} className="image" />
          <div className="textContainer">
            <h2 className="title">{name}</h2>
            <p className="description">{description}</p>
            <Link to="/lo-que-hacemos" target="_blank" className="button-link">
              Encuentrame en mis Redes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BioProfile;
