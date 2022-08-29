import { useState } from 'react';
import { MainBlockContainer, Pagination } from '../';
import styles from './Projects.module.scss';

export function Projects({ items = [], active = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const elemsPerPage = 2;
  const pagesCount = Math.ceil(items.length / elemsPerPage);

  const onPageClick = (page) => {
    if (page > 0 && page <= pagesCount) {
      setCurrentPage(page);
    }
  }

  const projects = items.slice(currentPage * elemsPerPage - elemsPerPage, currentPage * elemsPerPage);

  return (
    <MainBlockContainer active={active}>
      <ul className={styles.cards}>
        {projects.map(({ id, title, link, description, stack }) => (
          <li className={styles.card} key={id}>
            <h2 className={styles.card__title}>
              {link ? (
                <a href={link} target="_blank" rel="noreferrer" className={styles.card__link}>
                  <i></i>
                  <span>{title}</span>
                </a>
              ) : (
                <span>{title}</span>
              )}
            </h2>
            <div className={styles.card__description}>{description}</div>
            {stack && <div className={styles.card__stack}>{stack}</div>}
          </li>
        ))}
      </ul>
      { items.length > elemsPerPage &&
        <Pagination
          currentPage={currentPage}
          onPrevPage={() => onPageClick(currentPage - 1)}
          onNextPage={() => onPageClick(currentPage + 1)}
          pagesCount={pagesCount}
          elemsPerPage={elemsPerPage}/>
      }
    </MainBlockContainer>
  );
}
