import './LegExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const LegExercises = () => {

    return (

        <Container className="leg-exercise-training">
            <Row className="first-section-leg-exercise">
                <Col className="body-leg-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Piernas</h1>
                    <br />
                    <Row className="icons-leg-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-leg-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-pierna-696x392.jpg"></Image>
                    <section>
                        <p>
                            El rey de todos los entrenamientos, el día de <strong>ejercicios de piernas</strong>, resulta tan gratificante como agotador.
                        </p>
                        <p>
                            Entrenar las <strong>piernas</strong> en serio supone realizar <strong>ejercicios</strong> compuestos y de aislamiento a lo largo de un intervalo completo de recorrido.
                        </p>
                        <h3>Los ejercicios de pierna adecuados</h3>
                        <p>
                            No olvides introducir en tu rutina <strong>ejercicios</strong> compuestos como sentadilla, sentadilla hack,prensa y peso muerto con piernas rígidas, así como movimientos de aislamiento como extensión de piernas y flexión femoral, tanto para terminar el entrenamiento como para preagotar las <strong>piernas</strong>.
                        </p>
                        <h3>El estilo correcto en los ejercicios de pierna</h3>
                        <p>
                            Como las piernas son agotadoras de trabajar, debemos concentrarnos en utilizar un estilo correcto en los <strong>ejercicios de piernas</strong> para evitar lesiones.
                        </p>
                        <p>
                            Disponer de un compañero bien preparado para que vigile nuestros movimientos, sobre todo aquellos en que utilizamos grandes pesos y bajas repeticiones, resulta ideal. Si entrenas solo ten especial cuidado en las series mas pesadas.
                        </p>
                        <h3>Fallos comunes en los ejercicios de piernas</h3>
                        <p>
                            Incluso los culturistas serios que tienen buenas <strong>piernas</strong> suelen fallar en los <strong>femorales</strong> al usar nada más que flexiones de piernas para su desarrollo.
                        </p>
                        <p>
                            Como estos músculos son biarticulares -rodilla y cadera- la flexión femoral no trabaja el enlace glúteo-femoral como lo hace el peso muerto. Incluid una flexión de piernas y un <strong>peso muerto</strong> en vuestra rutina de ejercicios de piernas y los femorales se pondrán enseguida a la par de los cuadriceps.
                        </p>
                        <h5>Ejercicios de Cuadriceps</h5>
                        <li className="blue-list-leg-exercise">Aductores en polea</li>
                        <li className="blue-list-leg-exercise">Extensiones de cuádriceps en máquina</li>
                        <li className="blue-list-leg-exercise">Peso Muerto</li>
                        <li className="blue-list-leg-exercise">Power Clean</li>
                        <li className="blue-list-leg-exercise">Prensa Horizontal</li>
                        <li className="blue-list-leg-exercise">Prensa Inclinada</li>
                        <li className="blue-list-leg-exercise">Prensa Inclinada a una pierna</li>
                        <li className="blue-list-leg-exercise">Prensa Vertical</li>
                        <li className="blue-list-leg-exercise">Sentadilla Búlgara</li>
                        <li className="blue-list-leg-exercise">Sentadilla con barra por encima de la cabeza</li>
                        <li className="blue-list-leg-exercise">Sentadilla con barra, el ejercicio definitivo</li>
                        <li className="blue-list-leg-exercise">Sentadilla con caja, cuestión de altura</li>
                        <li className="blue-list-leg-exercise">Sentadilla con el peso corporal</li>
                        <li className="blue-list-leg-exercise">Sentadilla con mancuernas</li>
                        <li className="blue-list-leg-exercise">Sentadilla con salto</li>
                        <li className="blue-list-leg-exercise">Sentadilla en multipower</li>
                        <li className="blue-list-leg-exercise">Sentadilla frontal con barra</li>
                        <li className="blue-list-leg-exercise">Sentadilla Hack</li>
                        <li className="blue-list-leg-exercise">Sentadilla Hack con barra</li>
                        <li className="blue-list-leg-exercise">Sentadilla Jefferson</li>
                        <li className="blue-list-leg-exercise">Sentadilla Profunda (Completa)</li>
                        <li className="blue-list-leg-exercise">Sentadilla Sissy</li>
                        <li className="blue-list-leg-exercise">Sentadilla Sumo con barra</li>
                        <li className="blue-list-leg-exercise">Sentadilla Sumo con mancuerna</li>
                        <li className="blue-list-leg-exercise">Sentadilla Zercher</li>
                        <li className="blue-list-leg-exercise">Zancadas</li>
                        <li className="blue-list-leg-exercise">Zancadas hacia atrás o inversas</li>
                        <li className="blue-list-leg-exercise">Zancadas laterales</li>
                       <h5>Ejercicios de Femoral y gluteos</h5>
                       <li className="blue-list-leg-exercise">Abductores en máquina</li>
                       <li className="blue-list-leg-exercise">Aductores en máquina</li>
                       <li className="blue-list-leg-exercise">Buenos días con barra y piernas separadas</li>
                       <li className="blue-list-leg-exercise">Curl femoral en balón de ejercicio</li>
                       <li className="blue-list-leg-exercise">Extensión de cadera para glúteos</li>
                       <li className="blue-list-leg-exercise">Extensiones de glúteos en polea</li>
                       <li className="blue-list-leg-exercise">Femoral en máquina de pie</li>
                       <li className="blue-list-leg-exercise">Femoral en máquina sentado</li>
                       <li className="blue-list-leg-exercise">Femoral en máquina tumbado (Curl de piernas)</li>
                       <li className="blue-list-leg-exercise">Flexión femoral acostado con mancuerna</li>
                       <li className="blue-list-leg-exercise">Peso muerto piernas rígidas con barra</li>
                       <li className="blue-list-leg-exercise">Peso muerto piernas rígidas con mancuernas</li>
                       <li className="blue-list-leg-exercise">Peso Muerto Rumano</li>
                       <li className="blue-list-leg-exercise">Peso muerto rumano con mancuernas</li>
                       <li className="blue-list-leg-exercise">Puentes en suelo para gluteos</li>
                       <li className="blue-list-leg-exercise">Sentadilla con salto</li>
                       <li className="blue-list-leg-exercise">Sentadilla Zercher</li>
                       <li className="blue-list-leg-exercise">Sentadillas con mancuerna por encima de la cabeza</li>
                       <h5>Ejercicios de Gemelo</h5>
                       <li className="blue-list-leg-exercise">Curl de Tibiales</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelo a un pie</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelo en máquina sentado</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelos con barra sentado</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelos con mancuernas sentado</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelos de pie con barra</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelos de pie con mancuernas</li>
                       <li className="blue-list-leg-exercise">Elevación de gemelos en máquina hack</li>
                       <li className="blue-list-leg-exercise">Elevaciones de gemelo tipo burro</li>
                       <li className="blue-list-leg-exercise">Gemelo en máquina de pie</li>
                       <li className="blue-list-leg-exercise">Gemelo en prensa</li>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default LegExercises