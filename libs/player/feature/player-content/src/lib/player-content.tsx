import styles from './player-content.module.scss';

/* eslint-disable-next-line */
export interface PlayerContentProps {}

export function PlayerContent(props: PlayerContentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlayerContent!</h1>
    </div>
  );
}

export default PlayerContent;
