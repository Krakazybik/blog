import { Header } from "widgets/header"
import { fetchAPI } from "../../shared/lib/api"

export const Layout = ({ categories, children }) => {
  return (
    <>
      <Header categories={categories} />
      <main>{children}</main>
      <footer>dsda</footer>
    </>
  )
}
