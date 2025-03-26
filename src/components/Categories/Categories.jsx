import styles from './Categories.module.scss'
function Categories() {
    const food = [
        {
            id: 1,
            name: 'Pizza',
            image: 'pizza.png'
        },
        {
            id: 2,
            name: 'Burgers',
            image: 'burger.png'
        },
        {
            id: 3,
            name: 'Desserts',
            image: 'desert.png'
        },
        {
            id: 4,
            name: 'Sushi',
            image: 'sushi.png'
        },
        {
            id: 5,
            name: 'Asian',
            image: 'asian.png'
        },
        {
            id: 6,
            name: 'Comfort food',
            image: 'comfort.png'
        }
    ];    
    return (<section className={styles.categories}>
        <h3>Categories</h3>
        <a href="pages/categories.html" class="link">View all categories</a>
        <div className={styles.categories__list}>
            {food.map(el => (<div className={styles.category}>
                <img data-src={`assets/images/categories/${el.image}`} alt="pizza" className="lazy" loading='lazy'/>
                <p>{el.name}</p>
            </div>))}
        </div>
    </section>)
}
export default Categories;