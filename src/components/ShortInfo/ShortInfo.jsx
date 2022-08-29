import styles from './ShortInfo.module.scss';

const info = {
  name: 'Vladislav',
  surname: 'Panasik',
  position: 'Frontend Developer',
  biography: 'I am 16 and I live in Belarus. I have been studying web development since 2020, also have experience in creating projects from zero to deployment',
};

export function ShortInfo() {
  return (
    <div className={styles['short-info']}>
      <h1 className={styles.name}>
        <span>{info.name}</span>
        <br />
        <span>{info.surname}</span>
      </h1>
      <h2 className={styles.position}>{info.position}</h2>
      <p className={styles.biography}>
        {info.biography}
      </p>
    </div>
  );
}
