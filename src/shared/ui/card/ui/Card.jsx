import { ProgressBar } from '../../progress-bar';

import styles from './Card.module.scss'

export const Card = (props) => {
    const {
        name,
        series,
        genre='Спорт Драма',
        rating
    } = props


    if ( series ) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.btnCountinue}>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.63636 0.172213C0.931177 -0.284815 0 0.22133 0 1.06166V20.1617C0 21.0021 0.931177 21.5082 1.63636 21.0512L15.3571 12.2978C16.5895 11.5115 16.5895 9.71185 15.3571 8.9256L1.63636 0.172213ZM2.13729 6.64177C2.13729 5.06167 3.88337 4.10559 5.21463 4.95674L11.4239 8.92666C12.6541 9.71321 12.6541 11.5102 11.4239 12.2967L5.21463 16.2666C3.88337 17.1178 2.13729 16.1617 2.13729 14.5816V6.64177Z" fill="black"/>
                    </svg>
                    Продолжить
                </div>
                <span className={`${styles.hint}`}>{series.episode} серия</span>
                <img 
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/10853012/42438e54-010a-4c84-82a8-4a74b0d0d887/300x450" 
                alt="фото" 
                className={styles.cardImg}/>
                <div className={styles.overlay}>
                    <ProgressBar className={styles.progressWatch} />
                    <div className={styles.titleInfo}>
                        <p className={styles.cardName}>{name}</p>
                        <span className={styles.cardGenre}>{`${series.season} сезон - ${series.minutesWatched} минут из ${series.minutesAll} минут`}</span>
                    </div>
                    <span></span>
                </div>
            </div>
        )
    } else {
        return (
        <div className={styles.wrapper}>
            <span className={`${styles.hint} ${styles.hintRating}`}>{rating}
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.2343 0.349148C8.02762 -0.116394 7.36692 -0.116394 7.16023 0.349148L5.47032 4.09616C5.32416 4.42024 5.01693 4.64235 4.66337 4.67954L0.530599 5.11433C0.0229676 5.17015 -0.18617 5.80335 0.197266 6.14067L3.265 8.88762C3.53231 9.12698 3.65089 9.49121 3.57573 9.84206L2.71578 13.8566C2.60826 14.3532 3.13832 14.7435 3.5806 14.4933L3.60467 14.4797L7.19996 12.4189C7.50799 12.2423 7.88654 12.2423 8.19457 12.4189L11.7899 14.4797L11.8139 14.4933C12.2562 14.7435 12.7863 14.3532 12.6787 13.8566L11.8188 9.84206C11.7436 9.49121 11.8622 9.12698 12.1295 8.88762L15.1973 6.14067C15.5807 5.80335 15.3716 5.17015 14.8639 5.11433L10.7312 4.67954C10.3776 4.64235 10.0704 4.42024 9.92421 4.09616L8.2343 0.349148ZM6.78461 4.05476C7.13768 3.26642 8.25685 3.26642 8.60992 4.05476L9.21578 5.40757L9.21993 5.41629C9.30944 5.60454 9.49006 5.73301 9.69727 5.75579L11.164 5.90745C12.0286 5.99685 12.3753 7.07073 11.7262 7.64888L10.6417 8.6149L10.6314 8.62437C10.4774 8.76592 10.4107 8.97895 10.4565 9.18305L10.7652 10.616C10.9469 11.4596 10.0465 12.1219 9.29537 11.6971L7.99356 10.9608C7.81199 10.8485 7.58254 10.8485 7.40097 10.9608L6.09916 11.6971C5.34801 12.1219 4.44759 11.4596 4.62932 10.616L4.93801 9.18305C4.98383 8.97895 4.91715 8.76592 4.76313 8.62437L4.75282 8.6149L3.66828 7.64888C3.01921 7.07073 3.36594 5.99685 4.23056 5.90745L5.69727 5.75579C5.90447 5.73301 6.08509 5.60454 6.1746 5.41629L6.17875 5.40757L6.78461 4.05476Z" fill="#57E9DD" fill-opacity="0.85"/>
                </svg>
            </span>
            <img 
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10853012/42438e54-010a-4c84-82a8-4a74b0d0d887/300x450" 
            alt="фото" 
            className={styles.cardImg}/>
            <div className={styles.overlay}>
                <div className={styles.titleInfo}>
                    <p className={styles.cardName}>{name}</p>
                    <span className={styles.cardGenre}>{genre}</span>
                </div>
            </div>
        </div>
        )
    }
}