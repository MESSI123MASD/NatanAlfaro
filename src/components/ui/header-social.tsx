import { Instagram, Facebook, Youtube, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./Header.module.css"; // Importando el CSS

const SocialHeader: React.FC = () => {
  return (
    <header className="relative min-h-[80vh] w-full overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bbh58bcYjMq0GBHBCDh93ViQgbPpVB.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="gridItem bg-pink-500 hover:bg-green-500 transition-colors">
          <Instagram className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            INSTAGRAM
          </h2>
          <Link
            href="#"
            className="mt-4 rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Visitar Instagram
          </Link>
        </div>

        <div className="gridItem bg-blue-600 hover:bg-green-500 transition-colors">
          <Facebook className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            FACEBOOK
          </h2>
        </div>

        <div className="gridItem bg-red-600 hover:bg-green-500 transition-colors">
          <Youtube className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            YOUTUBE
          </h2>
        </div>

        <div className="gridItem bg-green-500 hover:bg-green-700 transition-colors">
          <X className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            WHATSAPP
          </h2>
        </div>
      </div>
    </header>
  );
};

export default SocialHeader;
