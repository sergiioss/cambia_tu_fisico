import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Inicio from './containers/Inicio/Inicio'
import FitnessTraining from './containers/Training/Fitness/FitnessTraining'
import HitTraining from './containers/Training/Hit/HitTraining'
import BeginnersTraining from './containers/Training/Beginners/BeginnersTraining'
import AerobicExercisesTraining from './containers/Training/AerobicExercise/AerobicExercisesTraining'
import BigBodybuildersTraining from './containers/Training/BigBodybuilders/BigBodybuildersTraining'
import StretchingTraining from './containers/Training/Stretching/StretchingTraining'

function App() {
  

  return (
   <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/musculacion" element={<FitnessTraining/>}></Route>
        <Route path="/entrenamiento-alta-intensidad" element={<HitTraining/>}></Route>
        <Route path="/principiantes" element={<BeginnersTraining/>}></Route>
        <Route path="/ejercicio-aerobico" element={<AerobicExercisesTraining/>}></Route>
        <Route path="/culturistas" element={<BigBodybuildersTraining/>}></Route>
        <Route path="/estiramientos" element={<StretchingTraining/>}></Route>
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
