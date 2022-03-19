import { Header } from "widgets/header"
import cn from "classnames"
import styles from "./styles.module.scss"

export const Layout = ({ categories, children, className }) => {
  return (
    <div className={cn(styles.Layout, className)}>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}
