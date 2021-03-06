import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../shared/lib/api"
import NextImage from "../../shared/components/image"
import { Seo } from "../../shared/ui/seo"
import { getStrapiMedia } from "../../shared/lib/media"
import { Markdown } from "../../shared/ui/markdown"
import { Layout } from "../../widgets/layout"
import styles from "./styles.module.scss"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  console.log(article)

  return (
    <Layout categories={categories.data} className={styles.Article}>
      <Seo seo={seo} />
      <header>
        <h1>{article.attributes.title}</h1>
        <NextImage image={article.attributes.image} />
      </header>

      <main>
        {article.attributes.author.picture && (
          <NextImage image={article.attributes.author.picture} />
        )}
        <p>
          <Markdown>{article.attributes.content}</Markdown>
        </p>
      </main>

      <footer>
        <address>By: {article.attributes.author.data.attributes.name}</address>
      </footer>
    </Layout>
  )

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.attributes.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.author.picture && (
                <NextImage image={article.attributes.author.picture} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
