import './ForearmExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ForearmExercises = () => {

    return (

        <Container className="forearm-exercise-training">
            <Row className="first-section-forearm-exercise">
                <Col className="body-forearm-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Antebrazo</h1>
                    <br />
                    <Row className="icons-forearm-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-antebrazo-696x392.jpg"></Image>
                    <section>
                        <p>
                            En la mayoría de las rutinas que llevamos a cabo los <strong>antebrazos</strong> suele ser un grupo muscular que casi nunca trabajamos.
                        </p>
                        <p>
                            Si que es cierto que son músculos complementarios que apoyan a otros como los <strong>bíceps</strong> y que se trabajan a la vez que éstos de forma indirecta; pero no es suficiente, ya que deben ejercitarse como otro músculo cualquiera si queremos desarrollarlos adecuadamente.
                        </p>
                        <p>
                            Además, mejorar la <strong>fuerza</strong> de nuestros antebrazos nos será útil durante el entrenamiento de otros grupos musculares como en los <strong>ejercicios de espalda.</strong>
                        </p>
                        <Row className="square-forearm-exercise">
                            <p className="title-square-forearm-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-forearm-exercise">1 Como realizar los ejercicios de antebrazo</li>
                                <li>2 Ejercicios de antebrazo con mancuernas</li>
                                <li>3 Ejercicios de antebrazo con barra</li>
                                <li>4 Ejercicios de antebrazo con polea y otros</li>
                            </ul>
                        </Row>
                        <h3>Como realizar los ejercicios de antebrazo</h3>
                        <p>
                            Los <strong>ejercicios</strong> de antebrazo deben ser <strong>simples y sencillos</strong>. Las series muy repetitivas no son aconsejables, pues son músculos pequeños que no pueden aguantar demasiada presión. Es por esto que una <strong>excesiva carga</strong> sobre este grupo muscular es contraproducente.
                        </p>
                        <p>
                            La intensidad no debe ser excesiva ya que una <strong>sobrecarga en este grupo muscular puede derivar en una tendinitis</strong> que nos impida llevar a cabo el entrenamiento.
                        </p>
                        <p>
                            Los ejercicios de antebrazo <strong>deben realizarse suavemente</strong>. Lo ideal es llevar a cabo de uno a dos ejercicios con cuatro series de 10, 8, 6 y 6 repeticiones aumentando el peso progresivamente, si lo que queremos es conseguir más volumen.
                        </p>
                        <h3>Ejercicios de antebrazo con mancuernas</h3>
                        <p>
                            Los antebrazos son músculos muy sencillos de <strong>entrenar con mancuernas</strong> ya que no necesitas ningún tipo de equipamiento adicional.
                        </p>
                        <h5>Curls invertidos con mancuernas de pie</h5>
                        <p>
                            Realizar este ejercicio con una mancuerna cada vez de forma <strong>alterna</strong> o bien de forma <strong>simultanea</strong> como en la foto.
                        </p>
                        <p>
                            Para implicar más al <strong>braquial anterior</strong>, al elevar el peso volver la muñeca hacia adentro de tal forma que al final de la repetición las palmas estén una hacia la otra como con el curl en martillo.
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curls-invertidos-con-mancuernas-de-pie.jpg"></Image>
                        </Row>
                        <h5>Curl de muñeca con mancuerna palmas abajo (prono)</h5>
                        <p>
                            Extensores.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ForearmExercises