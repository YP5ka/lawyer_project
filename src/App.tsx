import Header from "./components/Header"
import MainPage from "./components/pages/MainPage"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router"
import Projects from "./components/pages/Projects"
import Contacts from "./components/pages/Contacts"
import Finance from "./components/pages/Finance"

function App() {
return(
  <>
    <Header />
      <Routes>
        <Route path ="/" element={<MainPage/>}/>
        <Route path ="/projects" element={<Projects/>}/>
        <Route path ="/contacts" element={<Contacts/>}/>
        <Route path ="/finance" element={<Finance/>}/>
      </Routes>
      <Footer/>
  </>      
  )
}

export default App
