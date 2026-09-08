import { Link } from 'react-router';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="46" height="46" rx="11" fill="#53FFF1" fill-opacity="0.37"/>
                </svg>
                <span className={styles.logoName}>
                    yuki.tv
                </span>
            </div>
            <nav className={styles.navigation}>
                <Link to='/' className={styles.navElement}>Главная</Link>
                <Link to='/catalog' className={styles.navElement}>Каталог</Link>
                <Link to='/catalog' className={styles.navElement}>Каталог</Link>
                <Link to='/catalog' className={styles.navElement}>Каталог</Link>
            </nav>
            <div className={styles.searchWrapper}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83232 0C9.04693 0 11.6646 2.61771 11.6646 5.83232C11.6646 6.58291 11.5232 7.29993 11.2646 7.95864C10.8891 8.91527 10.9058 10.0674 11.6325 10.7941L14.5808 13.7424C14.8123 13.9739 14.8123 14.3493 14.5808 14.5808C14.3493 14.8123 13.9739 14.8123 13.7424 14.5808L10.7941 11.6325C10.0674 10.9058 8.91527 10.8891 7.95864 11.2646C7.29993 11.5232 6.58291 11.6646 5.83232 11.6646C2.61771 11.6646 -9.53674e-07 9.04693 -9.53674e-07 5.83232C-9.53674e-07 2.61771 2.61771 0 5.83232 0ZM5.83232 1.16646C3.24878 1.16646 1.16646 3.24879 1.16646 5.83232C1.16646 8.41586 3.24878 10.4982 5.83232 10.4982C8.41586 10.4982 10.4982 8.41586 10.4982 5.83232C10.4982 3.24879 8.41586 1.16646 5.83232 1.16646Z" fill="white" fill-opacity="0.34"/>
                </svg>
                <input placeholder='Найти аниме' type="text" name="" id="search" />
            </div>
        </header>
    )
}

