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
                        <p>
                            Este ejercicio siempre recomendamos hacerlo en conjunto con el siguiente de esta lista. Es decir, comenzamos con unas series de curl de muñecas con mancuerna palmas abajo (agarre prono) y seguimos con el curl con mancuerna palmas arriba (supino).
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-de-muneca-con-mancuerna-palmas-abajo.jpg"></Image>
                        </Row>
                        <p>
                            De esta forma nos aseguramos de trabajar la totalidad de los pequeños músculos que recorren nuestro antebrazo.
                        </p>
                        <p>
                            Lo puedes realizar a una sola mano como en la foto o con ambas. No influye en la efectividad del ejercicio.
                        </p>
                        <h5>Curl de muñeca con mancuerna palmas arriba (supino)</h5>
                        <p>
                            Flexores.
                        </p>
                        <p>
                            Como hemos comentado anteriormente, te recomendamos trabajarlo junto con el ejercicio anterior o ir alternando de semana en semana entre uno y otro.
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-de-muneca-con-mancuerna-palmas-arriba.jpg"></Image>
                        </Row>
                        <p>
                            Igual que el ejercicio anterior, puedes realizarlo con ambas manos al mismo tiempo.
                        </p>
                        <h3>Ejercicios de antebrazo con barra</h3>
                        <br />
                        <h5>Curl invertido con barra</h5>
                        <p>
                            Nuestro ejercicio favorito de antebrazo merece un artículo propio. El curl invertido es a mejor opción para trabajar los antebrazos sin complicaciones y sabiendo que vas a obtener el máximo beneficio.
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-invertido-con-barra.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo avanzado</strong>: Para colocar mayor énfasis sobre el braquiorradial (<strong>ver anatomía del antebrazo</strong>), realizar los curls invertidos con un agarre amplio, manteniendo el pulgar en el extremo de la barra. Esto forzará a mantener la barra más cerca del cuerpo originando más implicación en este grupo muscular.
                        </p>
                        <h5>Curl de muñeca con barra palmas arriba</h5>
                        <p>
                            Manteniendo los brazos quietos (como el resto del cuerpo), flexionar las muñecas tanto como sea posible para elevar la barra hacia la parte superior de los brazos en un corto  rango de movimiento. Contraer los antebrazos contando uno y, a continuación, volver a la posición de inicio.
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-de-muneca-con-barra-palmas-arriba.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo avanzado</strong>: Como con el curl de muñecas de pie, permitir que la barra se deslice hacia los dedos al final de cada repetición para conseguir un estiramiento mayor.
                        </p>
                        <h5>Curl de muñecas con barra palmas abajo</h5>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-de-munecas-con-barra-palmas-abajo.jpg"></Image>
                        </Row>
                        <h5>Curl de muñeca con barra por detrás de la espalda</h5>
                        <p>
                            Manteniendo los brazos quietos, flexionar las muñecas para elevar la barra en un corto rango de movimiento de tal manera que las palmas se dirijan hacia arriba al final de la repetición. Contraer el antebrazo contando uno y, a continuación, volver a la posición de inicio.
                        </p>
                        <Row className="image-center">
                            <Image className="img-forearm-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-de-muneca-con-barra-por-detras-de-la-espalda.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo avanzado</strong>: Después de hacer series estándar, realizar una última serie isométrica manteniendo la posición hacia arriba tanto como se pueda. Esto proporcionará un intenso final a la sesión de trabajo.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ForearmExercises