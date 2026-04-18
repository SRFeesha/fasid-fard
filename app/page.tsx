import styles from './page.module.css'
import ChiliCursor from '@/components/ChiliCursor'

export default function Home() {
  return (
    <>
      <ChiliCursor />
      <div className={styles.imageBg} />
      <div className={styles.stage}>
        <h1 className={styles.title}>Fasid Fard</h1>
        <p className={styles.subtitle}>fabbrica siciliana di droghe</p>
        <p className={styles.address}>Via Leucatia, 76A, 95125 Catania CT</p>
      </div>
    </>
  )
}
