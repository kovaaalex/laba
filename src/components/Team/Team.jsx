import styles from './Team.module.scss';
function Team() {
    const members = [
        {
            id: 1,
            name: 'Alex, SEO',
            image: 'alex.jpg'
        },
        {
            id: 2,
            name: 'Alex JR, Manager',
            image: 'alexjr.jpg'
        },
        {
            id: 3,
            name: 'Ignat, sponsor',
            image: 'ignat.jpg'
        },
        {
            id: 4,
            name: 'Natalia, officiant',
            image: 'natalia.jpg'
        },
        {
            id: 5,
            name: 'Vlad, officiant',
            image: 'vlad.jpg'
        },
        {
            id: 6,
            name: 'Andrew, officiant',
            image: 'andrew.jpg'
        }
    ]
    return (
        <section className={styles.about__section}>
            <h3>Наш состав</h3>
            <p>Каким бы ни было ваше кофейное желание, наша увлечённая команда готова приготовить его специально для вас. Будь то классический эспрессо или уникальный сезонный купаж — познакомьтесь с талантливыми бариста, которые воплощают это в жизнь</p>
            <div className={styles.about__list}>
                {
                    members.map(member => (
                        <div className={styles.about__item}>
                            <img data-src={`assets/images/team/${member.image}`} alt={member.name} className="lazy" loading="lazy"/>
                            <span>{member.name}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Team;