import { ProgressBar } from '../../progress-bar';
import { Button } from '../../button/ui/Button';

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
                <span className={`${styles.hint}`}>{series.episode} серия</span>
                <Button variant="primary" classes={styles.btnContinue}>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.63636 0.172213C0.931177 -0.284815 0 0.22133 0 1.06166V20.1617C0 21.0021 0.931177 21.5082 1.63636 21.0512L15.3571 12.2978C16.5895 11.5115 16.5895 9.71185 15.3571 8.9256L1.63636 0.172213ZM2.13729 6.64177C2.13729 5.06167 3.88337 4.10559 5.21463 4.95674L11.4239 8.92666C12.6541 9.71321 12.6541 11.5102 11.4239 12.2967L5.21463 16.2666C3.88337 17.1178 2.13729 16.1617 2.13729 14.5816V6.64177Z" fill="black"/>
                    </svg>
                    Продолжить
                </Button>
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
            <Button variant="primary" classes={styles.btnContinue}>
                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63636 0.172213C0.931177 -0.284815 0 0.22133 0 1.06166V20.1617C0 21.0021 0.931177 21.5082 1.63636 21.0512L15.3571 12.2978C16.5895 11.5115 16.5895 9.71185 15.3571 8.9256L1.63636 0.172213ZM2.13729 6.64177C2.13729 5.06167 3.88337 4.10559 5.21463 4.95674L11.4239 8.92666C12.6541 9.71321 12.6541 11.5102 11.4239 12.2967L5.21463 16.2666C3.88337 17.1178 2.13729 16.1617 2.13729 14.5816V6.64177Z" fill="black"/>
                </svg>
                Продолжить
            </Button>
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