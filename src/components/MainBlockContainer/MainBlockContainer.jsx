import styles from './MainBlockContainer.module.scss';

export function MainBlockContainer({ children, active }) {
  return (
    <div className={[styles['main-block-container'], active ? styles.active : null].join(' ')}>
      {children}
    </div>
  )
}