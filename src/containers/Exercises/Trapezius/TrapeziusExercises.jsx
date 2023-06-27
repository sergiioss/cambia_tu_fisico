import './TrapeziusExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const TrapeziusExercises = () => {

    return (

        <Container className="trapezius-exercise-training">
            <Row className="first-section-trapezius-exercise">
                <Col className="body-trapezius-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Trapecios</h1>
                    <br />
                    <Row className="icons-trapezius-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-trapezius-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-trapecio-696x392.jpg"></Image>
                    <section>
                        <p>
                            Desarrollar buenos <strong>trapecios</strong>  es simple. Basta con hacer <strong>ejercicios de trapecios</strong>, y basta con aprender a encoger los hombros.
                        </p>
                        <p>
                            Un buen físico requiere no sólo un pecho bien desarrollado, una buena espalda y unos buenos hombros, sino un trapecio superior importante.
                        </p>
                        <p>
                            Entrenar los <strong>trapecios</strong> es más fácil de lo que algunos piensan.
                        </p>
                        <p>
                            Una acción básica de este músculo es simplemente levantar la faja deltoidea, lo que significa <strong>«encoger» </strong>los hombros hacia arriba. Se trata de subirlos en dirección a las orejas. No hay mucha dificultad en esta técnica.
                        </p>
                        <p>
                            Hacer un<strong> ejercicio de encogimiento</strong> implica sujetar un par de mancuernas, una barra o los manerales de un aparato concreto adaptado a ello para proporcionar <strong>resistencia</strong>, y subir los hombros lo más arriba posible.
                        </p>
                        <p>
                            Idealmente, deberíamos mantener la posición de contracción completa y apretar a tope, y bajar luego lentamente al punto de partida para sentir el <strong>estiramiento</strong>.
                        </p>
                        <p>
                            El intervalo de recorrido es muy corto; la distancia que podemos subir o bajar los hombros.
                        </p>
                        <p>
                            A menudo vemos que hay <strong>culturistas</strong> complicando esos encogimientos tan simples. Por ejemplo, algunos giran los hombros hacia atrás y hacia delante cuando los levantan. No añade beneficio alguno y puede llegar a ser peligroso.
                        </p>
                        <p>
                            Todo lo que cuenta de verdad es la contracción muscular que se produce directamente contra la gravedad -hacia arriba, no hacia adelante o hacia atrás.
                        </p>
                        <li className="blue-list-trapezius-exercise">Encogimientos con barra</li>
                        <li className="blue-list-trapezius-exercise">Encogimientos con mancuernas</li>
                        <li className="blue-list-trapezius-exercise">Encogimientos en multipower</li>
                        <li className="blue-list-trapezius-exercise">Encogimientos en polea para trapecios</li>
                        <li className="blue-list-trapezius-exercise">Encogimientos tras nuca con barra</li>
                        <li className="blue-list-trapezius-exercise">Remo al mentón agarre cerrado</li>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default TrapeziusExercises