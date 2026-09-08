import styles from './skeletonCard.module.scss'

export const SkeletonCard = () => {
    return (
        <div className={`${styles.wrapperSkeleton}`}>
            <div className={styles.infoSkeletonWrapper}>
                <p className={`${styles.lineSkeleton} ${styles.shimmer}`} style={{width: '80%'}} />
                <p className={`${styles.lineSkeleton} ${styles.shimmer}`} style={{width: '50%', marginTop: '8px'}} />
            </div>
        </div>
    )
}