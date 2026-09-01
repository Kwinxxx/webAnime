import { ProgressBar } from '../../progress-bar';

import styles from './Card.module.scss'

export const Card = (props) => {
    const {
        name,
        series='False'
    } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img 
                src="https://picsum.photos/200/300" 
                alt="фото" 
                className={styles.cardImg}/>
                {series == 'False' ? '' : <ProgressBar className={styles.progressWatch} />}
            </div>
            <p className={styles.cardName}>{name}</p>
            {series == 'False' ? '' : <span className={styles.hint}>{`${series} серия`}</span>}
        </div>
    )
}