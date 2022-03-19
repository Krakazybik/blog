import ReactMarkdown from "react-markdown"
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter"
import { androidstudio } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import NextImage from "next/image"
import styles from "./styles.module.scss"

function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={androidstudio}>
      {value}
    </SyntaxHighlighter>
  )
}

const MarkdownImage = ({ src, alt }) => {
  return (
    <div className={styles.Figure}>
      <NextImage
        // loader={loader}
        layout="fill"
        objectFit="contain"
        src={`http://localhost:1337${src}`}
        alt={alt || ""}
      />
    </div>
  )
}

export const Markdown = ({ children }) => (
  <ReactMarkdown
    source={children}
    escapeHtml={false}
    renderers={{
      code: CodeBlock,
      image: MarkdownImage,
    }}
  />
)
