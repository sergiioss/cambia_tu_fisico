import './BeginnersRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const BeginnersRoutines = () => {

    return (

        <Container className="beginners-routine-training">
            <Row className="first-section-beginners-routine">
            <Breadcrumb></Breadcrumb>
                <Col className="body-beginners-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de pesas para principiantes</h1>
                    <br />
                    <Row className="icons-beginners-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-beginners-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-principiantes-696x392.jpg"></Image>
                    <section>
                        <p>
                            Entre los motivos por los cuáles las personas se <strong>inscriben en un gimnasio</strong> está el que su apariencia física no les agrade y quieran verse mejor. Pero un beneficio adicional, es que podemos mejorar nuestra <strong>salud</strong> y sentirnos mejor y con <strong>más energía</strong>.
                        </p>
                        <p>
                            Como principiante debes asistir al gimnasio <strong>solo tres veces</strong> por semana durante los primeros dos o tres meses, no hay mejor camino al fracaso que asistir todos los días.
                        </p>
                        <p>
                            <strong>La alimentación es la base</strong> en este deporte, cualquiera puede entrenar duro por una hora y media 3 o 4 veces por semana. La alimentación significa hasta un 80% de los resultados que observes en lo referente a obtener tono muscular, fuerza, hipertrofia o pérdida de grasa.
                        </p>
                        <p>
                            Eventualmente tendrás que estar dispuesto a comer <strong>5 veces al día</strong>, y olvidarte de los hábitos alimenticios que la gente “normal” sigue. Si no estás dispuesto a seguir un régimen alimenticio, olvídate de obtener resultados en forma rápida.
                        </p>
                        <p>
                            <strong>Tienes más rutinas, algunas tanto para principiantes como para avanzados en nuestras secciones de rutinas de volumen, rutinas de definición y rutinas de fuerza.</strong>
                        </p>
                        <p>
                            Las <strong>rutinas full body</strong> también han demostrado tener una efectividad superior para <strong>ganar masa muscular</strong> que las rutinas divididas en los principiantes.
                        </p>
                        <h3>Rutina para principiantes 100% efectiva</h3>
                        <p>
                            Rutina destinada a conseguir de una manera rápida y segura una base de fuerza y masa muscular imprescindibles para todo novato que se inicie en el mundo de las pesas.
                        </p>
                        <p>
                            A medida que se progresa, irás haciendo tres entrenamientos consecutivos compuestas por diferentes ejercicios que van pasando desde los movimientos más complejos (aquellos que utilizan más músculos y articulaciones), hasta los más simples.
                        </p>
                        <p>
                            Otra de las claves de esta <strong>rutina</strong> reside en la aplicación del <strong>principio de sobrecarga</strong>; hay que escoger los pesos basándonos en el número de repeticiones previsto. Por ejemplo, en el primer mes si podemos hacer menos de 15 repeticiones es que estamos utilizando kilajes excesivos y es necesario rebajarlos. Si superamos ese número, se debe a que los pesos elegidos resultan demasiado bajos.
                        </p>
                        <p>
                            Los <strong>kilajes</strong> deben empezar a incrementarse casi de inmediato durante el primer mes aunque las repeticiones sean las mismas.
                        </p>
                        <p>
                            Los dos días de <strong>aerobios de alta intensidad</strong> prescritos en el programa puede ser que sea menos de lo que hagáis ahora, pero esto es así porque permite aumentar la intensidad del programa.
                        </p>
                        <p>
                            Te recordamos lo que indicamos en otras secciones de la página, no importa tanto el peso con que trabajes como el <strong>estilo estricto</strong> al realizar el ejercicio.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio DÍA 1.</td>
                                    <td>Series</td>
                                    <td>Rep</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sentadilla con barra</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Remo con barra</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Press en banco inclinado</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Press militar</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Curl de bíceps con barra</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Jalones de tríceps en polea</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Elevación de talones de pie</td>
                                    <td>2-3-3-4</td>
                                    <td>15-20-20-20</td>
                                </tr>
                                <tr>
                                    <td>Encogimientos abdominales</td>
                                    <td>2-3-3-3</td>
                                    <td>15-15-20-20</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr colSpan="3">
                                    <td >Ejercicio DÍA 2.</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Aerobicos</strong>: 30 a 60 minutos en una bicicleta estática, trabajando entre el 65% y el 85% de vuestras pulsaciones máximas.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio DÍA 3.</td>
                                    <td>Series</td>
                                    <td>Rep</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Prensa</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Remo sentado en polea(remo gironda)</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Press de banca con barra</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Remo con barra de pie</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Curl de bíceps Scott</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Patada trasera tríceps</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Encogimientos abdominales</td>
                                    <td>2-3-3-3</td>
                                    <td>15-15-20-20</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr colSpan="3">
                                    <td >Ejercicio DÍA 4.</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Aerobicos</strong>: 45 minutos en bicicleta estática, trabajando al 85% de vuestras máximas pulsaciones.</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio DÍA 5.</td>
                                    <td>Series</td>
                                    <td>Rep</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Extension de piernas</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Flexión femoral acostado</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Jalones frontales con agarre abierto</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Aperturas con mancuernas</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones laterales</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Bíceps banco incl. con mancuernas</td>
                                    <td>2-3-3-4</td>
                                    <td>15-12-15-12</td>
                                </tr>
                                <tr>
                                    <td>Extensión de tríceps</td>
                                    <td>2-3-3-3</td>
                                    <td>15-20-20-20</td>
                                </tr>
                                <tr>
                                    <td>Elevación de talones de pie</td>
                                    <td>2-3-3-3</td>
                                    <td>15-20-20-20</td>
                                </tr>
                                <tr>
                                    <td>Encogimientos abdominales</td>
                                    <td>2-3-3-3</td>
                                    <td>15-15-20-20</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Descansad lo mínimo posible (entre 30 y 45 segundos) entre series y ejercicios. Todos los entrenamientos con pesas deben comenzar con 10 minutos de calentamiento de bicicleta estática.
                        </p>
                        <p>
                            Para determinar tus pulsaciones máximas, con respeto al trabajo aerobio: 220 – tu edad
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BeginnersRoutines