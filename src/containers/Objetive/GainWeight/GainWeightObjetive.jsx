import './GainWeightObjetive.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const GainWeightObjetive = () => {

    return (

        <Container className="gainWeigth-objetive">
            <Row className="first-section-gainWeigth-objetive">
                <Breadcrumb></Breadcrumb>
                <Col className="body-gainWeigth-objetive" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Ganar peso (Rutina y consejos)</h1>
                <br />
                <Row className="icons-gainWeigth-objetive" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-gainWeigth-objetive" src="https://www.cambiatufisico.com/wp-content/uploads/ganar-masa-muscular5-696x392.jpg"></Image>
                <section>
                    <p>
                        <i>¿Estas cansado de ese cuerpo flaco y esquelético?, ¿Comes como un caballo y ni en tus mejores días puedes pesar más de 60 kg?</i> <span>Entonces haz llegado al lugar indicado para conseguir <strong>ganar peso</strong>.</span>
                    </p>
                    <Row className="square-gainWeigth-objetive">
                        <p className="title-square-gainWeigth-objetive">Contenidos</p>
                        <ul>
                            <li className="li-square-gainWeigth-objetive">1 ¡Es que he probado todo y no puedo ganar peso!</li>
                            <li>2 El plan de acción para ganar peso</li>
                            <li>3 Regla 1, como comer para ganar peso</li>
                            <li>4 Regla 2, como entrenar para ganar peso</li>
                            <li>5 Regla 3, suplementos para ganar peso</li>
                            <li>6 Resumiendo todos los puntos</li>
                            <li>7 Otros principios para subir de peso</li>
                        </ul>
                    </Row>
                    <h3>¡Es que he probado todo y no puedo ganar peso!</h3>
                    <p>
                        Probablemente haz seguido los consejos de tu entrenador que cuando le preguntas como puedes ganar peso, generalmente te responde así:
                    </p>
                    <p>
                        Come más, come todo lo que tengas a tu alcance, carne, leche, pastas, pasteles, frituras, tortas, tacos, golosinas, niños y a tu mascota, bueno no tanto.
                    </p>
                    <p>
                        En el extremo opuesto, está el instructor competidor, tú sabes, el que se la pasa comiendo solo papas y atún, y cuando le preguntas porque solo come papas hervidas y atún en agua, responde con la siguiente frase, «ha funcionado para mi», por eso debes de hacerlo también tú.
                    </p>
                    <p>
                        Ninguno de los dos está mal, el problema es que ese tipo de recomendaciones son muy vagas y no te llevarán a ningún lado, pero te aseguro que si le preguntas lo siguiente se quedará callado.
                    </p>
                    <p>
                        <strong>¿Cuantos gramos de proteína, carbohidratos y calorías necesitas en realidad para lograr tus objetivos?</strong>
                    </p>
                    <p>
                        <strong>¿Como puedes optimizar tu entrenamiento para que tus músculos reciban el estímulo adecuado?</strong>
                    </p>
                    <p>
                        <strong>¿Cual es la manera correcta de usar complementos y como puedes sacar el máximo beneficio de ellos?</strong>
                    </p>
                    <p>
                        Las respuestas a estas preguntas las encontrarás en este artículo, es una guía que te mostrará paso a paso como lograr ese aumento de peso que tanto has soñado.
                    </p>
                    <h3>El plan de acción para ganar peso</h3>
                    <p>
                        Como buen soldado debes de tener listo un plan de acción para lograr tus objetivos.
                    </p>
                    <p>
                        – Registra tu peso y las medidas de tus músculos en centímetros, esto te servirá de referencia para evaluar tu progreso.
                    </p>
                    <p>
                        – Toma nota de cuales han sido tus mejores levantamientos en la sentadilla, press de banca y peso muerto, esto es con el mismo objetivo de evaluar tu progreso.
                    </p>
                    <p>
                        – Tómate una foto de frente y una de espaldas, una vez que logres tus objetivos toma otras fotos y te sorprenderás de lo mucho que puedes cambiar en unos cuantos meses.
                    </p>
                    <p>
                        – Anota cuantos kilogramos deseas ganar en un periodo de 8 semanas y está dispuesto a morir por ello.
                    </p>
                    <p>
                        Para hacer más sencillo este programa de entrenamiento y nutrición he decidido dividirlo en 5 reglas básicas, si omites una de estas no podrás lograr tus objetivos rápidamente.
                    </p>
                </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default GainWeightObjetive