import './AbdominalExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const AbdominalExercises = () => {

    return (

        <Container className="abdominal-exercise-training">
            <Row className="first-section-abdominal-exercise">
                <Col className="body-abdominal-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Abdominales</h1>
                    <i>Descubre los ejercicios de abdominales más efectivos que puedes realizar en el gimnasio o en casa.</i>
                    <Row className="icons-abdominal-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-abdominal-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-abdomen-696x392.jpg"></Image>
                    <section>
                        <p>
                            Los <strong>ejercicios abdominales</strong> son imprescindibles para conseguir un vientre plano y tonificado. A continuación expondremos mediante fotografías y explicaciones algunos de los <strong>ejercicios de abdominales</strong> más comunes en el gimnasio.
                        </p>
                        <p>
                            No son todos, ni mucho menos, pero puedes encontrar multitud de ejercicios adicionales buscando por la red o preguntando al monitor de tu gimnasio.
                        </p>
                        <Row className="box-abdominal-parrafo">
                            <p className="abdominal-exercise-square">
                            Recomendamos que antes de elegir los <strong>ejercicios</strong>aquí expuestos y ponerte a ejecutarlos en cualquier <strong className="title-red-abdominal-square">rutina de abdominales</strong> leas con atención nuestro apartado de <strong className="title-red-abdominal-square">entrenamiento de los abdominales</strong> para evitar problemas posturales y de ejecución durante los ejercicios.
                            <br />
                            </p>
                        </Row>
                        <Row className="square-abdominal-exercise">
                            <p className="title-square-abdominal-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-abdominal-exercise">1 Consejos avanzados para los ejercicios de abdominales</li>
                                <li>2 Ejercicios de Abdominales Inferiores</li>
                                <li>3 Ejercicios de Abdominales superiores y zona media</li>
                                <li>4 Ejercicios de Abdominales laterales y oblicuos</li>
                                <li>5 Ejercicios abdominales para trabajo de Core</li>
                                <li>6 El orden adecuado al realizar ejercicios abdominales</li>
                            </ul>
                        </Row>
                        <p>
                            Aunque hemos dividido los <strong>ejercicios de abdominales</strong> en tres zonas, superiores, inferiores y oblicuos esto no quiere decir que sean ejercicios exclusivos para esa zona.
                        </p>
                        <p>
                            Es imposible <strong>aislar</strong> completamente las partes del abdomen al hacer los ejercicios, pero si que se puede influir más sobre una determinada zona.
                        </p>
                        <h3>Consejos avanzados para los ejercicios de abdominales</h3>
                        <h5>Rango de movimiento</h5>
                        <p>
                            Siente la tensión de tus músculos abdominales en todo el recorrido de tus movimientos, tanto en la fase concéntrica, cuando se acortan los músculos al subir, como en la excéntrica, cuando se van alongando al bajar.
                        </p>
                        <h5>Velocidad del movimiento</h5>
                        <p>
                            La velocidad del movimiento debe de ser constante y pausado tanto en el recorrido concéntrico como el excéntrico. Evita las inercias y la velocidad muy elevada, porque realizaras un trabajo muscular mucho más exhaustivo.
                        </p>
                        <p>
                            Cuando avances en tu trabajo puedes añadir velocidad a tus movimientos concéntricos y disminuirla en la fase excéntrica de bajada, pero todo siempre con control.
                        </p>
                        <h5>Respiración</h5>
                        <p>
                            Es muy importante la respiración en todas las fases del movimiento. Inspira por tu nariz al bajar y espira al subir de forma cómoda y rítmica.
                        </p>
                        <h5>Posición correcta</h5>
                        <p>
                            Las manos están por detrás de la cabeza pero no se cruzan los dedos, sino que estos son los que sujetan la cabeza, no tiran de ella. La zona lumbar debe de estar bien apoyada en el suelo.
                        </p>
                        <h3>Ejercicios de Abdominales Inferiores</h3>
                        <p>
                            Selección de ejercicios con énfasis en el abdomen inferior.
                        </p>
                        <Row className="list-abdominal-exercise">
                            <li className="blue-list-abdominal-exercise">Elevación de rodillas sentado (Pull-In) ✓</li>
                            <li className="blue-list-abdominal-exercise">Elevaciones de piernas colgado ✓</li>
                            <li className="blue-list-abdominal-exercise">Elevaciones de piernas en banco plano ✓</li>
                            <li className="blue-list-abdominal-exercise">Elevaciones de piernas en paralelas (Silla del capitán) ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en UVE (Piernas rectas) ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos invertidos ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos invertidos en banco inclinado ✓</li>
                            <li className="blue-list-abdominal-exercise">Tijeras de piernas ✓</li>
                        </Row>
                        <h3>Ejercicios de Abdominales superiores y zona media</h3>
                        <p>
                            Selección de ejercicios con énfasis en la zona media y superior del abdomen.
                        </p>
                        <Row className="list-abdominal-exercise">
                            <li className="blue-list-abdominal-exercise">Encogimientos abdominales en suelo ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en balón de ejercicio (Fitball) ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en banco inclinado ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en máquina ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en polea, arrodillado ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos en polea, de pie ✓</li>
                            <li className="blue-list-abdominal-exercise">Rodar con la barra (Rodamiento abdominal) ✓</li>
                        </Row>
                        <h3>Ejercicios de Abdominales laterales y oblicuos</h3>
                        <p>
                            Ejercicios enfocados a trabajar tus oblicuos.
                        </p>
                        <Row className="list-abdominal-exercise">
                            <li className="blue-list-abdominal-exercise">Bicicleta abdominal para oblicuos ✓</li>
                            <li className="blue-list-abdominal-exercise">Cortar troncos en polea o «Leñador» para abdomen ✓</li>
                            <li className="blue-list-abdominal-exercise">Elevación lateral de piernas colgado ✓</li>
                            <li className="blue-list-abdominal-exercise">Elevaciones de piernas para oblicuos tumbado (Jacknife) ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimiento lateral con mancuerna de pie (Torsión Lateral) ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos laterales dedos a los tobillos ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos para oblicuos ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos para oblicuos en banco declinado ✓</li>
                            <li className="blue-list-abdominal-exercise">Encogimientos para oblicuos en polea ✓</li>
                            <li className="blue-list-abdominal-exercise">Inclinación lateral en polea ✓</li>
                        </Row>
                        <h3>Ejercicios abdominales para trabajo de Core</h3>
                        <p>
                            En anatomía, <strong>el core</strong> se refiere al cuerpo menos las piernas y los brazos. Los movimientos <strong>funcionales</strong> son altamente dependientes del core, y una falta de desarrollo en el mismo puede predisponer a una lesión
                        </p>
                        <p>
                            La mayoría de los músculos del core se encuentran en el área abdominal y en la parte media y baja de la espalda, y periféricamente incluyen las caderas, los hombros y el cuello.
                        </p>
                        <li className="blue-list-abdominal-exercise">Plancha Abdominal | ¿El mejor ejercicio de core? ✓</li>
                        <li className="blue-list-abdominal-exercise">Plancha abdominal con Peso ✓</li>
                        <li className="blue-list-abdominal-exercise">Press Pallof, isométrico para oblicuos ✓</li>
                        <h3>El orden adecuado al realizar ejercicios abdominales</h3>
                        <p>
                            Las investigaciones han demostrado que hay una secuencia en particular dentro de una serie de cada ejercicio que ofrecen el máximo de beneficios a todos los músculos afectados.
                        </p>
                        <p>
                            Los abdominales superiores pueden dividirse, a su vez, en secciones centrales y externas. De ahora en adelante, utilizaremos el termino <strong>«abdominales superiores»</strong> para referirnos a la sección central; la externa, las llamaremos por su nombre: <strong>«oblicuos externos»</strong>.
                        </p>
                        <p>
                            Primero, considera únicamente los abdominales superiores y los abdominales inferiores.
                        </p>
                        <p>
                            Son independientes de esta forma:
                        </p>
                        <li>
                            <strong>Para trabajar los abdominales inferiores</strong>, tiene que utilizar los abdominales inferiores y los superiores.
                        </li>
                        <li>
                            <strong>Para trabajar los abdominales superiores</strong>, solo tiene que utilizar los abdominales superiores.
                        </li>
                        <br />
                        <p>
                            Comprueba como los abdominales superiores participan en el trabajo que realiza para ambas zonas. Como resultado, si fatigas los abdominales superiores primero, su cansancio limitara la cantidad de trabajo de los abdominales inferiores.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default AbdominalExercises