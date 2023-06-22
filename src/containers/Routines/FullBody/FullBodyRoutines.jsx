import './FullBodyRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const FullBodyRoutines = () => {

    return (

        <Container className="fullBody-routine-training">
            <Row className="first-section-fullBody-routine">
                <Col className="body-fullBody-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas Full Body</h1>
                    <i>Trabajar el cuerpo completo funciona... sal de tu rutina de siempre y obtén verdaderos resultados.</i>
                    <Row className="icons-fullBody-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-fullBody-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-full-body1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas Full-Body</strong> o también llamadas rutinas de cuerpo entero son <strong>rutinas de entrenamiento</strong> donde se trabaja todo el cuerpo en una sola sesión.
                        </p>
                        <p>
                            Trabajar todo tu cuerpo en una sola sesión no sólo es desafiante, sino una manera extremadamente efectiva para <strong>ganar músculo</strong>, fuerza e incluso quemar grasa en el proceso.
                        </p>
                        <p>
                            Una <strong>rutina de cuerpo completo o rutina full-body</strong> te hará entrar y salir del gimnasio en menos de una hora, acelerará tu metabolismo por las próximas 48 horas y, luego de un mes de hacerla, notarás mejoras de fuerza y en tu físico.
                        </p>
                        <Row className="square-fullBody-routine">
                            <p className="title-square-fullBody-routine">Contenidos</p>
                            <ul>
                                <li className="li-square-fullBody-routine">1 Selección de ejercicios para rutinas full-body</li>
                                <li>2 Rutina full body para principiantes</li>
                                <li>3 Rutina full body de nivel intermedio</li>
                                <li>4 Rutina full body avanzada</li>
                                <li>5 Otras rutinas full-body</li>
                            </ul>
                        </Row>
                        <h5>Selección de ejercicios para rutinas full-body</h5>
                        <p>
                            Cuando se entrena con una <strong>rutina Full-body</strong>, has de ser sabio con los ejercicios que eliges y cualquier reparto de partes corporales puede ser efectivo si está compuesto de <strong>ejercicios básicos.</strong>
                        </p>
                        <Row className="img-fullBody-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-full-body2.jpg"></Image>
                            <i>
                                Tanto hombres como mujeres se pueden beneficiar enormemente de las rutinas full-body. No tengas miedo a hacer algo diferente.
                            </i>
                        </Row>
                        <h5>Más respuesta hormonal al trabajar el cuerpo entero</h5>
                        <p>
                            Las 3 hormonas más importantes para ganar músculo son la testosterona, el factor crecimiento de la insulina (IGF-1) y la hormona de crecimiento.
                        </p>
                        <p>
                            Cuando la hormona de crecimiento aumenta, manda una señal al cuerpo para que produzca más IGF-1, que es una potente hormona anabólica.
                        </p>
                        <p>
                            Las <strong>rutinas full-body</strong> crean una intensa demanda para aumentar los niveles de hormonas anabólicas como la hormona del crecimiento. Mucho más alto que los entrenamientos que sólo trabajan unos pocos grupos musculares.
                        </p>
                        <h5>Más frecuencia de entrenamiento</h5>
                        <p>
                            Con un <strong>entrenamiento full-body</strong>, cada uno de los grupos musculares primarios se estimula al menos 3 veces por semana, en contra a lo que sucede con una rutina dividida en la que suele entrenarse cada músculo una vez por semana.
                        </p>
                        <h3>Rutina full body para principiantes</h3>
                        <p>
                            Todo el mundo tiene que empezar en alguna parte. Si nunca has <strong>entrenado con pesas</strong>, necesitas una rutina para preparar tus <strong>músculos</strong> para entrenamientos más intensos.
                        </p>
                        <Row className="img-fullBody-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-full-body2.jpg"></Image>
                            <i>
                                En las rutinas full body es especialmente importante realizar ejercicios multiarticulares pero siempre con una ejecución perfecta.
                            </i>
                        </Row>
                        <h5>Semanas 1-6: Circuitos de Entrenamiento de Cuerpo Entero</h5>
                        <p>
                            Completa la siguiente tabla en dos días no consecutivos por semana.
                        </p>
                        <p>
                            Durante las primeras tres semanas, hacer cada ejercicio de una serie de 15 repeticiones: durante las últimas tres semanas, hacer dos series de 12 repeticiones de partes del cuerpo indicada (con un peso un poco más pesado en todas las series).
                        </p>
                        <h5>Semanas 1 a 3</h5>
                        <table>
                            <thead>
                                <tr>
                                    <td>Parte del Cuerpo</td>
                                    <td>Ejercicio</td>
                                    <td>Sets</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cuádriceps/Gluteos</td>
                                    <td>Prensa inclinada</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Bíceps Femoral</td>
                                    <td>Femoral tumbado en máquina</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Espalda Superior</td>
                                    <td>Remo con Cable Sentado</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Pecho</td>
                                    <td>Pecho con barra en banco Plano</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Hombros</td>
                                    <td>Press Hombro con Mancuernas</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Trapecios</td>
                                    <td>Encogiminetos con Mancuerna</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Tríceps</td>
                                    <td>Jalones con barra recta</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Bíceps</td>
                                    <td>Bíceps con Barra</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Espalda Baja</td>
                                    <td>Hiperextensiones en banco</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Gemelo</td>
                                    <td>Gemelo en máquina sentado</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Antebrazo</td>
                                    <td>Encogimiento de muñeca con Barra</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>Abdominales</td>
                                    <td>Encogimientos</td>
                                    <td>1</td>
                                    <td>15</td>
                                </tr>
                            </tbody>
                        </table>
                        <h5>Semanas 4 a 6</h5>
                        <table>
                            <thead>
                                <tr>
                                    <td>Parte del Cuerpo</td>
                                    <td>Ejercicio</td>
                                    <td>Sets</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cuádriceps/Gluteos</td>
                                    <td>Prensa inclinada</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Bíceps Femoral</td>
                                    <td>Femoral tumbado en máquina</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Espalda Superior</td>
                                    <td>Remo con Cable Sentado</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Pecho</td>
                                    <td>Pecho con barra en banco Plano</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Hombros</td>
                                    <td>Press Hombro con Mancuernas</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Trapecios</td>
                                    <td>Encogiminetos con Mancuerna</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Tríceps</td>
                                    <td>Jalones con barra recta</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Bíceps</td>
                                    <td>Bíceps con Barra</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Espalda Baja</td>
                                    <td>Hiperextensiones en banco</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Gemelo</td>
                                    <td>Gemelo en máquina sentado</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Antebrazo</td>
                                    <td>Encogimiento de muñeca con Barra</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Abdominales</td>
                                    <td>Encogimientos</td>
                                    <td>2</td>
                                    <td>12</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default FullBodyRoutines