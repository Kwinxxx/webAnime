import { ProgressBar } from '../../progress-bar';

import styles from './Card.module.scss'

export const Card = (props) => {
    const {
        name,
        series={
            season: '1',
            minutesWatched: 10,
            minutesAll: 20
        },
        genre='Спорт Драма'
    } = props

    return (
        <div className={styles.wrapper}>
            <img 
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/10853012/42438e54-010a-4c84-82a8-4a74b0d0d887/300x450" 
            alt="фото" 
            className={styles.cardImg}/>
            <div className={styles.overlay}>
                {series == '' ? '' : <ProgressBar className={styles.progressWatch} />}
                <div className={styles.titleInfo}>
                    <p className={styles.cardName}>{name}</p>
                    {series == '' ?
                    <span className={styles.cardGenre}>{genre}</span>
                     : <span className={styles.cardGenre}>{`${series.season} сезон - ${series.minutesWatched} минут из ${series.minutesAll} минут`}</span>}
                </div>
                <span></span>
            </div>
        </div>
    )
}