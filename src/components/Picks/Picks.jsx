import { useState, useEffect } from 'react';
import Pick from "../Pick/Pick";
import styles from './Picks.module.scss';

function Picks() {
    const cafes = [
        {
            id: 1,
            name: 'Мира',
            mark: '4.2 Very Good',
            description: 'Хорошее место для бургеров'
        },
        {
            id: 2,
            name: 'Мира',
            mark: '4.2 Very Good',
            description: 'Хорошее место для бургеров'
        },
        {
            id: 3,
            name: 'Мира',
            mark: '4.2 Very Good',
            description: 'Хорошее место для бургеров'
        },
        {
            id: 4,
            name: 'Пикми',
            mark: '4.7 Very Good',
            description: 'Хорошее место для бургеров'
        },
        {
            id: 5,
            name: 'Пикми',
            mark: '4.7 Very Good',
            description: 'Хорошее место для бургеров'
        },
        {
            id: 6,
            name: 'Пикми',
            mark: '4.7 Very Good',
            description: 'Хорошее место для бургеров'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => 
                (prevIndex + 3) % (cafes.length - visibleItems + 3)
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [cafes.length]);

    const visibleCafes = cafes.slice(currentIndex, currentIndex + visibleItems);
    return (
        <section className={styles.cafes}>
            <h3>Our favourite picks</h3>
            <div className={styles.picks}>
                {visibleCafes.map(cafe => (
                    <Pick key={cafe.id} cafe={cafe} />
                ))}
            </div>
        </section>
    );
}

export default Picks;