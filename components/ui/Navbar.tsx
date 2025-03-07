import { useState, useEffect, useRef } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css"; 
import { Button } from "./button";
import type { NavbarProps } from "../../types/nav";
import styles from "./Navbar.module.css";

export function Navbar({ logo, Items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToHeader = () => {
    const socialSection = document.getElementById("social-section");
    if (socialSection) {
      socialSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToBiography = () => {
    const biographySection = document.getElementById("bioProfile");
    if (biographySection) {
      biographySection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.navbar} ${isMenuOpen ? "mobile-nav-active" : ""} ${scrollingDown ? styles.hidden : ""}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoImage}></div>
        </a>

        {/* Menú de escritorio */}
        <nav className={styles.nav}>
          {Items.map((item) =>
            item.label === "ENCUÉNTRAME EN MIS REDES" ? (
              <button key={item.label} onClick={scrollToHeader} className={styles.navItem}>
                {item.label}
              </button>
            ) : item.label === "BIOGRAFÍA" ? (
              <button key={item.label} onClick={scrollToBiography} className={styles.navItem}>
                {item.label}
              </button>
            ) : item.hasDropdown ? (
              <Menu key={item.label} menuButton={<MenuButton className={styles.navItem}>{item.label}</MenuButton>}>
                {item.submenu?.map((subItem) =>
                  subItem.submenu ? (
                    <SubMenu key={subItem.label} label={subItem.label}>
                      {subItem.submenu.map((nestedItem) =>
                        nestedItem.submenu ? (
                          <SubMenu key={nestedItem.label} label={nestedItem.label}>
                            {nestedItem.submenu.map((thirdLevelItem) => (
                              <MenuItem key={thirdLevelItem.label}>
                                <Link to={thirdLevelItem.href}>{thirdLevelItem.label}</Link>
                              </MenuItem>
                            ))}
                          </SubMenu>
                        ) : (
                          <MenuItem key={nestedItem.label}>
                            <Link to={nestedItem.href}>{nestedItem.label}</Link>
                          </MenuItem>
                        )
                      )}
                    </SubMenu>
                  ) : (
                    <MenuItem key={subItem.label}>
                      <Link to={subItem.href}>{subItem.label}</Link>
                    </MenuItem>
                  )
                )}
              </Menu>
            ) : (
              <Link key={item.label} to={item.href} className={styles.navItem}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <X size={24} />
          </button>

          {Items.map((item) =>
            item.label === "ENCUÉNTRAME EN MIS REDES" ? (
              <button key={item.label} onClick={scrollToHeader} className={styles.navItem}>
                {item.label}
              </button>
            ) : item.label === "BIOGRAFÍA" ? (
              <button key={item.label} onClick={scrollToBiography} className={styles.navItem}>
                {item.label}
              </button>
            ) : item.hasDropdown ? (
              <Menu key={item.label} menuButton={<MenuButton className={styles.navItem}>{item.label}</MenuButton>}>
                {item.submenu?.map((subItem) =>
                  subItem.submenu ? (
                    <SubMenu key={subItem.label} label={subItem.label}>
                      {subItem.submenu.map((nestedItem) =>
                        nestedItem.submenu ? (
                          <SubMenu key={nestedItem.label} label={nestedItem.label}>
                            {nestedItem.submenu.map((thirdLevelItem) => (
                              <MenuItem key={thirdLevelItem.label}>
                                <Link to={thirdLevelItem.href}>{thirdLevelItem.label}</Link>
                              </MenuItem>
                            ))}
                          </SubMenu>
                        ) : (
                          <MenuItem key={nestedItem.label}>
                            <Link to={nestedItem.href}>{nestedItem.label}</Link>
                          </MenuItem>
                        )
                      )}
                    </SubMenu>
                  ) : (
                    <MenuItem key={subItem.label}>
                      <Link to={subItem.href}>{subItem.label}</Link>
                    </MenuItem>
                  )
                )}
              </Menu>
            ) : (
              <Link key={item.label} to={item.href} className={styles.navItem}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
