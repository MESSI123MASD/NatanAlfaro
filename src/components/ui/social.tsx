import type { FC } from "react";
import SocialButton from "./SocialButton2";
import PR from '@/assets/PR.png';

const Header2: FC = () => {
  const socialLinks = [
    {
      icon: "telegram" as const,
      label: "TELEGRAM",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "threads" as const,
      label: "THREADS",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "soundcloud" as const,
      label: "SOUNDCLOUD",
      href: "#",
      hasFollowButton: true,
    },
    {
      icon: "contacto" as const,
      label: "CONTACTO",
      href: "#",
      hasFollowButton: true,
    },
  ];

  return (
    <header style={styles.cabeza}>
      <div style={styles.backgroundImage} />
      <div style={styles.grid}>
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

const styles: { [key: string]: React.CSSProperties } = {
  cabeza: {
    position: "relative",
    minHeight: "80vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white", // Fondo blanco
    color: "#333", // Texto oscuro para mejor contraste
    backgroundImage: `url(${PR})`,
    marginTop: "50px", // Ajusta este valor según el margen que desees
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    width: "100%",
    backgroundRepeat: "no-repeat",
   
  

  },
  grid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    height: "100%",
    minHeight: "80vh",
    padding: "10px",
    alignItems: "center",
    justifyItems: "center",
  },
  gridItem: {
    backgroundColor: "#3498db",
    padding: "20px",
    textAlign: "center",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    height: "300px",
  },
  gridItemHover: {
    backgroundColor: "#45a049",
    transform: "scale(1.05)",
  },
  gridItemActive: {
    backgroundColor: "#3e8e41",
    transform: "scale(0.98)",
  },
  gridItemH2: {
    color: "#333",
    marginTop: "16px",
  },
  gridItemLink: {
    marginTop: "16px",
    color: "#333",
    border: "1px solid #333",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  gridItemLinkHover: {
    backgroundColor: "#333",
    color: "white",
  },
};

export default Header2;
