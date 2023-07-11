import './VitaminsAndMineralsSupplements.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const VitaminsAndMineralsSupplements = () => {

    return (

        <Container className="vitaminsAndMinerals-supplements">
            <Row className="first-section-vitaminsAndMinerals-supplements">
                <Col className="body-vitaminsAndMinerals-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Vitaminas</h1>
                    <br />
                    <Row className="icons-vitaminsAndMinerals-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-vitaminsAndMinerals-supplements" src="https://www.cambiatufisico.com/wp-content/uploads/vitaminas-minerales-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>vitaminas</strong> (A, C, E, etc.) son sustancias orgánicas esenciales para mantener las funciones del organismo y, por lo tanto, imprescindibles para la vida.
                        </p>
                        <p>
                            Entre las numerosas e importantes funciones de las vitaminas podemos destacar las siguientes:
                        </p>
                        <li>Contribuyen al <strong>desarrollo</strong> y protección del organismo y del sistema inmunológico.</li>
                        <li><strong>Síntesis de algunas hormonas.</strong></li>
                        <li><strong>Protección contra los Radicales Libres*</strong> a través de la acción de los Antioxidantes (Vitaminas A, C, E, etc.). (Los Radicales Libres son moléculas que surgen a raíz de la contaminación, tabaco, exposiciones prolongadas al sol, estrés, ejercicio excesivo, etc., y que contribuyen a la oxidación o envejecimiento prematuro de las células del organismo.)</li>
                        <li>Aunque por sí solas no producen <strong>energía</strong>, sí participan en las reacciones a través de las cuales se obtiene la energía en nuestro organismo.</li>
                        <br />  
                        <p>
                            La suplementación con antioxidantes refuerza el sistema inmunológico y colabora en la lucha del cuerpo contra los radicales libres que provocan cáncer y otras dolencias, como las enfermedades del corazón y hasta el fallo cardiaco.
                        </p>
                        <p>
                            Un nivel alto de radicales libres hace estragos en el organismo y provoca debilidad y apatía. Los culturistas no pueden permitirse sentirse débiles cuando tienen que entrenar.
                        </p>
                        <p>
                            Suplementarse con <strong>antioxidantes</strong> también reduce las lesiones musculares del entrenamiento duro y regular. Los que quieran obtener los antioxidantes de la alimentación deben tomar fruta y verdura, como las naranjas, la coliflor, los guisantes y los arándanos, y además, podéis beber té verde.
                        </p>
                        <h3>¿Cual es su misión?</h3>
                        <p>
                            Tienen la importante misión de facilitar la transformación en energía que siguen los substratos a través de las vías metabólicas, que intervienen como catalizador en las reacciones bioquímicas. Por el torrente sanguíneo llegan al interior de las células, y se utilizan como precursoras de las coenzimas, a partir de las cuales se elaboran las miles de enzimas que regulan las reacciones de las que viven las células.
                        </p>
                        <p>
                            Un aumento de las necesidades biológicas requiere un incremento de estas sustancias, como sucede en determinadas etapas de la infancia, el embarazo, la lactancia y durante la tercera edad. Por el mismo motivo, hoy todo el mundo reconoce que tanto los deportistas o quienes practican una <strong>actividad física intensa</strong> requieren un mayor aporte vitamínico por el incremento en el esfuerzo físico. También el consumo de tabaco, alcohol o drogas en general y el abuso de café o té provocan un mayor gasto de algunas vitaminas, por lo que en estos casos es necesario un aporte suplementario.
                        </p>
                        <h3>¿Debemos tomarlas?</h3>
                        <p>
                            Aunque las necesidades orgánicas sean de miligramos o incluso microgramos, son nutrientes esenciales, puesto que no podemos sintetizarlas, por lo tanto <strong>debemos ingerirlas obligatoriamente con la alimentación</strong>. Una excepción es la vitamina D, que se puede formar en la piel con la exposición al sol, y las vitaminas K, B1, B12 y ácido fólico, que se forman en pequeñas cantidades en la flora intestinal.
                        </p>
                        <p>
                            La <strong>dieta</strong> debe ser equilibrada y abundante en productos frescos y naturales, para disponer de todas las vitaminas necesarias, privilegiando más los alimentos de fuerte densidad nutricional, como las legumbres, cereales y frutas, sobre los meramente calóricos. Otro aspecto importante a valorar es la conservación y cocción de los alimentos, ya que se producen pérdidas <strong>vitamínicas</strong> inevitables, puesto que el agua, el calor y el tiempo disminuyen el nivel vitamínico de los alimentos por una oxidación acelerada.
                        </p>
                        <p>
                            Algunas personas, o ciertos grupos, cuentan con carencias <strong>vitamínicas sistemáticas</strong>. Dentro de estos grupos de riesgo están las personas que realizan una restricción calórica permanente al tiempo que desarrollan mucho <strong>ejercicio</strong>, como son las gimnastas o bailarinas, personas muy preocupadas con su figura que realizan regímenes muy desequilibrados en su contenido, consumidores de comidas rápidas o enlatadas por razones laborales o por vivir solos, también los <strong>vegetarianos</strong>, ya que tendrían carencias de las vitaminas contenidas en los productos cárnicos y lácteos.
                        </p>
                        <h3>Tipos de vitaminas</h3>
                        <p>
                            Las vitaminas se clasifican según su <strong>solubilidad</strong> (según en qué medio se pueden disolver).
                        </p>
                        <p>
                            De este hecho se deducen únicamente dos grupos: las vitaminas <strong>liposolubles</strong> y las <strong>hidrosolubles</strong>.
                        </p>
                        <h5>Vitaminas liposolubles</h5>
                        <p>
                            Dentro de las vitaminas liposolubles encontramos las vitaminas A, D, E y K. Éstas se disuelven en lípidos, grasa, con lo que para su asimilación necesitan la presencia de bilis en el aparato digestivo.
                        </p>
                        <p>
                            Si tenemos problemas a la hora de absorber las grasas también los tendremos con las vitaminas liposolubles. Debido a que no son solubles en agua, no se excretan por la orina sino que se acumulan en el hígado y tejido adiposo, de modo que en caso de un exceso de ingestión corremos el riesgo de padecer un efecto tóxico (hipervitaminosis). Esto puede suceder en caso de las vitaminas A y D, que tienen funciones vitales.
                        </p>
                        <p>
                            <strong>La vitamina A</strong> tiene un papel importante en el mantenimiento de una buena visión, protege nuestra piel de agresiones externas y desarrolla una función notable en el crecimiento de los tejidos.
                        </p>
                        <p>
                            <strong>La vitamina D</strong> es fundamental para el aporte de calcio y fósforo, lo cual nos permite mantener unos huesos sanos.
                        </p>
                        <p>
                            <strong>La vitamina E</strong> es un potente antioxidante que previene el deterioro y el envejecimiento celular.
                        </p>
                        <p>
                            <strong>La vitamina K</strong> es clave en la coagulación de la sangre.
                        </p>
                        <h5>Vitaminas hidrosolubles</h5>
                        <p>
                            Las vitaminas <strong>hidrosolubles</strong>, en cambio, se disuelven en agua y por lo tanto se pueden excretar por la orina sin acumularse en el organismo, excepto la B12. Son por lo tanto <strong>inocuas</strong>, sin efecto tóxico, pero por prevención no es recomendable su abuso.
                        </p>
                        <p>
                            Las desventajas son que al perderse por la orina, sus <strong>deficiencias</strong> se manifiestan rápidamente y además, al ser solubles en agua, se pueden perder por un exceso de <strong>cocción</strong> de los alimentos.
                        </p>
                        <p>
                            En este grupo tenemos las vitaminas del complejo B (B1, B2, Bs, B12, ácido fólico, ácido pantoténico, ácido nicotínico y biotina), y la vitamina C.
                        </p>
                        <p>
                            Todas estas vitaminas hidrosolubles tienen función de <strong>co-enzimas</strong>, siendo necesarias para la activación de reacciones del metabolismo energético, proteico- aminoacídico y de los ácidos nucleicos. También pueden ser componentes estructurales básicos de moléculas vitales en el mantenimiento de la <strong>estructura celular</strong>.
                        </p>
                        <p>
                            <strong>La vitamina C</strong> también cumple un papel importante como antioxidante.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default VitaminsAndMineralsSupplements