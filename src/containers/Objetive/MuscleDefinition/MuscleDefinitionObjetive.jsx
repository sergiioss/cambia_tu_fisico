import './MuscleDefinitionObjetive.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const MuscleDefinitionObjetive = () => {

    return (

        <Container className="muscleDefinition-objetive">
            <Row className="first-section-muscleDefinition-objetive">
            <Breadcrumb></Breadcrumb>
                <Col className="body-muscleDefinition-objetive" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Definición muscular, como comer y entrenar para definir tus músculos</h1>
                <br />
                <Row className="icons-muscleDefinition-objetive" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-muscleDefinition-objetive" src="https://www.cambiatufisico.com/wp-content/uploads/definicion-muscular12-696x392.jpg.webp"></Image>
                <section>
                    <p>
                        El objetivo de definición muscular está en el punto de mira de todos aquellos que desean lucir un cuerpo «seco» libre de grasa y musculoso.
                    </p>
                    <p>
                        <strong>Definir</strong> los músculos se refiere a la capacidad de <strong>perder grasa corporal manteniendo la cantidad de masa muscular intacta</strong>.
                    </p>
                    <p>
                        Cuando hablamos de <strong>definición muscular</strong>, lo hacemos en referencia a una puesta a punto final y no a una verdadera pérdida de peso graso.
                    </p>
                    <p>
                        La definición la debemos entender como ese último esfuerzo que hacemos para conseguir el mejor resultado después de meses de entrenamiento y alimentación equilibrada. Con un periodo de unas ocho semanas podremos ver los resultados deseados.
                    </p>
                    <p>
                        En esta última fase resulta indispensable interactuar correctamente con el <strong>entrenamiento</strong> y, sobre todo, con la alimentación. Estos dos aspectos deben estar perfectamente organizados y coordinados.
                    </p>
                    <p>
                        <strong>Objetivos del periodo de definición:</strong>
                        <br />
                        <br />
                        <li className="li-muscleDefinition">Mantener elevado el ritmo metabólico. (las calorías que gastamos en estado de reposo)
                        </li>
                        <li className="li-muscleDefinition">
                            Vaciar las reservas de glucógeno (Hidratos de carbono que el músculo utiliza como combustible)
                        </li>
                        <li className="li-muscleDefinition">
                            Mantener la masa muscular.
                        </li>
                        <li className="li-muscleDefinition">
                            Inducir al organismo a consumir las últimas reservas de grasas.
                        </li>
                    </p>
                    <Row className="square-muscleDefinition-objetive">
                        <p className="title-square-muscleDefinition-objetive">Contenidos</p>
                        <ul>
                            <li className="li-square-muscleDefinition-objetive">1 Los fundamentos de la definición muscular</li>
                            <li>2 Cómo comer para definición muscular</li>
                            <li>3 Cómo entrenar para definición muscular</li>
                            <li>4 Ejercicio cardiovascular para definición muscular</li>
                            <li>5 Suplementos para definición muscular</li>
                            <li>6 Ejemplos de distribución de entrenamiento para definir</li>
                            <li>7 Otros artículos para definición muscular</li>
                        </ul>
                    </Row>
                    <h3>Los fundamentos de la definición muscular</h3>
                    <p>
                        Aunque desde los tiempos de la «edad dorada» del culturismo la definición muscular se ha asociado siempre con altas cantidades de <strong>ejercicio aeróbico, dieta estricta y entrenamiento ligero de altas repeticiones</strong>, las nuevas tendencias de entrenamiento demuestran que esto no es siempre así.
                    </p>
                    <Row className="img-muscleDefinition-objetive">
                        <Image src="https://www.cambiatufisico.com/wp-content/uploads/definicion-musculos.jpg"></Image>
                    </Row>
                    <p>
                        Muchos entrenadores de renombre ya incluyen <strong>entrenamientos pesados</strong> como rutinas de definición muscular, al parecer con mejores resultados que con las típicas rutinas de definición basadas en <strong>superseries</strong> y tiempos de recuperación bajos.
                    </p>
                    <p>
                        No obstante, cada cuerpo responde de forma diferente a los estímulos, por ello en esta sección os presentaremos todo tipo de estrategias para definir, tanto tradicionales como novedosas.
                    </p>
                    <p>
                        Algunas de las diferentes estrategias para <strong>definición muscular</strong> se basan en:
                    </p>
                    <li className="li-muscleDefinition">
                        Entrenamiento con muchas repeticiones con cargas más ligeras
                    </li>
                    <li className="li-muscleDefinition">
                        Entrenamiento de liberación de ácido láctico
                    </li>
                    <li className="li-muscleDefinition">
                        Levantamiento de altas cargas para mantenimiento de la masa muscular
                    </li>
                    <p>
                        Además, existen muchos detalles a tener en cuenta para maximizar la definición muscular y llegar a tener un nivel de grasa corporal bajo.
                    </p>
                    <p>
                        En nuestra mega artículo para quemar grasa tienes muchos consejos que te ayudarán a eliminar esa grasa almacenada en tus michelines.
                    </p>
                    <p>
                        También tenemos una sección especialmente dedicada a la <strong>Pérdida de Peso</strong>. Con toda esta información ya tienes todo el arsenal que necesitas para verte más delgado y sentirte mejor con un perfecto estado de salud.
                    </p>
                </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default MuscleDefinitionObjetive