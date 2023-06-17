import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home.component"
import Spinner from './components/spinner/spinner.component';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
)
}

export default App
