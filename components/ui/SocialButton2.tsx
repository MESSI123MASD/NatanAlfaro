import type { FC } from "react";
import { FaTelegramPlane, FaSoundcloud, FaFacebook, FaComment } from "react-icons/fa"; // Cambié FaThreads por FaComment
import { Mail } from "lucide-react";
import type { SocialButtonPropsAlt } from "../../types/social";
import styles from "./SocialButton.module.css";

const SocialButton2: FC<SocialButtonPropsAlt> = ({ icon, label, hasFollowButton = false, href }) => {
  const getIcon = () => {
    switch (icon) {
      case "telegram":
        return <FaTelegramPlane className={styles.icon} />;
      case "threads":
        return <FaComment className={styles.icon} />; // Usamos FaComment como opción para Threads
      case "soundcloud":
        return <FaSoundcloud className={styles.icon} />;
      case "contacto":
        return <Mail className={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <a href={href} className={styles.SocialButton}>
      {getIcon()}
      <h2 className={styles.label}>{label}</h2>
      {hasFollowButton && <button className={styles.followButton}>SÍGUEME</button>}
    </a>
  );
};

export default SocialButton2;
