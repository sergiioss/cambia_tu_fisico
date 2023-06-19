import './BackTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BackTraining = () => {

    return (

        <Container className="back-training">
            <Row className="first-section-back">
                <Col className="body-back-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas y entrenamiento de la espalda</h1>
                    <br />
                    <Row className="icons-back" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-back" src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-espalda1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las rutinas de espalda son los entrenamientos más extenuantes con permiso del día de piernas. La espalda es un grupo muscular grande y requiere de un gran esfuerzo para una total movilización y trabajo de sus músculos
                        </p>
                        <p>
                            Tener una espalda amplia y musculada otorgará a tu físico esa proporción de «línea V» tan buscada por los culturistas y las personas aficionadas al back. El culturismo se basa en las proporciones, y una espalda estrecha hará que el resto de tu físico no parezca a la altura.
                        </p>
                        <p>
                            Para que las rutinas de espalda sean efectivas necesitas una buena planificación y variación en las mismas, con los mejores ejercicios de espalda disponibles en tu arsenal. Si buscas rutinas de espalda efectivas estás en el sitio indicado.
                        </p>
                        <Row className="square-back">
                            <p className="title-square-back">Contenidos</p>
                            <ul>
                                <li className="li-square-back">1 Como optimizar tus rutinas de espalda</li>
                                <li>2 Rutina de espalda para volumen general</li>
                                <li>3 Rutina de espalda para principiantes</li>
                                <li>4 Rutina Casera (solo mancuernas)</li>
                                <li>5 Rutina de 15 minutos</li>
                                <li>6 Rutina para prioridad en dorsal inferior</li>
                                <li>7 Rutina para prioridad de dorsal alto</li>
                                <li>8 Entrenamiento en serie gigante*</li>
                                <li>9 Rutina para fuerza</li>
                                <li>10 Rutina para definición</li>
                                <li>11 Rutina para super-congestión</li>
                                <li>12 Rutinas de espalda especializadas</li>
                                <li>13 Consejos avanzados para tu entrenamiento de espalda</li>
                            </ul>
                        </Row>
                        <h3>Como optimizar tus rutinas de espalda</h3>
                        <p>
                            En las <strong>rutinas de espalda</strong> se deben utilizar ejercicios orientados a la <strong>amplitud</strong>, como las <strong>dominadas</strong> y los jalones pero también ejercicios más orientados a la densidad como los remos.
                        </p>
                        <p>
                            En una misma rutina de espalda puedes <strong>combinar</strong> ambos tipos de ejercicios o puedes trabajar la espalda dos veces a la semana trabajando un día la amplitud y otro día la densidad, la elección es tuya según tu objetivo y capacidad de entrenamiento.
                        </p>
                        <p>
                            La espalda es además uno de los grupos musculares más difíciles de congestionar por los <strong>principiantes</strong>, debido a que debe realizar un <strong>intervalo completo de recorrido</strong> para estirar y contraer el músculo correctamente.
                        </p>
                        <p>
                            En este sentido, tener una conexión músculo-mental es muy importante para tener un entrenamiento de espalda efectivo. Para ello necesitarás tiempo, pero te aseguramos que en unos meses el entrenar tu espalda será de tus días favoritos de entrenamiento.
                        </p>
                        <p>
                        <strong>Nota</strong>: <i>Los entrenamientos aquí mostrados no incluyen las series de calentamiento. A menos que se diga lo contrario, descansad de 60 a 90 segundos entre cada serie.</i>
                        </p>
                        <h3>Rutina de espalda para volumen general</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peso Muerto</td>
                                    <td>5</td>
                                    <td>12,10,8,6,6</td>
                                </tr>
                                <tr>
                                    <td>Remo con barra</td>
                                    <td>5</td>
                                    <td>12,10,10,8,8</td>
                                </tr>
                                <tr>
                                    <td>Remo sentado en polea</td>
                                    <td>4</td>
                                    <td>12,10,8,8</td>
                                </tr>
                                <tr>
                                    <td>Jalones frontales</td>
                                    <td>3</td>
                                    <td>12,10,8</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Rutina de espalda para principiantes</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jalones frontales</td>
                                    <td>4</td>
                                    <td>12,12,10,10</td>
                                </tr>
                                <tr>
                                    <td>Remo en máquina</td>
                                    <td>3</td>
                                    <td>10,10,10</td>
                                </tr>
                                <tr>
                                    <td>Remo sentado en polea</td>
                                    <td>3</td>
                                    <td>12,12,12</td>
                                </tr>
                                <tr>
                                    <td>Remo con mancuerna a una mano</td>
                                    <td>3</td>
                                    <td>10,10,10</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Rutina Casera (solo mancuernas)</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Remo con mancuerna a una mantenimiento</td>
                                    <td>4</td>
                                    <td>20,12,10,8</td>
                                </tr>
                                <tr>
                                    <td>Remo con mancuernas agarre invertido</td>
                                    <td>4</td>
                                    <td>20,12,10,10</td>
                                </tr>
                                <tr>
                                    <td>Pull over con mancuerna</td>
                                    <td>4</td>
                                    <td>20,12,8,8</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Rutina de 15 minutos</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jalones al pecho agarre cerrado</td>
                                    <td>3</td>
                                    <td>15,10,6</td>
                                </tr>
                                <tr>
                                    <td>Jalones en máquina*</td>
                                    <td>3</td>
                                    <td>15,10,6</td>
                                </tr>
                                <tr>
                                    <td>Remo sentado en polea</td>
                                    <td>3</td>
                                    <td>15,10,6</td>
                                </tr>
                                <tr>
                                    *No descansar más de 30 segundos entre series.
                                    <td className="noneBorder"></td>
                                    <td className="noneBorder"></td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Rutina para prioridad en dorsal inferior</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Remo con barra y agarre invertido</td>
                                    <td>4</td>
                                    <td>12,12,10,10</td>
                                </tr>
                                <tr>
                                    <td>Jalones polea con agarre cerrado</td>
                                    <td>4</td>
                                    <td>10,10,8,8</td>
                                </tr>
                                <tr>
                                    <td>Jalones en polea con brazos estirados</td>
                                    <td>3</td>
                                    <td>15,12,10</td>
                                </tr>
                                <tr>
                                    <td>Dominadas</td>
                                    <td>3</td>
                                    <td>Hasta el fallo</td>
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

export default BackTraining