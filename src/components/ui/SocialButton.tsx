import type { FC } from "react"
import { Instagram, Facebook, Youtube, Mail, X, Twitter } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import type { SocialButtonProps } from "../../types/social"
import styles from "./SocialButton.module.css"

const SocialButton: FC<SocialButtonProps> = ({ icon, label, hasFollowButton = false, href }) => {
  const getIcon = () => {
    switch (icon) {
      case "instagram":
        return <Instagram className={styles.icon} />
      case "facebook":
        return <Facebook className={styles.icon} />
      case "youtube":
        return <Youtube className={styles.icon} />
      case "whatsapp":
        return <FaWhatsapp className={styles.icon} />
      default:
        return null;
    }
  };

  return (
    <a href={href} className={`${styles.socialButton} ${styles[icon]}`}>
      {getIcon()}
      <h2 className={styles.label}>{label}</h2>
      {hasFollowButton && <button className={styles.followButton}>SÍGUEME</button>}
    </a>
  );
};


export default SocialButton

