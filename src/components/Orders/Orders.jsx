import { useState, useEffect } from 'react';
import styles from './Orders.module.scss';

function Orders() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurant: null
  });
  
  const [errors, setErrors] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const mockRestaurants = [
      { id: 1, name: "Ресторан Итальянской кухни", address: 'Зыбицкая, 5' },
      { id: 2, name: "Суши Бар Сакура", address: 'Зыбицкая, 8' },
      { id: 3, name: "Бургерная №1", address: 'Интернациональная, 5' }
    ];
    setRestaurants(mockRestaurants);
    setFilteredRestaurants(mockRestaurants);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [searchTerm, restaurants]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email обязателен';
    if (!formData.phone) newErrors.phone = 'Телефон обязателен';
    if (!formData.restaurant) newErrors.restaurant = 'Выберите ресторан';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Форма отправлена:', formData);
      alert('Заказ оформлен!');
    }
  };

  return (
    <section className={styles.form__section}>
      <h3>Заказ</h3>
      <h5>Выбраны: 1х Бургер, 2х Десерт</h5>
      <form onSubmit={handleSubmit}>
          <div className={styles.equal__name}>
            <label>Имя:</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="Иван"
              required
              maxLength='20'
            />
          </div>
          <div className={styles.equal__name}>
            <label>Фамилия:</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Иванов"
              required
              maxLength='25'
            />
          </div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your@email.com"
          className={errors.email ? styles.errorInput : ''}
          required
          maxLength='40'
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <label>Телефон:</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+375 29 123 45 67"
          className={errors.phone ? styles.errorInput : ''}
          required
          maxLength='25'
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        <label>Выберите ресторан: (нажмите или введите) </label>
        <div className={styles.search__container}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
            placeholder="Начните вводить название..."
            className={errors.restaurant ? styles.errorInput : ''}
            maxLength='55'
          />
          {isDropdownOpen && (
            <ul className={styles.dropdown}>
              {filteredRestaurants.map(restaurant => (
                <li
                  key={restaurant.id}
                  onClick={() => {
                    setFormData({...formData, restaurant});
                    setSearchTerm(restaurant.name);
                    setIsDropdownOpen(false);
                  }}
                >
                  {restaurant.name} ({restaurant.address})
                </li>
              ))}
            </ul>
          )}
        </div>
        {errors.restaurant && <p className={styles.error}>{errors.restaurant}</p>}
        {formData.restaurant && (
          <p>Выбран: <strong>{formData.restaurant.name}</strong></p>
        )}
        <button type="submit" className={styles.submitButton}>
          Завершить заказ
        </button>
      </form>
    </section>
  );
}

export default Orders;