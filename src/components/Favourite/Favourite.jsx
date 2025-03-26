import styles from './Favourite.module.scss'
function Favourite(){
    return(
        <section id={styles.banner}>
            <h2><span>Hungry?</span>Find your next meal</h2>
            <div className={styles.imageWrapper}>
                <a href="#award" className={styles.link}>See all restaurants</a>
                <img data-src="/assets/images/banner.svg" alt="banner" className={`${styles.banner__image} lazy`} loading="lazy"/>
            </div>
        </section>
    )
}
export default Favourite;