import styles from './player-shell.module.scss';

/* eslint-disable-next-line */
export interface PlayerShellProps {}

export function PlayerShell(props: PlayerShellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlayerShell!</h1>
    </div>
  );
}

export default PlayerShell;
