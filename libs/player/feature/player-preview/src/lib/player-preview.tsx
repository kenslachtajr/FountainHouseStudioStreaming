import styles from './player-preview.module.scss';

/* eslint-disable-next-line */
export interface PlayerPreviewProps {}

export function PlayerPreview(props: PlayerPreviewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlayerPreview!</h1>
    </div>
  );
}

export default PlayerPreview;
