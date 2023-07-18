import './App.scss'
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
import AbdominalExercises from './containers/Exercises/Abdominal/AbdominalExercises'
import BackExercises from './containers/Exercises/Back/BackExercises'
import BasicExercises from './containers/Exercises/Basic/BasicExercises'
import BicepsExercises from './containers/Exercises/Biceps/BicepsExercises'
import ChestExercises from './containers/Exercises/Chest/ChestExercises'
import ElasticBandsExercises from './containers/Exercises/ElasticBands/ElasticBandsExercises'
import ForearmExercises from './containers/Exercises/Forearm/ForearmExercises'
import LegExercises from './containers/Exercises/Leg/LegExercises'
import ShoulderExercises from './containers/Exercises/Shoulder/ShoulderExercises'
import ShoulderRotatorExercises from './containers/Exercises/ShoulderRotator/ShoulderRotatorExercises'
import TrapeziusExercises from './containers/Exercises/Trapezius/TrapeziusExercises'
import TricepsExercises from './containers/Exercises/Triceps/TricepsExercises'
import BodyBuilderNutrition from './containers/Nutrition/BodyBuilder/BodyBuilderNutrition'
import CarbohydratesNutrition from './containers/Nutrition/Carbohydrates/CarbohydratesNutrition'
import FatsNutrition from './containers/Nutrition/Fats/FatsNutrition'
import HealthyLivingNutrition from './containers/Nutrition/HealthyLiving/HealthyLivingNutrition'
import ProteinsNutrition from './containers/Nutrition/Proteins/ProteinsNutrition'
import AminoAcidsSupplements from './containers/Supplements/AminoAcids/AminoAcidsSupplements'
import BuyProteinsSupplements from './containers/Supplements/BuyProteins/BuyProteinsSupplements'
import CaffeineSupplements from './containers/Supplements/Caffeine/CaffeineSupplements'
import CreatineSupplements from './containers/Supplements/Creatine/CreatineSupplements'
import GlutamineSupplements from './containers/Supplements/Glutamine/GlutamineSupplements'
import HowSupplements from './containers/Supplements/HowSupplements/HowSupplements'
import OtherSupplements from './containers/Supplements/Other/OtherSupplements'
import ProteinsSupplements from './containers/Supplements/Proteins/ProteinsSupplements'
import VitaminsAndMineralsSupplements from './containers/Supplements/VitaminsAndMinerals/VitaminsAndMineralsSupplements'
import MuscleDefinitionDiet from './containers/Diet/MuscleDefinition/MuscleDefinitionDiet'
import MuscularTimeDiet from './containers/Diet/MuscularTime/MuscularTimeDiet'
import DietsAndNutritionWomen from './containers/Women/DietsAndNutrition/DietsAndNutritionWomen'
import RoutinesWomen from './containers/Women/Routines/RoutinesWomen'
import WeightsAndTrainingWomen from './containers/Women/WeightsAndTraining/WeightsAndTrainingWomen'
import BurnCaloriesObjetive from './containers/Objetive/BurnCalories/BurnCaloriesObjetive'
import GainMuscleMassObjetive from './containers/Objetive/GainMuscleMass/GainMuscleMassObjetive'
import GainWeightObjetive from './containers/Objetive/GainWeight/GainWeightObjetive'
import LoseWeigthObjetive from './containers/Objetive/LoseWeigth/LoseWeigthObjetive'
import MuscleDefinitionObjetive from './containers/Objetive/MuscleDefinition/MuscleDefinitionObjetive'
import { useEffect, useState } from 'react'

function App() {

  const [scroll, setScroll] = useState({
    hiddin:"hiddin"
  });

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior:"smooth"
    });
  };
  const handleScroll = () =>{
    if(window.scrollY > 0){
      setScroll({
        hiddin:""
      })
    }else{
      setScroll({
        hiddin:"hiddin"
      })
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])
  

  return (
   <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/cambia_tu_fisico/inicio" element={<Inicio/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/musculacion" element={<FitnessTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/entrenamiento-alta-intensidad" element={<HitTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/principiantes" element={<BeginnersTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicio-aerobico" element={<AerobicExercisesTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/culturistas" element={<BigBodybuildersTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/estiramientos" element={<StretchingTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/abdominal" element={<AbdominalTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/espalda" element={<BackTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/biceps" element={<BicepsTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/pecho" element={<ChestTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/pierna" element={<LegTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rotador" element={<RotatorTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/hombro" element={<ShoulderTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/triceps" element={<TricepsTraining/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-abdominal" element={<AbdominalRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/otras-rutinas" element={<AnotherRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-principiantes" element={<BeginnersRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-definicion" element={<DefinitionRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-fullbody" element={<FullBodyRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-en-casa" element={<HomeRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-fuerza" element={<StrengthRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/rutinas-volumen" element={<VolumeRoutines/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-abdominal" element={<AbdominalExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-espalda" element={<BackExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-basicos" element={<BasicExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-biceps" element={<BicepsExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-pecho" element={<ChestExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-bandas-elasticas" element={<ElasticBandsExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-antebrazo" element={<ForearmExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-pierna" element={<LegExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-hombro" element={<ShoulderExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-rotador-hombro" element={<ShoulderRotatorExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-trapecio" element={<TrapeziusExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/ejercicios-triceps" element={<TricepsExercises/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/nutricion-culturista" element={<BodyBuilderNutrition/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/nutricion-carbohidratos" element={<CarbohydratesNutrition/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/nutricion-grasas" element={<FatsNutrition/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/nutricion-y-vida-saludable" element={<HealthyLivingNutrition/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/nutricion-proteinas" element={<ProteinsNutrition/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-aminoacidos" element={<AminoAcidsSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-comprar-proteinas" element={<BuyProteinsSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-cafeina" element={<CaffeineSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-creatina" element={<CreatineSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-glutamina" element={<GlutamineSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-como-suplementarse" element={<HowSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-otros" element={<OtherSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-proteinas" element={<ProteinsSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/suplementos-vitaminas-y-minerales" element={<VitaminsAndMineralsSupplements/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/dietas-masa-muscular" element={<MuscleDefinitionDiet/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/dietas-definicion-muscular" element={<MuscularTimeDiet/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/mujer-dietas-y-nutricion" element={<DietsAndNutritionWomen/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/mujer-rutinas" element={<RoutinesWomen/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/mujer-pesas-y-entrenamientos" element={<WeightsAndTrainingWomen/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/objetivo-quemar-grasa" element={<BurnCaloriesObjetive/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/objetivo-ganar-masa-muscular" element={<GainMuscleMassObjetive/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/objetivo-ganar-peso" element={<GainWeightObjetive/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/objetivo-perder-peso" element={<LoseWeigthObjetive/>}></Route>
        <Route path="/cambia_tu_fisico/inicio/objetivo-definicion-muscular" element={<MuscleDefinitionObjetive/>}></Route>
      </Routes>
      <button className={`back-to-top ${scroll.hiddin}`} onClick={goToTop}><span className="icon-circle-up"></span></button>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
