import styles from './page.module.css'
import ChiliCursor from '@/components/ChiliCursor'

export default function Home() {
  return (
    <>
      <ChiliCursor />
      <div className={styles.imageBg} />
      <a
        href="https://www.facebook.com/fasidfard/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fbLink}
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>

      <div className={styles.stage}>
        <h1 className={styles.title}>Fasid Fard</h1>
        <p className={styles.subtitle}>fabbrica siciliana di droghe</p>
        <p className={styles.address}>Via Leucatia, 76A, 95125 Catania CT</p>
      </div>
    </>
  )
}
