import './AbdominalRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const AbdominalRoutines = () => {

    return (

        <Container className="abdominal-routine-training">
            <Row className="first-section-abdominal-routine">
                <Col className="body-abdominal-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de abdominales con ejercicios muy efectivos</h1>
                    <br />
                    <Row className="icons-abdominal-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-abdominal-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-abdominales-696x392.jpg"></Image>
                    <section>
                        <p>
                            Llevar a cabo <strong>rutinas de abdominales</strong> bien planificadas y de forma constante es un requisito indispensable para conseguir una abdomen plano, marcado y fuerte.
                        </p>
                        <p>
                        Para ello es necesario realizar una gran variedad de <strong>ejercicios de abdominales</strong> que ataquen los músculos del abdomen desde todos los ángulos (inferior, superior y lateral).
                        </p>
                        <p>
                            No olvides introducir tu <strong>plan abdominal</strong> en tu <strong>rutina de entrenamiento</strong>. Un abdomen fuerte te permitirá tener un cuerpo más fuerte, equilibrado y menos propenso a las <strong>lesiones</strong>.
                        </p>
                        <Row className="square-abdominal-routine">
                            <p className="title-square-abdominal-routine">Contenidos</p>
                            <ul>
                                <li className="li-square-abdominal-routine">1 Como realizar las rutinas de abdominales</li>
                                <li>2 Las tres claves de las rutinas de abdominales</li>
                                <li>3 Rutina de abdomen para principiantes</li>
                                <li>4 Rutina de abdominales nivel intermedio</li>
                                <li>5 Rutina de abdomen avanzada</li>
                                <li>6 Rutina de abdominales de alta intensidad</li>
                                <li>7 Selección de rutinas de abdominales</li>
                            </ul>
                        </Row>
                        <h3>Como realizar las rutinas de abdominales</h3>
                        <p>
                            Los músculos <strong>abdominales</strong> no son físicamente distintos del resto. Dicho esto, déjame plantear la siguiente pregunta: si trabajas los pectorales, ¿harías tres series de 100 repeticiones de press de banca?
                        </p>
                        <Row className="double-img-block">
                            <Image className="double-img-big" src="https://www.cambiatufisico.com/wp-content/uploads/rutina-abdominal.jpg"></Image>
                            <i>Un cuerpo no está completo si no tiene un buen abdomen. Realiza nuestras rutinas de abdominales y lo conseguirás.</i>
                        </Row>
                        <p>
                            Por supuesto que no. El <strong>entrenamiento de abdominales</strong> debe enfocarse de la misma forma, aunque mucha gente crea que tiene que hacer cientos de repeticiones.
                        </p>
                        <p>
                            Parte de los motivos de esta errónea creencia es que tal vez no se trabajen los abdominales correctamente o con la suficiente intensidad.
                        </p>
                        <p>
                            Si tienes que completar 50 repeticiones antes de sentir la quemazón en los músculos, es porque estás haciendo algo mal. Probablemente tengas que aminorar la marcha y mejorar la <strong>ejecución</strong> del ejercicio.
                        </p>
                        <p>
                            Sé sincero: <i>¿desplazas la cabeza hacia delante en las elevaciones de tronco? ¿Contraes los músculos al máximo en cada repetición? ¿Te das impulso con el cuerpo para hacer el ejercicio correctamente?</i>
                        </p>
                        <p>
                            Si trabajas los abdominales de la forma adecuada, sentirás la <strong>quemazón</strong> de forma inmediata, y no tendrás la suficiente energía para completar cientos de repeticiones.
                        </p>
                        <p>
                            Así que, si te resulta demasiado fácil, comprueba que haces los ejercicios adecuadamente.
                        </p>
                        <h3>Las tres claves de las rutinas de abdominales</h3>
                        <Row className="double-img-block">
                            <Image className="double-img-big" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-de-abdominales.jpg"></Image>
                            <i>Una buena rutina abdominal nos puede proporcionar una zona media funcional, estética y fuerte.</i>
                        </Row>
                        <p>
                            Si quieres tener unos músculos del abdomen bien definidos y marcados, son necesarios 3 pasos:
                        </p>
                        <p>
                            <strong>1)</strong> Realizar las <strong>rutinas de abdominales</strong> que aquí te mostramos y fijarte bien en la forma correcta de ejecutar los ejercicios que componen cada rutina.
                        </p>
                        <p>
                            <strong>2)</strong> Disminuye la grasa que se acumula en el abdomen: para esto tienes que realizar ejercicios para adelgazar como caminar, trotar, aeróbicos, nadar, bailar, etc.
                        </p>
                        <p>
                            <strong>3)</strong> Lleva una dieta baja en grasas.
                        </p>
                        <p>
                            Antes de realizar estas <strong>rutinas de ejercicios abdominales</strong> te recomendamos que leas con atención la sección de <strong>Entrenamiento Abdominal</strong>.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default AbdominalRoutines