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

function App() {
  const goToTop = () => {
    document.body.scrollIntoView({
      behavior:"smooth"
    });
  };

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
        <Route path="/ejercicios-abdominal" element={<AbdominalExercises/>}></Route>
        <Route path="/ejercicios-espalda" element={<BackExercises/>}></Route>
        <Route path="/ejercicios-basicos" element={<BasicExercises/>}></Route>
        <Route path="/ejercicios-biceps" element={<BicepsExercises/>}></Route>
        <Route path="/ejercicios-pecho" element={<ChestExercises/>}></Route>
        <Route path="/ejercicios-bandas-elasticas" element={<ElasticBandsExercises/>}></Route>
        <Route path="/ejercicios-antebrazo" element={<ForearmExercises/>}></Route>
        <Route path="/ejercicios-pierna" element={<LegExercises/>}></Route>
        <Route path="/ejercicios-hombro" element={<ShoulderExercises/>}></Route>
        <Route path="/ejercicios-rotador-hombro" element={<ShoulderRotatorExercises/>}></Route>
        <Route path="/ejercicios-trapecio" element={<TrapeziusExercises/>}></Route>
        <Route path="/ejercicios-triceps" element={<TricepsExercises/>}></Route>
        <Route path="/nutricion-culturista" element={<BodyBuilderNutrition/>}></Route>
        <Route path="/nutricion-carbohidratos" element={<CarbohydratesNutrition/>}></Route>
        <Route path="/nutricion-grasas" element={<FatsNutrition/>}></Route>
        <Route path="/nutricion-y-vida-saludable" element={<HealthyLivingNutrition/>}></Route>
        <Route path="/nutricion-proteinas" element={<ProteinsNutrition/>}></Route>
        <Route path="/suplementos-aminoacidos" element={<AminoAcidsSupplements/>}></Route>
        <Route path="/suplementos-comprar-proteinas" element={<BuyProteinsSupplements/>}></Route>
        <Route path="/suplementos-cafeina" element={<CaffeineSupplements/>}></Route>
        <Route path="/suplementos-creatina" element={<CreatineSupplements/>}></Route>
        <Route path="/suplementos-glutamina" element={<GlutamineSupplements/>}></Route>
        <Route path="/suplementos-como-suplementarse" element={<HowSupplements/>}></Route>
        <Route path="/suplementos-otros" element={<OtherSupplements/>}></Route>
        <Route path="/suplementos-proteinas" element={<ProteinsSupplements/>}></Route>
        <Route path="/suplementos-vitaminas-y-minerales" element={<VitaminsAndMineralsSupplements/>}></Route>
        <Route path="/dietas-masa-muscular" element={<MuscleDefinitionDiet/>}></Route>
        <Route path="/dietas-definicion-muscular" element={<MuscularTimeDiet/>}></Route>
        <Route path="/mujer-dietas-y-nutricion" element={<DietsAndNutritionWomen/>}></Route>
        <Route path="/mujer-rutinas" element={<RoutinesWomen/>}></Route>
        <Route path="/mujer-pesas-y-entrenamientos" element={<WeightsAndTrainingWomen/>}></Route>
        <Route path="/objetivo-quemar-grasa" element={<BurnCaloriesObjetive/>}></Route>
        <Route path="/objetivo-ganar-masa-muscular" element={<GainMuscleMassObjetive/>}></Route>
        <Route path="/objetivo-ganar-peso" element={<GainWeightObjetive/>}></Route>
        <Route path="/objetivo-perder-peso" element={<LoseWeigthObjetive/>}></Route>
        <Route path="/objetivo-definicion-muscular" element={<MuscleDefinitionObjetive/>}></Route>
      </Routes>
      <button className="back-to-top hidden back-to-top-icon" onClick={goToTop}><span className="icon-circle-up"></span></button>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
