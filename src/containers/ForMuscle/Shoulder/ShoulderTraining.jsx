import './ShoulderTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ShoulderTraining = () => {

    return (

        <Container className="shoulder-training">
            <Row className="first-section-shoulder">
                <Col className="body-shoulder-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Musculación, la guía definitiva</h1>
                    <br />
                    <Row className="icons-shoulder" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-shoulder" src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-hombros1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas para hombros</strong> son de las más solicitadas por los practicantes de culturismo debido a que el <strong>hombro</strong> suele ser uno de los músculos más retrasados.
                        </p>
                        <p>
                            Las <strong>rutinas de hombro</strong> deben componerse de <strong>ejercicios para hombro</strong> básicos, como los presses pesados para hombros, y también de <strong>ejercicios de aislamiento</strong>, como las elevaciones laterales.
                        </p>
                        <p>
                            Muscularmente hablando, el hombro está compuesto por un grupo muscular llamado deltoides, formado por tres cabezas; la anterior (o frontal), la media (o lateral) y la posterior (o trasera). Más detalles en <strong>Anatomía del hombro</strong>.
                        </p>
                        <p>
                            Estos entrenamientos no incluyen las series de <strong>calentamiento</strong>. Si no se indica lo contrario, debes <strong>calentamiento</strong> de 1′  a 1′ 30» entre series.
                        </p>
                        <Row className="square-shoulder">
                            <p className="title-square-shoulder">Contenidos</p>
                            <ul>
                                <li className="li-square-shoulder">1 Rutina de hombro para tamaño muscular</li>
                                <li>2 Rutina de pecho para principiantes</li>
                                <li>3 Rutina de hombro casera</li>
                                <li>4 Rutina de hombro de 15 minutos</li>
                                <li>5 Rutina de hombro prioridad en deltoide frontal</li>
                                <li>6 Rutina de hombro prioridad en deltoide medio y trapecio</li>
                                <li>7 Rutina de hombro en serie gigante*</li>
                                <li>8 Rutina de hombro para fuerza</li>
                                <li>9 Rutina de hombro para definición</li>
                                <li>10 Rutina de hombro para supercongestión</li>
                                <li>11 Rutinas de hombro especializadas</li>
                                <li>12 Consejos avanzados para tu entrenamiento de hombros</li>
                            </ul>
                        </Row>
                        <h3>Rutina de hombro para tamaño muscular</h3>
                        <p>
                            Rutina con ejercicios de probada eficacia con rangos de series y repeticiones con objetivos de hipertrofia. Simple y efectivo.
                        </p>
                        <table>
                            <thead>
                                <th colSpan="3" className="header-table-shoulder">Rutina de hombro para tamaño muscular</th>
                                <tr>
                                    <td className="center">Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Press militar con barra</td>
                                    <td>5</td>
                                    <td>6,6,8,10,12</td>
                                </tr>
                                <tr>
                                    <td>Remo con barra. de pie (Al mentón)</td>
                                    <td>5</td>
                                    <td>8,8,10,10,12</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones laterales</td>
                                    <td>4</td>
                                    <td>8,8,10,12</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones posteriores</td>
                                    <td>3</td>
                                    <td>8,10,12</td>
                                </tr>
                            </tbody>
                        </table>
                            <br />
                        <h3>Rutina de hombro para principiantes</h3>
                        <p>
                            Los principiantes deben comenzar por desarrollar la <strong>conexión músculo-mental</strong> y estos ejercicios son excelentes para dicho cometido. Este número moderado de series y repeticiones es más que suficiente para conseguir progresos.
                        </p>
                        <table>
                            <thead>
                                <th colSpan="3" className="header-table-shoulder">Rutina de hombro para principiantes</th>
                                <tr>
                                    <td className="center">Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Press militar en máquina</td>
                                    <td>3</td>
                                    <td>10,10,12</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones laterales en polea</td>
                                    <td>2</td>
                                    <td>10,10</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones frontales con barra</td>
                                    <td>2</td>
                                    <td>12,12</td>
                                </tr>
                                <tr>
                                    <td>Aperturas invertidas en máquina</td>
                                    <td>2</td>
                                    <td>12,15</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3>Rutina de hombro casera</h3>
                        <p>
                            Entrenar en casa tiene sus desventajas pero el hombro es el músculo más fácil de entrenar en nuestro hogar debido a que puedes machacarlo al máximo con el equipo de entrenamiento más básico.
                        </p>
                        <table>
                            <thead>
                                <th colSpan="3" className="header-table-shoulder">Rutina de hombro para hacer en casa</th>
                                <tr>
                                    <td className="center">Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Press Arnold</td>
                                    <td>4</td>
                                    <td>8,10,12,20</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones lateral sentado</td>
                                    <td>4</td>
                                    <td>10,12,12,20</td>
                                </tr>
                                <tr>
                                    <td>Remo al mentón con mancuernas</td>
                                    <td>4</td>
                                    <td>12,12,15,20</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones posteriores, sentado</td>
                                    <td>3</td>
                                    <td>12,15,15</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3>Rutina de hombro de 15 minutos</h3>
                        <p>
                            Entrenar un grupo muscular relativamente pequeño (cintura, gemelos, antebrazos) en 15 minutos no resulta complicado, pero trabajar los hombros en ese tiempo, un músculo de tamaño medio, es algo más complicado.
                        </p>
                        <p>
                            Sin embargo, nuestra rutina de 15 minutos facilita hacer 9 series con descansos de 30 segundos entre ellas.
                        </p>
                        <p>
                            Y lo más importante de todo, los tres ejercicios utilizan el mismo equipo (mancuernas y asiento con respaldo bajo), por lo que no hay que cambiar de posición. Las tres cabezas del hombro reciben así atención completa, mediante el uso de presses militares, elevaciones laterales y elevaciones para el deltoide posterior
                        </p>
                        <table>
                            <thead>
                                <th colSpan="3" className="header-table-shoulder">Rutina de hombro en 15 minutos</th>
                                <tr>
                                    <td className="center">Ejercicio</td>
                                    <td>Series</td>
                                    <td>Reps</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Press militar sentado con mancuernas</td>
                                    <td>3</td>
                                    <td>6,10,15</td>
                                </tr>
                                <tr>
                                    <td>Elevación lateral sentado</td>
                                    <td>3</td>
                                    <td>6,10,15</td>
                                </tr>
                                <tr>
                                    <td>Elevaciones posteriores sentado</td>
                                    <td>3</td>
                                    <td>6,10,15</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">*No descansar más de 30 segundos entre series</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h3>Consejos avanzados para tu entrenamiento de hombros</h3>
                        <p>
                            Los <strong>hombros</strong> constituyen uno de los grupos musculares más importantes de la anatomía
                            humana y en especial para el culturista. No solamente desde el punto de vista estético su relevancia es muy grande, sino también desde el ámbito funcional.
                        </p>
                        <p>
                            Desde el punto de vista <strong>estético</strong>,  los hombros desempeñan un papel esencial en configurar esa tan admirada forma en V del torso, porque cuando éstos están plenamente desarrollados aumentan en gran medida la amplitud de la parte superior del tronco, magnificando así la diferencia entre hombros y cintura.
                        </p>
                        <p>
                            Desde el punto de vista <strong>funcional</strong>, los hombros constituyen el punto sobre el que pivotan todos los ejercicios de la parte superior del tronco por lo tanto puede ser un factor limitante o bien un impulsor del desarrollo de la espalda, el pectoral y los brazos, porque esta articulación con una rotación de 360º es el <strong>eje de presión</strong> de la mayoría de ejercicios.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ShoulderTraining