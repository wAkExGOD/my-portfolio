import styles from './Navigation.module.scss';

export function Navigation({ items, activeItem, setActiveItem }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {Object.keys(items).map((item, idx) => (
          <li
            className={[styles.item, activeItem === items[item] ? styles.active : null].join(' ')}
            onClick={() => setActiveItem(items[item])}
            key={items[item]}>
            <span className={styles.num}>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
            <span className={styles.line}></span>
            <span className={styles.title}>{items[item]}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
