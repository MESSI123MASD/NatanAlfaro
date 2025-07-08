export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  submenu?: NavItem[]; // Permite submenús anidados
  dropdownTitle?: string; // Título opcional para el submenú
  
};


export interface NavbarProps {
  logo:string;
  Items: NavItem[];
}

