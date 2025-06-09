import { Route, Routes } from "react-router-dom"
import "./App.css"
import Main_page from "./components/Gallery/GalleryGrid"
import ViewArt from "./components/Art/ViewArt"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/art/:name" element={<ViewArt />}/>
      <Route path="/" element={<Main_page />}/>
      </Routes>
    </>
  )
}

export default App
