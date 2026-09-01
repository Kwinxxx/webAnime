import styles from './skeletonCard.module.scss'

export const SkeletonCard = () => {
    return (
        <div className={styles.wrapperSkeleton}>
            <div className={styles.imgWrapperSkeleton}>
                <div className={`${styles.imgSkeleton} ${styles.shimmer}`}></div>
            </div>
            <p className={`${styles.lineSkeleton} ${styles.shimmer}`} style={{width: '80%'}}></p>
            <p className={`${styles.lineSkeleton} ${styles.shimmer}`} style={{width: '50%', marginTop: '8px'}}></p>
        </div>
    )
}