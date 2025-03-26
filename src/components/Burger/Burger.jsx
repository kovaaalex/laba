import styles from './Burger.module.scss';
function Burger({onClick, isOpen}) {
    return(
        <div className={styles.burger} onClick={onClick}>
            <div className={styles.burger__line}></div>
            <div className={styles.burger__line}></div>
            <div className={styles.burger__line}></div>
        </div>
    )
}
export default Burger;