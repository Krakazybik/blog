import Link from "next/link"
import styles from "./styles.module.scss"
import { getStrapiMedia } from "../../lib/media"

export const Article = ({ title, preview, full, image }) => {
  return (
    <article className={styles.Article}>
      <div className={styles.Image}>
        <img src={getStrapiMedia(image)} />
      </div>

      <div className={styles.Content}>
        <div className={styles.Content2}>
          <h2>{title}</h2>
          <p>{preview}</p>

          <Link href={full}>Читать полность</Link>
        </div>
      </div>
    </article>
  )
}
