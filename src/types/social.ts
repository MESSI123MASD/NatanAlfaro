export interface SocialButtonProps {
    icon: "instagram" | "facebook" | "youtube" | "whatsapp"
    label: string
    hasFollowButton?: boolean
    href: string
  }
  
  
  export interface SocialButtonPropsAlt {
    icon: "telegram" | "threads" | "soundcloud" | "contacto"; // Corregido "conctacto"
    label: string;
    hasFollowButton?: boolean;
    href: string;
  }
  