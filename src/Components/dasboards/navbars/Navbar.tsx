import React, { useState } from "react";
import Logo from "../../../../src/assets/Logo.png";
import Profile from "../../../../src/assets/profie.png";
import styles from './Navbar.module.css';


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.navbarContainer}>
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={Logo} alt="Company Logo" className={styles.logoImage} />
        <span className={styles.title}>Protify Monitoring Dashboard | Admin</span>
      </div>
      <button className={styles.burger} onClick={toggleMenu}>
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
      </button>
      <div className={`${styles.profileSection} ${menuOpen ? styles.showMenu : ''}`}>
        <img src={Profile} alt="Profile" className={styles.avatar} />
        <div>
          <p className={styles.name}>Davis Uche</p>
          <p className={styles.role}>Administrator</p>
        </div>
      </div>
    </nav>
    </div>
  );  
};

export default Navbar;
