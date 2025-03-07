import { useNavigate } from 'react-router-dom';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Hero.module.css'; // Asegúrate de que esté importado correctamente

export function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/mensajes'); // Navega a la página de mensajes
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <div className={styles.background} />
        <div className={styles.backgroundMobile} />
      </div>
      <div className={styles.content}>
        <div className={styles.logo}></div>

        <h1 className={styles.quote}>
          HOY ES EL PRIMER DÍA, <br> 
          </br> DEL RESTO DE TU VIDA BENDECIDA.
        </h1>
        <div className={styles.tag}>
          #MINISTERIOSNATÁNALFARO #PASTORNATÁNALFARO #VIDABENDECIDA
        </div>
        <div className={styles.author}>PASTOR NATÁN ALFARO</div>

        <div className={styles.socialIcons}>
          <a href="https://www.youtube.com/@PastorNatanAlfaro/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={styles.icon} size={40} />
          </a>
          <a href="https://www.facebook.com/PastorNatanAlfaro" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} size={33} />
          </a>
          <a href="https://www.instagram.com/natanalfaro/?hl=es" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} size={34} />
          </a>
        </div>
      </div>
    </section>
  );
}
