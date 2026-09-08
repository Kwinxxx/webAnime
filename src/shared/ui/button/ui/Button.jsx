import styles from './Button.module.scss';


export const Button = (props) => {
    const {
        children,
        variant='primary',
        type='button',
        classes=''
    } = props

    const variantClasses = {
        primary: styles.primary,
        secondary: styles.secondary,
        disabled: styles.disabled
    }

    return (
        <button 
        className={` ${styles.btn} ${variantClasses[variant]} ${classes}`}
        type={type}
        >
            {children}
         </button>
    )
}