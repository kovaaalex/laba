import styles from './Award.module.scss';
function Award(){
    const restaurans = [
        [
            {
                id: 1,
                name: 'Lukewarm Late',
                image: 'lukewarm.jfif'
            },
            {
                id: 2,
                name: 'The Smoking Veg',
                image: 'smokingWeg.png'
            },
            {
                id: 3,
                name: 'The Artissan',
                image: 'artissan.jfif'
            }
        ],
        [
            {
                id: 4,
                name: 'O’Neill’s',
                image: 'oneil.jfif'
            },
            {
                id: 5,
                name: 'Shining Artichoke',
                image: 'shining.png'
            } 
        ],
        [
            {
                id: 6,
                name: 'The Woodland',
                image: 'woodland.jfif'
            },
            {
                id: 7,
                name: 'La Poma',
                image: 'poma.png'
            },
            {
                id: 8,
                name: 'Casual Food',
                image: 'cafeteria.jfif'
            }
        ]
    ]
    return(
        <section id={styles.award}>
            <div className={styles.headh}>
                <h2><span>Award winning <br/></span>The best restaurants near you!</h2>
                <a href="#" className={`styles.link green__link`}>See all restaurants</a>
            </div>
            <div className={styles.restaurans}>
                {restaurans.map(restauranRow => (<div className={styles.restauranRow}>
                    {restauranRow.map(restauran => (<div className={styles.restauran}>
                        <img data-src={`assets/images/restaurans/${restauran.image}`} alt={restauran.name} className="lazy" loading='lazy'/>
                        <p>{restauran.name}</p>
                    </div>))}
                </div>))}
            </div>
        </section>
    )
}
export default Award;