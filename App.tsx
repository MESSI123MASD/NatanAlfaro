import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/ui/hero';
import { MensajesPrPage } from './components/ui/MensajesPrPage';
import Header from "./components/ui/Header";
import BioProfile from "./components/ui/BioProfile";
import LoQueHacemos from './components/ui/LoQueHacemos';
import EmblaCarousel from './components/ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import PodcastPlayer from './components/ui/podcast-player';
import '../src/components/ui/base.css';
import '../src/components/ui/sandbox.css';
import '../src/components/ui/embla.css';
import Header2 from './components/ui/social';

const navItems = [
  { 
    label: 'BIOGRAFÍA', 
    href: '/BioProfile', 
  },
  { 
    label: 'MINISTERIOS/LO QUE HAGO', 
    href: '/', 
    hasDropdown: true, 
    submenu: [
      { 
        label: 'PASTOR', 
        href: '/CDMG',
        hasDropdown: true,
        submenu: [
          { 
            label: 'CDMG', 
            href: 'https://casademigloria.org/', 
            hasDropdown: true,
            submenu: [
              { 
                label: 'TESTIMONIOS', 
                href: '/EmblaCarrousell' 
              }
            ]
          },
          { 
            label: 'MISIONERO', 
            href: '/misiones' 
          },
          { 
            label: 'EDIFICO Y CONSTRUYO EL SUEÑO DE DIOS', 
            href: 'https://casademigloria.org/cdmgorg_2020_website_proyecto/etapas-del-proyecto/' 
          }
        ]
      },


      {

        label: 'MINISTERIOS', 
        href: '/', 
        hasDropdown: true,
        submenu: [

          { 
            label: 'CENTRO INFANTIL ACAHUALINCA', 
            href: '/CIA' 
          },


          { 
            label: 'EL FARO', 
            href: '/EL-FARO' 
          },  
          { 
            label: 'CONSTRUYO MATRIMONIOS INDESTRUCTIBLES', 
            href: '/redes' 
          },    
        ]
      },

      
     
   
   
      { 
        label: 'FARO DEL ESPÍRITU',
        href: '/faro-del-espiritu',
        hasDropdown: true,
        submenu: [
          { 
            label: 'OFRENDA', 
            href: '/ofrenda' 
          }
        ]
      },
    ]
  },
  {
    label: 'ENCUÉNTRAME EN MIS REDES', 
    href: '#social-section',  
  }
];


const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  { video: 'assets/video1.mp4', link: 'https://facebook.com/tu-pagina' },
  { video: 'assets/video2.mp4', link: 'https://twitter.com/tu-pagina' },
  { video: 'assets/video3.mp4', link: 'https://instagram.com/tu-pagina' }
];

export default function App() {
  return (
    <Router>
      <main>
        <Navbar logo="Casa De Mi Gloria" Items={navItems} />
        <Routes>
          <Route path="/" element={<Hero />} />
  
          <Route path="/lo-que-hacemos" element={<LoQueHacemos />} />
          <Route path="/testimonios" element={<EmblaCarousel slides={SLIDES} options={OPTIONS} />} />
          <Route path="/faro-del-espiritu" element={<PodcastPlayer />} />
          {/* <Route path="/Header" element={<Header />} /> */}
          
        </Routes>

        <BioProfile
          name="Soy Natán Alfaro"
          description="“Pastor y Fundador, junto con mi esposa Cristina, de la iglesia Casa De Mi Gloria en Managua, Nicaragua. Teólogo graduado de Southwestern Assemblies Of God University (SAGU) en el estado de Texas, Estados Unidos, en el año 1994. Presidente y Fundador del Concilio General De Las Asambleas De Dios (CONAD) en Nicaragua. Director de el exitoso programa radial Faro Del Espíritu y director general del Centro De Capacitación El Faro. Mi esposa Cristina y yo, hemos fundado el ministerio matrimonial Defensores Del Pacto y anualmente llevamos a cabo el Congreso Enamorados, así también, somos directores del Centro Infantil Acahualinca, el Centro de Formación Ministerial Managua. Tengo 22 años de casado con mi amada esposa Cristina y Dios nos ha bendecido con tres hijas, Alexa Nicole, Emily Briana, Isabela Sophia y un hijo, Lucas Nathanael.”"
          imagePath='/assets/familia.JPG'
        />
        <Header/>
        <Header2/>
      </main>
    </Router>
  );  
}
