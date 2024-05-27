import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AparicionesM from './pages/AparicionesM'; 
import Santos from './pages/Santos'; 
import Vida from './pages/Vida'; 
import Navbar from './view/Navbar'; 
import Footer from './view/Footer'; 


function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apariciones-marianas" element={<AparicionesM />} />
          <Route path="/santos" element={<Santos />} />
          <Route path="/vida" element={<Vida />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />

    </BrowserRouter>
  )
}

export default App
