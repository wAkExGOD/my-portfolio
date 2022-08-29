import styles from './LoadingSpinner.module.scss';

export function LoadingSpinner() {
  // return <span className={styles['loading-spinner']}></span>;
  return (
    <div className={styles['loading-spinner']}>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      {/* <div class={styles.wave}></div> */}
      {/* <div class={styles.wave}></div> */}
      {/* <div class={styles.wave}></div> */}
    </div>
  );
}