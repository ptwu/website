import styles from './index.module.css';

type Props = {
  name: string;
  link: string;
};

export default function HeroButton({ name, link }: Props) {
  return (
    <a
      type="button"
      className={`${styles.HeroButton} dark:bg-slate-500`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}
