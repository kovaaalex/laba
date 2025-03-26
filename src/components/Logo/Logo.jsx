import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <img data-src="/assets/images/logo.svg" alt="logo" className="lazy" loading='lazy'/>
      <span>MealDrop</span>
    </div>
  );
}

export default Logo;