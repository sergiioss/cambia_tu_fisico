import './BicepsTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BicepsTraining = () => {

    return (

        <Container className="biceps-training">
            <Row className="first-section-biceps">
                <Col className="body-biceps-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas y entrenamiento del Bíceps y Antebrazo</h1>
                    <i>Selección de rutinas de bíceps con ejercicios efectivos y sin necesidad de equipamiento avanzado.</i>
                    <Row className="icons-biceps" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-biceps" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-biceps-696x392.jpg"></Image>
                    <section>
                        <p>
                            ¿Necesitas <strong>rutinas de bíceps</strong> efectivas? Pues has llegado al lugar indicado. Aquí te traemos los mejores entrenamientos para tus bíceps con los ejercicios más efectivos.
                        </p>
                        <p>
                            Los <strong>bíceps</strong> es un músculo bastante simple pero nos deja algo de margen para enfatizar el entrenamiento en alguna de sus dos cabezas.
                        </p>
                        <p>
                            Existen varias posibilidades de entrenamiento del bíceps; puedes hacerlo en el mismo día con su músculo antagonista, el <strong>tríceps</strong>, o en combinación con cualquier otro músculo como el <strong>pecho</strong> o la <strong>espalda</strong>.
                        </p>
                        <Row className="square-biceps">
                            <p className="title-square-biceps">Contenidos</p>
                            <ul>
                                <li className="li-square-biceps">1 Los tres principios de la musculación</li>
                                <li>2 Musculación por grupos musculares</li>
                                <li>3 Selección de artículos de musculación</li>
                                <li>4 Rutina de bíceps en casa</li>
                                <li>5 Rutina de bíceps de 15 minutos</li>
                                <li>6 Rutina para prioridad en cabeza externa del bíceps (Pico)</li>
                                <li>7 Rutina para prioridad en cabeza corta del bíceps</li>
                                <li>8 Entrenamiento del bíceps en serie gigante*</li>
                                <li>9 Rutina de bíceps para fuerza*</li>
                                <li>10 Rutina de bíceps para definición</li>
                                <li>11 Rutina de bíceps para supercongestión</li>
                                <li>12 Como entrenar los bíceps y antebrazos</li>
                                <li>13 Rutinas de bíceps y antebrazos especializadas</li>
                            </ul>
                        </Row>
                        <h3>Consejos para llevar tus rutinas de bíceps al éxito</h3>
                        <p>
                            Existe tan sólo un tipo principal de ejercicio para el <strong>bíceps</strong>: el curl, en el que el codo queda fijo contra la resistencia.
                        </p>
                        <p>
                        Sin embargo, hay muchas variaciones del <strong>curl de bíceps</strong> que modifican la posición de los brazos en relación con el resto del cuerpo, a fin de entrenar el músculo desde diferentes ángulos.
                        </p>
                        <h5>Primero los ejercicios básicos</h5>
                        <p>
                            Debido a que virtualmente todos los ejercicios de bíceps son movimientos de una sola articulación, la regla de colocación en el orden de ejercicios es hacer primero aquellos que permiten levantar la <strong>mayor cantidad de peso</strong> en cada sesión de trabajo (el curl con barra y con mancuerna).
                        </p>
                        <p>
                            Debemos seguir con ejercicios tales como el <strong>curl del predicador</strong> y el curl <strong>concentrado</strong> (en cuyo caso la parte superior de los brazos estará estabilizada para proporcionar un mayor aislamiento del bíceps), que no le permitirán utilizar tanto peso.
                        </p>
                        <h5>Evita el sobreentrenamiento</h5>
                        <p>
                            Como hemos dicho, es un músculo pequeño, pero mucha gente tiende a <strong>sobreentrenarlo</strong>, realizando en muchas ocasiones más series y repeticiones que para músculos grandes como el pecho, la espalda o el cuádriceps.
                        </p>
                        <p>
                            Hay que tener en cuenta que es un músculo que también se estimula en el entrenamiento de espalda y es auxiliar al entrenar pecho y hombros.
                        </p>
                        <h5>Los antebrazos al final del entrenamiento</h5>
                        <p>
                            Debido a que los <strong>antebrazos</strong> son los más pequeños de los dos grupos musculares, éstos deben entrenarse después del <strong>bíceps</strong> (y habitualmente en el mismo entrenamiento, debido a la proximidad de ambas zonas anatómicas, y que el antebrazo sirve de ayuda en los ejercicios de los bíceps).
                        </p>
                        <h5>Varía tus entrenamientos</h5>
                        <p>
                            Manipulando los rangos de <strong>series</strong> y <strong>repeticiones</strong> también podemos centrarnos en mayor medida en la fuerza o en el volumen muscular o incluso una mezcla de ambos.
                        </p>
                        <p>
                            Puedes utilizar la distribución de series y ejercicios aquí expuestos según tus criterios. Por ejemplo, en vez de utilizar series en peso descendente y más repeticiones puedes hacerlas con peso ascendente empezando con repeticiones más altas.
                        </p>
                        <Row className="box-biceps-parrafo">
                            <p className="biceps-training-square">
                            Revisa nuestra <strong>sección de</strong> <strong className="title-red-biceps-square">ejercicios de bíceps</strong> para introducir variaciones en las rutinas aquí expuestas.
                            <br />
                            </p>
                        </Row>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BicepsTraining