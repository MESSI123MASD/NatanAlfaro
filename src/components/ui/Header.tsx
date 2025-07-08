import { FC, useRef } from "react";
import SocialButton from "./SocialButton";
import styles from "./Header.module.css";

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const socialLinks = [
    {
      icon: "instagram" as const,
      label: "INSTAGRAM",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "facebook" as const,
      label: "FACEBOOK",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "youtube" as const,
      label: "YOUTUBE",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "whatsapp" as const,
      label: "WHATSAPP",
      href: "#",
      hasFollowButton: true,
    },
  ];

  return (
    <header className={styles.header} ref={headerRef} id="social-section">
      <div className={styles.backgroundImage} />
      <div className={styles.grid}>
        {socialLinks.map((link) => (
          <SocialButton
            key={link.icon}
            icon={link.icon}
            label={link.label}
            href={link.href}
            hasFollowButton={link.hasFollowButton}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
