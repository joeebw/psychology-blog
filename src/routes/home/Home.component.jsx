import { Routes, Route } from "react-router-dom"
import BlogHome from "../../components/blog-home/BlogHome.component"
import ArticleItem from "../../components/article-item/ArticleItem.component"
import NavBar from "../../components/nav-bar/NavBar.component"
import Footer from "../../components/footer/Footer.component"
import Bio from "../bio/Bio.component"

function Home() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index element={<BlogHome/>}/>
        <Route path="bio" element={<Bio/>}/>
        <Route path="article/:blog" element={<ArticleItem/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Home
