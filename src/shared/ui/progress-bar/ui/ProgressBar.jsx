import styles from '../ui/ProgressBar.module.scss';

export const ProgressBar = (props) => {
    const { 
        currentTime = 2000,
        duration = 4000,
        className=''
    } = props

    const percentage = duration > 0 ? ( currentTime / duration ) * 100 : 0;

    const validPercentage = Math.max(0, Math.min(percentage, 100))
    const isCompleted = validPercentage >= 99;

    return (
        <div className={` ${styles.track} ${className} `}>
            <div 
            className={`${styles.fill} ${isCompleted && styles.completed}`}
            style = {{width: `${validPercentage}%` }}
            />
        </div>
    )
}