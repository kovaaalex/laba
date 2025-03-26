import { Link } from "react-router";
import styles from './NavMenu.module.scss'
function NavMenu({ isOpen }){
    return (
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                    <Link to="/menu">Меню</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavMenu;