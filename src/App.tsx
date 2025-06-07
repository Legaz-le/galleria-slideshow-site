import { Route, Routes } from "react-router-dom"
import "./App.css"
import Main_page from "./components/Gallery/GalleryGrid"
import ViewArt from "./components/Art/ViewArt"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main_page />}/>
      <Route path= "/art" element={<ViewArt />} />
      </Routes>
    </>
  )
}

export default App
