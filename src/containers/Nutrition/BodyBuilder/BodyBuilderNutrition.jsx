import './BodyBuilderNutrition.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BodyBuilderNutrition = () => {

    return (

        <Container className="fitness-training">
            <Row className="first-section-fitness">
                <Col className="body-fitness-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Musculación, la guía definitiva</h1>
                    <i>Con nuestros consejos y técnicas dominarás el arte de la musculación para cambiar tu cuerpo.</i>
                    <Row className="icons-fitness" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-fitness" src="https://www.cambiatufisico.com/wp-content/uploads/musculacion5-696x392.jpg"></Image>
                    <section>
                        <p>
                            La <strong>musculación</strong> es una disciplina que requiere tiempo, dedicación y esfuerzo. Como su propio nombre indica, su objetivo es el <strong>desarrollo de los músculos.</strong>
                        </p>
                        <p>
                            En la actualidad, la práctica de la <strong>musculación</strong> es uno de los recursos más utilizados por todo tipo de personas ya sea para mejorar su físico, <a className="links-fitness" href="">ganar masa muscular</a>, <a className="links-fitness">perder peso</a> o simplemente como complemento para todo tipo de deportes.
                        </p>
                        <p>
                            Te adelantamos que el éxito del proceso de musculación depende de tres pilares básicos: La dieta, el entrenamiento con rutinas de gimnasio adecuadas y el descanso. Si cuidas estos tres pilares tu éxito a la hora de alcanzar tus objetivos está asegurado.
                        </p>
                        <Row className="square-fitness">
                            <p className="title-square-fitness">Contenidos</p>
                            <ul>
                                <li className="li-square-fitness">1 Los tres principios de la musculación</li>
                                <li>2 Musculación por grupos musculares</li>
                                <li>3 Selección de artículos de musculación</li>
                            </ul>
                        </Row>
                        <h3>Los tres principios de la musculación</h3>
                        <p>
                            En el entrenamiento de la fuerza y la masa muscular hay tres principios de entrenamiento especialmente importantes y que toda persona que inicia en las pesas debe conocer.
                        </p>
                        <p>
                            Estos tres principios se basan en el orden correcto al realizar los ejercicios, progresión de entrenamiento y recuperación adecuada.
                        </p>
                        <h5>Orden de los ejercicios</h5>
                        <p>
                            Según este principio, los músculos grandes deben ser ejercitados antes que los pequeños. La razón es muy simple: un músculo pequeño se fatiga antes y con mayor facilidad que uno grande.
                        </p>
                        <p>
                            Por consiguiente, si los músculos pequeños son ejercitados al principio de la sesión, pueden provocar una fatiga prematura general, impidiendo luego el óptimo rendimiento de los grupos musculares grandes.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BodyBuilderNutrition