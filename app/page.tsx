import styles from './page.module.css'
import ChiliCursor from '@/components/ChiliCursor'

export default function Home() {
  return (
    <>
      <ChiliCursor />
      <div className={styles.stage}>
        <span className={styles.greeting}>— a voi —</span>
        <span className={styles.word}>ciao<span className={styles.comma}>,</span></span>
        <span className={styles.word}>esistiamo<span className={styles.period}>!</span></span>
        <span className={styles.line} />
      </div>
    </>
  )
}
