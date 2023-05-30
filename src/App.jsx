import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Inicio from './containers/Inicio/Inicio'

function App() {
  

  return (
   <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/" element={<Inicio/>}></Route>
      </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
