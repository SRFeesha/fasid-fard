import styles from './page.module.css'
import ChiliCursor from '@/components/ChiliCursor'

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/fasidfard/',
    label: 'Facebook',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
  },
  {
    href: 'https://share.google/Yf9MXUXyYNxT8qwJc',
    label: 'Google Maps',
    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
  },
]

export default function Home() {
  return (
    <>
      <ChiliCursor />
      <div className={styles.frame}>
        <span /><span /><span /><span />
      </div>
      <div className={styles.imageBg} />
      <div className={styles.stage}>
        <p className={styles.subtitle}>Fabbrica Siciliana Droghe</p>
        <h1 className={styles.title}>Fasid Fard</h1>
        <p className={styles.address}>Via Leucatia, 76A, 95125 Catania CT</p>
        <span className={styles.divider} />
        <div className={styles.socialRow}>
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={label}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
