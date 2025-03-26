import styles from './Contact.module.scss';
function Contact() {
    return(
        <section className={styles.contacts}>
            <h3>Контакты</h3>
            <a className={styles.marks__link} href="./marks">Отзывы</a>
            <div className={styles.picks}>
                <div className={styles.pick}>
                    <img data-src="/laba/assets/images/restaurans/artissan.jfif" alt="cafe" className="lazy" loading="lazy"/>
                    <div className={styles.description}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22061.58822588857!2d27.5607632!3d53.904353!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x46dbcfebcb12c407%3A0xb33cf306cb98d459!2z0JfQvtC70LDQudC-0L3QvtC10YDQvtC-0L3QvtC10L3QuNin0L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10!5e0!3m2!1sru!2sru!4v1622530629000!5m2!1sru!2sru&output=embed&z=16">
                        </iframe>
                        <h4>Пикми кафе</h4>
                        <p class="description__marks">★ 4.2  Очень хорошо</p>
                        <p className={styles.pick__description}>+375-29-831-13-07</p>
                        <p className={styles.pick__description}>Донат 9112888891121444</p>
                        <div className={styles.comfort__food}>
                            <a target="_blank" href="https://www.google.com/maps/place/Pinky+Bandinsky/@53.9024767,27.5483706,16z/data=!4m6!3m5!1s0x46dbcfebcb12c407:0xb33cf306cb98d459!8m2!3d53.9024763!4d27.5529467!16s/g/11b8b3mf48?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw==" class="link">Адрес</a>
                        </div>
                    </div>
                </div>
                <div className={styles.pick}>
                    <img data-src="/laba/assets/images/restaurans/artissan.jfif" alt="cafe" className="lazy" loading="lazy"/>
                    <div className={styles.description}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22061.58822588857!2d27.5607632!3d53.904353!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x46dbcfebcb12c407%3A0xb33cf306cb98d459!2z0JfQvtC70LDQudC-0L3QvtC10YDQvtC-0L3QvtC10L3QuNin0L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10!5e0!3m2!1sru!2sru!4v1622530629000!5m2!1sru!2sru&output=embed&z=16">
                        </iframe>
                        <h4>Пикми кафе</h4>
                        <p className={styles.description__marks}>★ 4.2  Очень хорошо</p>
                        <p className={styles.pick__description}>+375-29-831-13-07</p>
                        <p className={styles.pick__description}>Донат 9112888891121444</p>
                        <div className={styles.comfort__food}>
                            <a target="_blank" href="https://www.google.com/maps/place/Pinky+Bandinsky/@53.9024767,27.5483706,16z/data=!4m6!3m5!1s0x46dbcfebcb12c407:0xb33cf306cb98d459!8m2!3d53.9024763!4d27.5529467!16s/g/11b8b3mf48?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw==" className={styles.link}>Адрес</a>
                        </div>
                    </div>
                </div>
                <div className={styles.pick}>
                    <img data-src="/laba/assets/images/restaurans/artissan.jfif" alt="cafe" className="lazy" loading="lazy"/>
                    <div className={styles.description}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22061.58822588857!2d27.5607632!3d53.904353!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x46dbcfebcb12c407%3A0xb33cf306cb98d459!2z0JfQvtC70LDQudC-0L3QvtC10YDQvtC-0L3QvtC10L3QuNin0L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10YDQvtC-0L3QvtC10L3Qu9C-0YDQvtC10!5e0!3m2!1sru!2sru!4v1622530629000!5m2!1sru!2sru&output=embed&z=16">
                        </iframe>
                        <h4>Пикми кафе</h4>
                        <p className={styles.description__marks}>★ 4.2  Очень хорошо</p>
                        <p className={styles.pick__description}>+375-29-831-13-07</p>
                        <p className={styles.pick__description}>Донат 9112888891121444</p>
                        <div className={styles.comfort__food}>
                            <a target="_blank" href="https://www.google.com/maps/place/Pinky+Bandinsky/@53.9024767,27.5483706,16z/data=!4m6!3m5!1s0x46dbcfebcb12c407:0xb33cf306cb98d459!8m2!3d53.9024763!4d27.5529467!16s%2Fg%2F11b8b3mf48?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D" className={styles.link}>Адрес</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;