import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type SlideType = {
  video: string;
  link: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 })
  ]);

  const goToNext = () => emblaApi?.scrollNext();
  const goToPrev = () => emblaApi?.scrollPrev();

  return (
    <div className="embla">
   
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <video
                src={slide.video}
                controls
                autoPlay={index === 0} // Solo el primer video se reproduce automáticamente
                muted
                loop
                className="embla__video"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button
          className="embla__button"
          onClick={goToPrev}
        >
          &#10094; {/* Flecha izquierda */}
        </button>

        <button
          className="embla__button"
          onClick={goToNext}
        >
          &#10095; {/* Flecha derecha */}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
