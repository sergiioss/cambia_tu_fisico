import './HomeRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const HomeRoutines = () => {

    return (

        <Container className="home-routine-training">
            <Row className="first-section-home-routine">
            <Breadcrumb></Breadcrumb>
                <Col className="body-home-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de pesas y ejercicios para hacer en casa</h1>
                    <br />
                    <Row className="icons-home-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-home-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-caseras-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas de pesas en casa</strong> resultan ideales para aquellas personas que por diversas razones no pueden ir a un gimnasio, ya sea por tiempo (aunque es fácil encontrar el tiempo si de verdad se desea), dinero o por excesiva lejanía a un centro de fitness.
                        </p>
                        <p>
                            Aunque <strong>entrenando en casa</strong> no tenemos a nuestra disposición una variedad de aparatos tan amplia como en un gimnasio, esto no significa que no podemos alcanzar unos buenos progresos tanto en <strong>masa muscular</strong> como en <strong>pérdida de grasa</strong>.
                        </p>
                        <Row className="box-biceps-parrafo">
                            <p className="biceps-training-square">
                                Revisa nuestro artículo de <strong className="title-red-biceps-square">Ejercicios con Bandas Elásticas</strong>. Una estupenda opción para ejercitarte en tu propia casa a bajo coste. También te recomendamos el mejor <strong className="title-red-biceps-square">equipamiento para entrenar en casa</strong>.
                                <br />
                            </p>
                        </Row>
                        <Row className="square-home-routine">
                            <p className="title-square-home-routine">Contenidos</p>
                            <ul>
                                <li className="li-square-home-routine">1 Rutina de ejercicios en casa de tres días</li>
                                <li>2 Rutina de entrenamiento casera de 4 días</li>
                                <li>3 Rutina de ejercicios en casa con superseries</li>
                                <li>4 Rutina full-body para hacer en casa</li>
                                <li>5 Rutina con barra para todo el cuerpo</li>
                                <li>6 Rutina con mancuernas para todo el cuerpo</li>
                                <li>7 Rutina para todo el cuerpo usando bandas elásticas</li>
                                <li>8 Rutina para el torso solo con mancuernas</li>
                                <li>9 Rutina de piernas solo con barra</li>
                                <li>10 Solo «Tirón» rutina de bíceps+espalda</li>
                                <li>11 Rutina de flexión en paralelas: Pecho + Tríceps</li>
                                <li>12 Rutina de pecho solo a base de flexiones</li>
                                <li>13 Conclusiones</li>
                            </ul>
                        </Row>
                        <h3>Rutina de ejercicios en casa de tres días</h3>
                        <p>
                            Esta <strong>rutina de volumen</strong> de tres días por semana puede hacerse en casa o en el gimnasio. La hemos creado con ejercicios valiosos, y te podemos decir que útiles de verdad.
                        </p>
                        <Row className="img-home-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/pesas-en-casa.jpg"></Image>
                        </Row>
                        <p>
                            Y lo mejor de todo, es que proporcionará a tu cuerpo el impulso que necesita para desarrollarse sin tener que dedicar tu existencia al <strong>entrenamiento</strong>.
                        </p>
                        <p>
                            Hemos construido la rutina sobre un ciclo de un mes en el que bajas las repeticiones e incrementas el peso a medida que pasan las semanas.
                        </p>
                        <p>
                            Puedes también seguir una dirección más acelerada, si prefieres entrenar 4 ó 5 veces por semana en vez de 3. Por ejemplo, tú entrenas lunes, martes y miércoles, y luego el viernes empiezas con el entrenamiento uno.
                        </p>
                        <p>
                            Si escoges este camino, asegúrate de adaptar los cambios del esquema de repeticiones a tu programa, para que puedas completar tu ciclo de cuatro semanas antes de que termine el mes.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <td colSpan="4">Entrenamiento con mancuernas</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="subtitle-table-home">Lunes: Piernas y abdominales</td>
                                </tr>
                                <tr>
                                    <td className="header-table-home">Ejercicio</td>
                                    <td className="header-table-home-center">Semana 1</td>
                                    <td className="header-table-home-center">Semana 2</td>
                                    <td className="header-table-home-center">Semana 3</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sentadilla</td>
                                    <td>3×10-12*</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Peso muerto rumano</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Tijera Doble(atrás y adelante)</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Sentadilla Sumo</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Elevación de talones de pie</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Rodillas arriba (con mancuerna entre los pies)</td>
                                    <td>3×12-15</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                </tr>
                                <tr>
                                    <td>Encogimientos para oblicuos</td>
                                    <td>3×20</td>
                                    <td>3×20</td>
                                    <td>3×20</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="subtitle-table-home">Miércoles: hombros y brazos</td>
                                </tr>
                                <tr>
                                    <td>Press Arnold</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones laterales</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Pájaros con mancuernas</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>E×tensiones a un brazo sobre la cabeza</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Curl de bíceps en banco inclinado</td>
                                    <td>3×10-12</td>
                                    <td>3×8-12</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Fondos entre bancos</td>
                                    <td>3×10-12</td>
                                    <td>3×8-12</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Curl de bíceps agarre martillo</td>
                                    <td>3×10-12</td>
                                    <td>3×8-12</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="subtitle-table-home">Viernes: Pecho y Espalda</td>
                                </tr> 
                                <tr>
                                    <td>Press inclinado</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Remo con mancuerna a una mano</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Press de banca</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Remo con mancuernas en banco inclinado</td>
                                    <td>3×10-12</td>
                                    <td>3×8-10</td>
                                    <td>3×6-8</td>
                                </tr>
                                <tr>
                                    <td>Aperturas en banco inclinado</td>
                                    <td>3×10-12</td>
                                    <td>3×8-12</td>
                                    <td>3×6-8</td>
                                </tr> 
                                <tr>
                                    <td>Pull-over</td>
                                    <td>3×10-12</td>
                                    <td>3×8-12</td>
                                    <td>3×6-8</td>
                                </tr>    
                            </tbody>
                        </table>    
                        <p>
                            *3 x 10-12 significa tres series de 10 a 12 repeticiones.
                        </p>    
                        <p>
                            Al final del <strong>ciclo</strong>, puedes empezar de nuevo el programa, cambiando quizás algunos de los ejercicios para añadir variedad.
                        </p>
                        <p>
                            Sin embargo, el sistema es lo bastante sólido para poder utilizarlo durante meses, siempre que te vayas fortaleciendo y hagas <strong>progresos</strong> físicos.
                        </p>
                        <p>
                            ¿Ya estás convencido? Perfecto, basta de charla. Vete a entrenar.
                        </p>
                        <h3>Rutina de entrenamiento casera de 4 días</h3>
                        <p>
                            Actualmente muchas personas tienen montado un verdadero <strong>gimnasio</strong> en casa, con bancos, multiestación, jaula de potencia, barra de dominadas… pero <i>¿qué pasa si dispones de un equipo mucho más limitado?</i>
                        </p>
                        <Row className="img-home-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-en-casa.jpg"></Image>
                        </Row>
                        <p>
                            Esta rutina tiene como objetivo solventar este problema y está dirigida a aquellos que tienen un equipo  básico de musculación en casa y quieren mejorar su nivel muscular.
                        </p>
                        <p>
                            El objetivo de esta rutina de <strong>entrenamiento casero</strong> es ganar volumen muscular.
                        </p>
                        <p>
                            El equipo necesario para realizar esta rutina en casa es:
                        </p>
                        <li><strong>Mancuernas, Barra y Discos de varios kilajes diferentes</strong></li>
                        <li><strong>Un banco reclinable, Una banca (no imprescindible)</strong></li>
                        <li><strong>Aparato de cardio (ya sea bicicleta, elíptica, cinta…) o irte a correr a la calle</strong></li>
                        <br />
                        <p>
                            La rutina está pensada para 3 días de entrenamiento semanales que son Lunes, Miércoles y Viernes.
                        </p>
                        <p>
                            Si ves que este volumen de trabajo es insuficiente para ti prueba a realizar la versión de 4 días con el día 4 opcional donde repites pecho y espalda que son Lunes, Martes, Jueves y Viernes.
                        </p>
                        <p>
                            Después de cada entrenamiento realizar la siguiente rutina de abdominales y 25 – 30 minutos de ejercicio aeróbico
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default HomeRoutines