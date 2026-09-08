import styles from './background.module.scss';

export const Background = () => {
    return (
        <div className={styles.bgContainer}>
            <div className={`${styles.glowCircle} ${styles.circle1}`}/>
            <div className={`${styles.glowCircle} ${styles.circle2}`}/>
            <div className={`${styles.glowCircle} ${styles.circle3}`}/>

            <div className={styles.glassOverlay}></div>
        </div>
    )
}