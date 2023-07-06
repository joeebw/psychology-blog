import Header from "../header/Header.component"
import AboutMe from "../about-me/AboutMe.component"
import Articles from "../articles/Articles.component"
import { useContext, useEffect, useState } from "react"
import Spinner from "../spinner/spinner.component"

const BlogHome = () => {
const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 500);
  }, [])

  return (
    <>
      <Spinner isReady={isReady}/>
      <Header/>
      <AboutMe/>
      <Articles/>
    </>
  )
}

export default BlogHome
