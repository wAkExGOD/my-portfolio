import styles from './Pagination.module.scss';
import {ReactComponent as ArrowIcon} from '../../assets/img/arrow.svg';

export function Pagination({ currentPage = 1, pagesCount, elemsPerPage, onPrevPage, onNextPage }) {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === pagesCount;
  return (
    <div className={styles.pagination}>
      <i
        className={[styles.arrow, styles.prev, prevDisabled ? styles.disabled : null].join(' ')}
        onClick={ () => !prevDisabled && onPrevPage() }>
        <ArrowIcon alt="previous" fill="white" />
      </i>
      <span className={styles.curr}>{currentPage}</span>
      <i
        className={[styles.arrow, styles.next, nextDisabled ? styles.disabled : null].join(' ')}
        onClick={ () => !nextDisabled && onNextPage() }>
        <ArrowIcon alt="next" fill="white" />
      </i>
    </div>
  )
}