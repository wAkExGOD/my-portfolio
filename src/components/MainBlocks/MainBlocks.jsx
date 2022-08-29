import { petProjects } from '../../constants';
import { commercialProjects, blockNames } from '../../constants';
import { Projects, ContactMe } from '../';
import styles from './MainBlocks.module.scss';

export function MainBlocks({ activeItem }) {
  return (
    <div className={styles['main-blocks']}>
      <Projects items={petProjects} active={activeItem === blockNames.petProjects} />
      <Projects items={commercialProjects} active={activeItem === blockNames.commercialProjects} />
      <ContactMe active={activeItem === blockNames.contactMe} />
    </div>
  );
}