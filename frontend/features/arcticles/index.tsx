import React from "react"
import { Card } from "shared/ui/card"
import styles from "./styles.module.scss"

export const Articles = ({ articles }) => {
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
