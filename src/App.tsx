import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./componentes/Header/Header";
import Home from "./componentes/home/home";
import Perfil from "./componentes/Perfil/Perfil";
import Seguros from "./Seguros/Seguros.tsx";
import Integrantes from "./componentes/Integrantes/Integrantes";
import Footer from "./componentes/Footer/Footer.tsx";
import RegistrarCarro from "./RegistrarCarro/RegistrarCarro.tsx";
import Contato from "./Contato/Contato.tsx";


const App = () => {

  return (
    <>
    
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/registrarcarro" element={<RegistrarCarro />} />
        <Route path="/contato" element={<Contato />} />
        
        


      </Routes>
      
      </BrowserRouter>

      <Footer/>
            
        </>
  );
}

export default App;
