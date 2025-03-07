import { Button } from '../../components/ui/button';

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo de la sección */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/CDMG Logo 2025-01.png')`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col items-end justify-center min-h-screen text-right px-4">
        <span className="text-white text-sm md:text-base mb-4">#PASTORNATANALFARO</span>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            "AQUI HAY UN{' '}
            <span className="whitespace-nowrap">LUGAR</span>{' '}
            <span className="whitespace-nowrap">PARA TI."
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">PASTOR NATAN ALFARO</p>
        </div>
      </div>
    </div>
  );
}
