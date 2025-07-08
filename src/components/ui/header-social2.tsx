import { FaTelegram, FaSoundcloud } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi"; // Importa Threads desde react-icons/pi
import Link from "next/link";
import Image from "next/image";
import "./module.css"; // Importando el CSS

const SocialHeader2: React.FC = () => {
  return (
    <header className="relative min-h-[80vh] w-full overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bbh58bcYjMq0GBHBCDh93ViQgbPpVB.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Telegram */}
        <div className="gridItem">
          <FaTelegram className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            TELEGRAM
          </h2>
          <Link
            href="#"
            className="mt-4 rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Unirse a Telegram
          </Link>
        </div>

        {/* Threads (usando PiThreadsLogo) */}
        <div className="gridItem">
          <PiThreadsLogo className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            THREADS
          </h2>
          <Link
            href="#"
            className="mt-4 rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Seguir en Threads
          </Link>
        </div>

        {/* SoundCloud */}
        <div className="gridItem">
          <FaSoundcloud className="h-8 w-8 text-white" />
          <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
            SOUNDCLOUD
          </h2>
          <Link
            href="#"
            className="mt-4 rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Escuchar en SoundCloud
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SocialHeader2;
