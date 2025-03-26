import styles from './MenuCategories.module.scss';
function MenuCategories() {
    const items = [
        {
            id: 1,
            name: 'Pizza',
            image: 'pizza.png'
        },
        {
            id: 2,
            name: 'Burgers',
            image: 'burgers.png'
        },
        {
            id: 3,
            name: 'Desserts',
            image: 'desserts.png'
        },
        {
            id: 4,
            name: 'Sushi',
            image: 'sushi.png'
        },
        {
            id: 5,
            name: 'Asian',
            image: 'Asian.png'
        },
        {
            id: 6,
            name: 'Comfort',
            image: 'comfort.png'
        }
    ]
    return (
        <section className={styles.about__section}>
            <h3>What’s on the menu?</h3>
            <p>Whatever you’re craving - we’ll deliver it to your door. Feel like having pizza, sushi or your favourite dish from Tatooine? Explore your possibilities below. </p>
            <div className={styles.about__list}>
                {
                    items.map(item => (
                        <div className={styles.about__item}>
                            <img data-src={`assets/images/categoriesPages/${item.image}`} alt={item.name} className="lazy" loading="lazy"/>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default MenuCategories;