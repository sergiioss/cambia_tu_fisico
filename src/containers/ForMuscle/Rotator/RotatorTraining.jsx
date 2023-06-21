import './RotatorTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const RotatorTraining = () => {

    return (

        <Container className="rotator-training">
            <Row className="first-section-rotator">
                <Col className="body-rotator-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Entrenamiento y ejercicios de los rotadores del hombro</h1>
                    <br />
                    <Row className="icons-rotator" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-rotator" src="https://www.cambiatufisico.com/wp-content/uploads/manguito-rotador1-696x392.jpg"></Image>
                    <section>
                        <Row className="block-rotator-img">
                            <Col className="text-block-rotator">
                                <p>
                                    El <strong>manguito de los rotadores</strong> supone para muchos un gran problema, y si no tienes ese problema seguro que se lo has oído comentar a alguien alguna vez.
                                </p>
                                <p>
                                    El <strong>manguito rotador</strong> se compone principalmente por cuatro músculos: el supraespinoso, el infraespinoso, el redondo menor y el subescapular
                                </p>
                            </Col>
                            <Col className="img-block-rotator">           
                                <Image className="img-rotator" src="https://www.cambiatufisico.com/wp-content/uploads/manguito-rotador.jpg"></Image>                                
                            </Col>
                        </Row>
                        <Row className="square-rotator">
                            <p className="title-square-rotator">Contenidos</p>
                            <ul>
                                <li className="li-square-rotator">1 Como entrenar el manguito rotador</li>
                                <li>2 Ejercicios para entrenar el manguito rotador</li>
                                <li>3 Rotación externa con mancuerna</li>
                                <li>4 Rotación externa en polea</li>
                                <li>5 Rotación Interna con mancuerna</li>
                                <li>6 Rotación interna en polea</li>
                                <li>7 Pájaros invertidos con rotación externa</li>
                            </ul>
                        </Row>
                        <h3>Como entrenar el manguito rotador</h3>
                        <p>
                            La conveniencia de entrenar los músculos que forman el manquito de los rotadores no es para hipertrofiarlos con el fin de mejorar el físico estéticamente (en su estricto sentido).
                        </p>
                        <p>
                            Fortalecer el manguito de los rotadores ayuda a prevenir las lesiones de tal forma que se puedan realizar con la máxima intensidad todos los ejercicios del tronco, en especial los movimientos de <strong>pecho, hombros</strong> y <strong>espalda</strong>.
                        </p>
                        <p>
                            El estrés que impone el entrenamiento con peso al grupo muscular de los <strong>manguitos de los rotadores</strong> es tal que, si esa zona no está adecuadamente acondicionada para manejar cargas elevadas, puede determinar que ocurra una lesión con resultado de <strong>cirugía</strong>, la cual podría apartarle de esta actividad durante muchos meses.                            
                        </p>
                        <p>
                            La cuestión fundamental es que la rotura del <strong>manguito de los rotadores</strong> afectará negativamente al resto del entrenamiento de manera indefinida.
                        </p>
                        <p className="text-blue">
                            ESTA ENTRADA PRESENTARÁ UNA SERIE DE EJERCICIOS BÁSICOS PARA MINIMIZAR LA POSIBILIDAD DE TALES LESIONES Y CONSEGUIR QUE LOS LEVANTAMIENTOS DEL TREN SUPERIOR ESTÉN LIBRES DE DOLOR.
                        </p>
                        <h3>Ejercicios para entrenar el manguito rotador</h3>
                        <p>
                            Entrenar los <strong>manguitos de los rotadores</strong> durante 5 a 10 minutos, de dos a tres días por semana. Seleccionar dos o tres ejercicios de esta entrada y realizar dos o tres series de 15 a 20 repeticiones.
                        </p>
                        <p>
                            Hacerlo <strong>siempre al final</strong> de una sesión de entrenamiento que implique otros grupos musculares mayores, ya que si se fatigan el supraespinoso, el infraespinoso, el redondo menor y el escapular antes de entrenar el pecho, la espalda o los hombros pueden hacerse <strong>más susceptibles a la lesión</strong>.
                        </p>
                        <h3>Rotación externa con mancuerna</h3>
                        <Row className="double-img-block">
                            <Image className="double-img" src="https://www.cambiatufisico.com/wp-content/uploads/rotacion-externa.jpg"></Image>
                        </Row>
                        <p>
                            El ejercicio de <strong>rotación externa con mancuerna</strong> se centra en el infraespinoso y redondo menor. Es el ejercicio más utilizado en el entrenamiento del <strong>manguito rotador</strong> del hombro.
                        </p>
                        <p>
                            Como todos los ejercicios para el manguito rotador, se debe realizar al final del entrenamiento que haya implicado a otros grupos musculares mayores.
                        </p>
                        <p>
                            Tumbado sobre un costado, en el suelo o un banco plano, sujetar una <strong> mancuerna muy ligera</strong> (2,5 a 5 kilos) en la mano del brazo que está arriba (el brazo opuesto puede permanecer apoyado en el suelo o en el banco).
                        </p>
                            Comenzar con el brazo que trabaja flexionándolo a 90 grados, el codo pegado al costado y el <strong>antebrazo</strong> perpendicular con el suelo y cruzando el abdomen.
                        <p>
                            Con el brazo flexionado y el codo pegado al costado, levantar lentamente la mancuerna hasta que el antebrazo quede aproximadamente <strong>perpendicular</strong> al suelo. Lentamente, volver a la posición de inicio. Completar todas las repeticiones con ese brazo y, a continuación, cambiar de brazo.
                        </p>
                        <p>
                            Posibles variaciones de este ejercicio serían la <strong>rotación externa con banda elástica o polea</strong>.
                        </p>
                        <h3>Rotación externa en polea</h3>
                        <Row className="double-img-block">
                            <Image className="double-img" src="https://www.cambiatufisico.com/wp-content/uploads/2015/12/rotacion-externa-polea.jpg"></Image>
                        </Row>
                        <p>
                            Las rotaciones externas en polea son un excelente ejercicio para trabajar el manguito rotador podemos realizarlo en nuestra rutina habitual de prevención de lesiones en el hombro o al final de un entrenamiento que implique a otro grupo muscular mayor.
                        </p>
                        <p>
                            Colocar el cable de la polea o la banda elástica con el manillar a la altura del abdomen
                            (manteniendo una resistencia muy ligera). Separarse un paso del punto de origen de la polea o de la banda hasta sentir tensión.
                        </p>
                        <p>
                            Situado lateralmente a la polea, comenzar tirando del manillar separándolo del punto de origen, con el antebrazo cruzando el cuerpo y el codo pegado al costado.
                        </p>
                        <p>
                            Con el brazo flexionado y el codo pegado al costado, tirar lentamente del manillar hacia fuera y atrás hasta que el antebrazo quede aproximadamente perpendicular al abdomen. Lentamente, volver a la posición de comienzo.
                        </p>
                        <p>
                            Completar todas las repeticiones con un solo brazo y, a continuación, cambiar de brazo colocándose en la posición opuesta.
                        </p>
                        <p>
                           <strong> Músculos principales implicados</strong>: Infraespinoso y redondo menor.
                        </p>
                        <h5>Rotación Interna con mancuerna</h5>
                        <Row className="double-img-block">
                            <Image className="double-img" src="https://www.cambiatufisico.com/wp-content/uploads/2015/11/rotacion-interna-mancuerna.jpg"></Image>
                        </Row>
                        <p>
                            Puedes realizar la <strong>rotación interna con mancuerna</strong> al final del entrenamiento que implique a otros grupos musculares mayores o en cualquier orden dentro de tu rutina de rotador del hombro.
                        </p>
                        <p>
                            Tumbado en un banco plano o en el suelo, sujetando una mancuerna ligera (2,5 a 5 kilos) con la mano del brazo que está abajo (mantener el otro brazo sobre el costado).
                        </p>
                        <p>
                            Comenzar con el brazo que trabaja flexionado a 90 grados con el codo pegado al costado y el antebrazo paralelo al suelo. Con el brazo flexionado y el codo pegado al costado, subir lentamente la mancuerna hasta que el antebrazo toque la sección media. Volver lentamente a la posición de inicio.
                        </p>
                        <p>
                            Completar todas las repeticiones con ese brazo y, a continuación, cambiar de brazo hacia el otro lado
                        </p>
                        <p>
                            <strong>Músculos implicados</strong>: Subescapular.
                        </p>
                        <h5>Rotación interna en polea</h5>
                        <Row className="double-img-block">
                            <Image className="double-img" src="https://www.cambiatufisico.com/wp-content/uploads/2015/12/rotacion-interna-polea.jpg"></Image>
                        </Row>
                        <p>
                            Colocar en un cable o una banda elástica un manillar a la altura del abdomen (con una resistencia extremadamente ligera). Separarse un paso del punto de origen de la polea o la banda hasta sentir tensión.
                        </p>
                        <p>
                            Colocado de costado a la máquina, comenzar sujetando el manillar con la mano que está más cerca del punto de origen perpendicular al tronco, el brazo flexionado a 90 grados y los codos pegados al costado.
                        </p>
                        <p>
                            Con el brazo flexionado y el codo contra el costado, tirar lentamente del manillar hasta el tronco hasta que el antebrazo alcance la sección media.
                        </p>
                        <p>
                            Volver lentamente a la posición de inicio. Completar todas las repeticiones con ese brazo y luego cambiar al otro colocándose en dirección opuesta.
                        </p>
                        <p>
                            Las rotaciones internas en polea son un excelente ejercicio para trabajar el <strong>manguito rotador</strong> y podemos realizarlo en nuestra rutina habitual de prevención de lesiones en el hombro o al final de un entrenamiento que implique a otro grupo muscular mayor.
                        </p>
                        <p>
                            <strong>Principales músculos implicados</strong>: Subescapular.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default RotatorTraining