import React from "react"
import Link from "next/link"
import styles from "./styles.module.scss"

export const Header = ({ categories }) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/category/${category.attributes.slug}`}>
                  {category.attributes.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
