import NavMenu from "../NavMenu/NavMenu";
import Logo from "../Logo/Logo";
import styles from './Header.module.scss';
import { AppBar } from "@mui/material";
import Burger from "../Burger/Burger";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme"; // Импортируем наш хук

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <AppBar id={styles.header}>
            <div 
                className={styles.lightbulbContainer} 
                onClick={toggleTheme} // Вешаем переключение темы на клик
                role="button" 
                tabIndex={0}
                aria-label="Toggle theme"
            >
                <div className={styles.lightbulb}>
                    <div className={styles.string}></div>
                    <div className={styles.bulb}></div>
                </div>
            </div>
            <Burger onClick={toggleMenu} isOpen={isMenuOpen}/>
            <Logo/>
            <NavMenu isOpen={isMenuOpen}/>
        </AppBar>
    )
}

export default Header;