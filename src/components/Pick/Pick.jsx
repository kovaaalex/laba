import styles from './Pick.module.scss';
function Pick({cafe}){
    return(
        <div className={styles.pick}>
            <img data-src="/laba/assets/images/cafe.png" alt="cafe" className="lazy"></img>
            <div className={styles.description}>
                <h4>{cafe.name}</h4>
                <p className={styles.description__marks}>★ {cafe.mark}</p>
                <p className={styles.pick__description}>Nicest place for burgers</p>
                <div className={styles.comfort__food}>
                    <a href="#" className={styles.link}>Comfort food</a>
                </div>
            </div>
        </div>
    )
}
export default Pick;