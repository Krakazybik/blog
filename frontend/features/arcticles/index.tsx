import React from "react"
import { Card } from "shared/ui/card"
import styles from "./styles.module.scss"
import { Article } from "../../shared/ui/article"

export const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, i) => {
        return (
          <Article
            image={article.attributes.image}
            title={article.attributes.title}
            preview={article.attributes.description}
            full={`/article/${article.attributes.slug}`}
            key={`article_${article.attributes.slug}`}
          />
        )
      })}
    </>
  )
}
