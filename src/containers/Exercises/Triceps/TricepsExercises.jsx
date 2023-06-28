import './TricepsExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const TricepsExercises = () => {

    return (

        <Container className="triceps-exercise-training">
            <Row className="first-section-triceps-exercise">
                <Col className="body-triceps-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Tríceps</h1>
                    <i>Los mejores ejercicios de tríceps que puedes realizar tanto en el gimnasio como en casa. Un músculo sencillo de trabajar y que proporciona a los brazos el verdadero volumen.</i>
                    <br />
                    <Row className="icons-triceps-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-triceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-triceps-696x392.jpg"></Image>
                    <section>
                        <p>
                            Si no realizamos los <strong>ejercicios de tríceps adecuados</strong>, ni todas las flexiones de brazos del mundo serán capaces de proporcionar tamaño a nuestros brazos; es la musculatura del <strong>tríceps</strong> la que aporta la mayoría del volumen del brazo.
                        </p>
                        <p>
                            Entrenar el tríceps <strong>desde ángulos diferentes</strong> resulta crucial, no solo por variedad sino porque las posiciones diferentes implican a varios músculos del tríceps.
                        </p>
                        <p>
                            Por ejemplo, trabajar el tríceps desde la posición de brazos por encima de la cabeza involucra más a la <strong>cabeza larga</strong>. Los jalones a la <strong>cabeza lateral</strong> y los jalones con agarre invertido a la <strong>cabeza medial</strong>.
                        </p>
                        <Row className="image-center">
                            <Image className="img-triceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/cabezas-triceps.jpg"></Image>
                        </Row>
                        <Row className="box-triceps-exercise-parrafo">
                            <p className="triceps-exercise-training-square">
                                Para las mejores rutinas de tríceps y consejos de entrenamiento avanzado visita nuestro artículo <strong className="title-red-triceps-exercise-square">Rutinas y Entrenamiento del Tríceps.</strong>
                            </p>
                        </Row>
                        <Row className="square-triceps-exercise">
                            <p className="title-square-triceps-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-triceps-exercise">1 Claves de entrenamiento en los ejercicios de tríceps</li>
                                <li>2 Los mejores ejercicios de tríceps</li>
                                <li>3 Ejercicios básicos de tríceps</li>
                                <li>4 Ejercicios de Aislamiento de Tríceps</li>
                            </ul>
                        </Row>
                        <h3>Claves de entrenamiento en los ejercicios de tríceps</h3>
                        <h5>Ejecución correcta</h5>
                        <p>
                            En todos los movimientos de tríceps es importante mantener los brazos estáticos y evitar que los codos se <strong>separen</strong> del cuerpo. Así impediremos que los deltoides y los pectorales participen en el movimiento.
                        </p>
                        <h5>Como introducirlos en tu rutina</h5>
                        <p>
                            Vamos a suponer que trabajáis <strong>pecho</strong> con <strong>tríceps</strong>. Emparejan bien (son movimientos de empujón), pero como los tríceps trabajan en exceso al hacer pecho es posible que no podáis darlo todo durante los ejercicios de tríceps.
                        </p>
                        <p>
                            <strong>Trabajadlos solos o con los bíceps</strong> (su músculo antagonista) si queréis darles máxima prioridad. <strong>También es habitual entrenarlos con la espalda</strong> ya que suponen un buen complemento.
                        </p> 
                        <h3>Los mejores ejercicios de tríceps</h3>
                        <h5>Press Francés</h5>
                        <p>
                            El equivalente al <strong>curl con barra</strong> de bíceps pero para trabajar a tope su músculo antagonista, <strong>los tríceps</strong>. Este ejercicio los aísla por completo y te permite trabajarlos muy pesado.
                        </p>
                        <p>
                            Su efectividad está fuera de toda duda y proporcionará volumen muscular a tus tríceps..
                        </p>
                        <Row className="image-center">
                            <Image className="img-triceps-exercise big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Press-Frances.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo Avanzado: </strong>
                        </p>
                        <p>
                            Es muy importante mantener los codos pegados al cuerpo… si no eres capaz es que estás cargando demasiado peso.
                        </p>
                        <p>
                            Te recomendamos descansar de este ejercicio de forma periódica, es muy efectivo pero puede ser potencialmente <strong>lesivo</strong> si se abusa de el.
                        </p>
                        <h5>Fondos en paralelas</h5>
                        <p>
                            Los fondos para tríceps son ejercicio un básico. Construyen masa muscular de calidad ya que trabajamos de forma indirecta el pecho, hombros y core de forma isométrica.
                        </p>
                        <Row className="image-center">
                            <Image className="img-triceps-exercise big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/fondos-triceps.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo Avanzado:</strong>
                        </p>
                        <p>
                            No me gusta incluirlo como primer ejercicio de la rutina ya que es importante que los músculos estén previamente calientes para evitar lesiones.
                        </p>
                        <p>
                            No te lastres peso adicional hasta que domines completamente el ejercicio a 15 repeticiones, el peso corporal será suficiente en la mayoría de casos (y recuerda que hay otros métodos para incrementar la intensidad además de subir pesos y maltratar tus articulaciones).
                        </p>
                        <h5>Jalones de tríceps en polea</h5>
                        <p>
                            Este ejercicio no necesita presentación… utilizado por novatos y avanzados en la mayoría de <strong>rutinas de tríceps</strong>. Ejercicio de aislamiento donde la técnica es de vital importancia; no subir más allá de la paralela y mantener los codos pegados al cuerpo son las directrices básicas y obligatorias para obtener el máximo beneficio de este ejercicio
                        </p>
                        <Row className="image-center">
                            <Image className="img-triceps-exercise big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Jalones-con-barra-recta.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo Avanzado: </strong>
                        </p>
                        <p>
                            Excelente ejercicio para aplicar <strong>series descendentes</strong> como ejercicio final en tu rutina de tríceps.
                        </p>
                        <p>
                            <strong>No caigas en la trampa de cargar demasiado peso</strong>, este ejercicio no es para eso; técnica estricta y mente focalizada durante todo el movimiento, las dos claves para sacar el máximo partido a este ejercicio.
                        </p>
                        <h5>Jalones de tríceps con cuerda</h5>
                        <p>
                            Los jalones para tríceps con cuerda son muy similares al ejercicio anterior pero permite modificar el ángulo de estimulación al tener un agarre mas neutro (palmas de las manos enfrentadas).
                        </p>
                        <Row className="image-center">
                            <Image className="img-triceps-exercise big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Jalones-con-cuerda.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Consejo Avanzado: </strong>
                        </p>
                        <p>
                            El uso de este tipo de agarre implica un mayor <strong>aislamiento</strong> del músculo, por lo tanto es importante utilizar pesos ligeros donde podamos «sentir» y «focalizar» el ejercicio durante todo el intervalo de recorrido.
                        </p>
                        <p>
                            En la posición final separa ambos extremos de la cuerda y aguanta la tensión máxima durante un segundo.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default TricepsExercises