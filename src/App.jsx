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
import AbdominalTraining from './containers/ForMuscle/Abdominal/AbdominalTraining'
import BackTraining from './containers/ForMuscle/Back/BackTraining'
import BicepsTraining from './containers/ForMuscle/Biceps/BicepsTraining'
import ChestTraining from './containers/ForMuscle/Chest/ChestTraining'
import LegTraining from './containers/ForMuscle/Leg/LegTraining'
import RotatorTraining from './containers/ForMuscle/Rotator/RotatorTraining'
import ShoulderTraining from './containers/ForMuscle/Shoulder/ShoulderTraining'
import TricepsTraining from './containers/ForMuscle/Triceps/TricepsTraining'
import AbdominalRoutines from './containers/Routines/Abdominal/AbdominalRoutines'
import AnotherRoutines from './containers/Routines/Another/AnotherRoutines'
import BeginnersRoutines from './containers/Routines/Beginners/BeginnersRoutines'
import DefinitionRoutines from './containers/Routines/Definition/DefinitionRoutines'
import FullBodyRoutines from './containers/Routines/FullBody/FullBodyRoutines'
import HomeRoutines from './containers/Routines/Home/HomeRoutines'
import StrengthRoutines from './containers/Routines/Strength/StrengthRoutines'
import VolumeRoutines from './containers/Routines/Volume/VolumeRoutines'

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
        <Route path="/abdominal" element={<AbdominalTraining/>}></Route>
        <Route path="/espalda" element={<BackTraining/>}></Route>
        <Route path="/biceps" element={<BicepsTraining/>}></Route>
        <Route path="/pecho" element={<ChestTraining/>}></Route>
        <Route path="/pierna" element={<LegTraining/>}></Route>
        <Route path="/rotador" element={<RotatorTraining/>}></Route>
        <Route path="/hombro" element={<ShoulderTraining/>}></Route>
        <Route path="/triceps" element={<TricepsTraining/>}></Route>
        <Route path="/rutinas-abdominal" element={<AbdominalRoutines/>}></Route>
        <Route path="/otras-rutinas" element={<AnotherRoutines/>}></Route>
        <Route path="/rutinas-principiantes" element={<BeginnersRoutines/>}></Route>
        <Route path="/rutinas-definicion" element={<DefinitionRoutines/>}></Route>
        <Route path="/rutinas-fullbody" element={<FullBodyRoutines/>}></Route>
        <Route path="/rutinas-en-casa" element={<HomeRoutines/>}></Route>
        <Route path="/rutinas-fuerza" element={<StrengthRoutines/>}></Route>
        <Route path="/rutinas-volumen" element={<VolumeRoutines/>}></Route>
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
