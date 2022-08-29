import styles from './Links.module.scss';
// import { Icon } from '../';
import { ReactComponent as TelegramLogo } from '../../assets/img/telegram.svg';
import { ReactComponent as VKLogo } from '../../assets/img/vk.svg';
import { ReactComponent as TwitterLogo } from '../../assets/img/twitter.svg';

const links = [
  { name: 'telegram', href: 'https://t.me/wAkExGOD', Icon: TelegramLogo },
  { name: 'vk', href: 'https://vk.com/kwake', Icon: VKLogo },
  { name: 'twitter', href: 'https://twitter.com/wAkExGOD', Icon: TwitterLogo },
];

export function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.line} />
      <ul className={styles['links-list']}>
        {links.map(({ href, name, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={styles.link}>
            <Icon className={styles.icon} />
            {/* <ReactSVG src={`./icons/${name}.svg`} /> */}
            {/* <img src={require(`../../assets/img/${name}.svg`)} alt={`${name}-logo`} /> */}
            {/* <Icon fill="white" name={name} /> */}
          </a>
        ))}
      </ul>
    </div>
  )
}