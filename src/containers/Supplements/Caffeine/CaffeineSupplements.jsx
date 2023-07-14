import './CaffeineSupplements.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const CaffeineSupplements = () => {

    return (

        <Container className="caffeine-supplements">
            <Row className="first-section-caffeine-supplements">
            <Breadcrumb></Breadcrumb>
                <Col className="body-caffeine-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Cafeína, el suplemento que potencia tus entrenamientos</h1>
                    <br />
                    <Row className="icons-caffeine-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-caffeine-supplements" src="https://www.cambiatufisico.com/wp-content/uploads/cafeina5-696x392.jpg"></Image>
                    <section>
                        <p>
                            La cafeína proviene del café pero actualmente no es necesario tomarlo para beneficiarnos de sus propiedades.
                        </p>
                        <p>
                            Tiene una acción más <strong>farmacológica</strong> que nutritiva, por eso se le considera una ayuda ergogénica más que un nutriente.
                        </p>
                        <p>
                            Que la <strong>cafeína</strong> aumenta el rendimiento físico y mental es un hecho demostrado. De hecho hasta hace poco estaba dentro de la lista de sustancias dopantes a partir de cierta concentración.
                        </p>
                        <p>
                            En la actualidad, la <strong>cafeína</strong> está despenalizada y los estudios demuestran su eficacia como estimulante, que se encuentra de forma natural en el <strong>café</strong>, té, guaraná y cacao entre otros.
                        </p>
                        <p className="blue-text-caffeine-supplements">
                            ¿CAFÉ O CAFEÍNA PURA?
                        </p>
                        <p>
                            <strong>El café no es tan potente como la cafeína en su forma pura.</strong>
                        </p>
                        <p>
                            Las investigaciones han demostrado que, si bien el <strong>café</strong> tiende a mejorar el rendimiento, no es capaz de hacerlo tan bien como la cafeína.
                        </p>
                        <p>
                            Al parecer, la explicación es que, entre los cientos de moléculas diferentes que éste contiene, algunas presentan un efecto inhibidor de la acción estimulante de la cafeína.
                        </p>
                        <Row className="square-caffeine-supplements">
                            <p className="title-square-caffeine-supplements">Contenidos</p>
                            <ul>
                                <li className="li-square-caffeine-supplements">1 Efecto de la cafeína en nuestro cuerpo</li>
                                <li>2 Cafeína en el entrenamiento</li>
                                <li>3 Efectos de la cafeína durante el ejercicio</li>
                                <li>4 Cómo tomar la cafeína</li>
                                <li>5 Cafeína y dopaje</li>
                                <li>6 Los peligros del exceso de cafeína</li>
                                <li>7 La dosis mortal de cafeína</li>
                                <li>8 Cafeína y niveles de testosterona</li>
                            </ul>
                        </Row>
                        <h3>Efecto de la cafeína en nuestro cuerpo</h3>
                        <p>
                            El efecto no es otro que <strong>actuar sobre el sistema nervioso central para aumentar la recepción de sensaciones y la concentración,</strong> lo que es una ventaja en muchos deportes. Pero es sobre todo su efecto sobre la <strong>liberación de adrenalina</strong> lo que hace aumentar el rendimiento..
                        </p>
                        <p>
                            La <strong>cafeína</strong> es bastante utilizada en el ámbito deportivo por sus efectos ergogénicos:
                        </p>
                        <li>
                            Aumenta la oxidación de los ácidos grasos en el tejido adiposo, al estimular la secreción de adrenalina. Así usas más proporción de grasa como energía, ahorrando glucógeno y retrasando la aparición de la fatiga, un efecto interesantísimo para deportistas de fondo.
                        </li>
                        <li>
                            También mejora el rendimiento y la fuerza en ejercicios cortos que duren hasta cinco minutos a intensidades elevadas.
                        </li>
                        <li>
                            Estimula la actividad cerebral, produciendo euforia mental, una menor percepción de la fatiga y un mayor estado de alerta.
                        </li>
                        <li>
                            Aumenta el metabolismo basal, acelerando el ritmo cardiaco y logrando un mayor consumo energético, por lo cual es aprovechada la cafeína también como quemagrasas.
                        </li>
                        <li>
                            Se postula que también pudiera afectar al transporte y liberación de calcio, permitiendo una contracción muscular más efectiva.
                        </li>
                        <br />
                        <p>
                            Durante años, el <strong>Comité Olímpico Internacional</strong> (COI) la incluyó entre las sustancias «de uso restringido», es decir, sólo se consideraban como <strong>dopantes</strong> cantidades que excedieran los límites marcados. Esto ha quedado derogado y la cafeína es en la actualidad un compuesto <strong>legal</strong>.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default CaffeineSupplements