import './ShoulderExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const ShoulderExercises = () => {

    return (

        <Container className="shoulder-exercise-training">
        <Row className="first-section-shoulder-exercise">
        <Breadcrumb></Breadcrumb>
            <Col className="body-shoulder-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Ejercicios de Hombro</h1>
                <br />
                <Row className="icons-shoulder-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-shoulder-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-hombro1-696x392.jpg"></Image>
                <section>
                    <p>
                        Los <strong>ejercicios de hombro</strong> se clasifican en tres tipos principales: press por encima de la cabeza, remo hacia arriba y elevaciones.
                    </p>
                    <p>
                        Los dos primeros son <strong>ejercicios</strong> compuestos, por lo que deberías realizarlos en primer lugar en tu sesión de trabajo.
                    </p>
                    <p>
                        Debido a que los press sobre la cabeza permiten utilizar más peso con mayores ganancias de fuerza y volumen muscular deberían hacerse en sus diferentes versiones (barras, mancuernas o máquinas de press sobre la cabeza) al <strong>principio</strong> del entrenamiento de hombros.
                    </p>
                    <p>
                        La decisión sobre qué tipo de ejercicios debe hacer primero  están en función de cuáles son las necesidades del deltoides que necesitan mayor atención debido a su relativa <strong>debilidad</strong>.
                    </p>
                    <p>
                        Si ninguna de ellas es prioritaria, rotar el orden entre las tres.
                    </p>
                    <p>
                        Independientemente de ello, para estimular el equilibrio en los <strong>hombros</strong>, dedica una amplia atención a los tres grupos del deltoides en cada sesión de trabajo.
                    </p>
                    <p>
                        En nuestra sección de <strong>rutinas y entrenamiento del hombro</strong> tienes una completa selección de planes de entrenamiento para desarrollar los hombros así como consejos avanzados de entrenamiento.
                    </p>
                    <Row className="square-shoulder-exercise">
                        <p className="title-square-shoulder-exercise">Contenidos</p>
                        <ul>
                            <li className="li-square-shoulder-exercise">1 Los ejercicios de hombro adecuados</li>
                            <li>2 El estilo correcto</li>
                            <li>3 Fallos comunes en los ejercicios de hombro</li>
                        </ul>
                    </Row>
                    <h3>Los ejercicios de hombro adecuados</h3>
                    <p>
                        El desarrollo de los <strong>hombros</strong> implica trabajo con kilajes grandes y mezcla de <strong>ejercicios</strong> compuestos y de aislamiento para las tres cabezas del hombro.
                    </p>
                    <p>
                        La anterior o frontal se trabaja haciendo press de banca, pero aún así necesita atención individual.
                    </p>
                    <p>
                        La media y la trasera precisan trabajo especifico.
                    </p>
                    <h3>El estilo correcto</h3>
                    <p>
                        Calentar cuidadosamente los <strong>hombros</strong> antes de realizar cualquier <strong>ejercicio</strong> es imprescindible  porque se trata de una articulación vulnerable y proclive a la lesión.
                    </p>
                    <p>
                        Los hombros poco desarrollados pueden conducir no solo a la falta de estética sino a lesión y disminuir el rendimiento de otros grupos musculares.
                    </p>
                    <h3>Fallos comunes en los ejercicios de hombro</h3>
                    <p>
                        El deltoide posterior suele ser el menos entrenado de los músculos del hombro. Trabajadlo con elevaciones traseras o pajaros y aperturas invertidas en máquina contractora.
                    </p>
                    <h5>Desarrollo general del hombro</h5>
                    <li className="blue-list-shoulder-exercise">Cargadas en dos tiempos (Clean and Jerk)</li>
                    <li className="blue-list-shoulder-exercise">Press con mancuernas de pie</li>
                    <li className="blue-list-shoulder-exercise">Press Cubano</li>
                    <li className="blue-list-shoulder-exercise">Press de hombro con mancuernas sentado</li>
                    <li className="blue-list-shoulder-exercise">Press de hombros en máquina</li>
                    <li className="blue-list-shoulder-exercise">Press de hombros en multipower</li>
                    <li className="blue-list-shoulder-exercise">Press de hombros en polea</li>
                    <li className="blue-list-shoulder-exercise">Press militar con barra de pie</li>
                    <li className="blue-list-shoulder-exercise">Press militar con barra sentado</li>
                    <li className="blue-list-shoulder-exercise">Press tras nuca con barra</li>
                    <li className="blue-list-shoulder-exercise">Press tras nuca en multipower</li>
                    <li className="blue-list-shoulder-exercise">Sentadilla con barra por encima de la cabeza</li>
                    <h5>Zona frontal del hombro</h5>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales con barra</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales con barra en banco inclinado</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales con disco</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales con mancuerna</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales en banco inclinado</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones frontales en polea a una mano</li>
                    <li className="blue-list-shoulder-exercise">Press Arnold</li>
                    <h5>Zona lateral del hombro</h5>
                    <li className="blue-list-shoulder-exercise">Elevación lateral inclinada</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones laterales a una mano en polea</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones laterales de hombro</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones laterales en máquina</li>
                    <li className="blue-list-shoulder-exercise">Remo al mentón agarre abierto</li>
                    <h5>Zona posterior del hombro</h5>
                    <li className="blue-list-shoulder-exercise">Aperturas invertidas en máquina contractora</li>
                    <li className="blue-list-shoulder-exercise">Elevación posterior a una mano en polea</li>
                    <li className="blue-list-shoulder-exercise">Elevación posterior tumbado a una mano</li>
                    <li className="blue-list-shoulder-exercise">Elevaciones posteriores con Mancuerna (Pájaros)</li>
                    <li className="blue-list-shoulder-exercise">Face Pull, el ejercicio para tus deltoides posteriores</li>
                    <li className="blue-list-shoulder-exercise">Pájaros en banco inclinado</li>
                    <li className="blue-list-shoulder-exercise">Pájaros en polea de pie</li>
                    <li className="blue-list-shoulder-exercise">Pájaros sentado con mancuernas</li>
                </section>
            </Col>
            <Aside className="aside"/>  
        </Row>
    </Container>
    )
}

export default ShoulderExercises