import './ChestTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ChestTraining = () => {

    return (

        <Container className="chest-training">
        <Row className="first-section-chest">
            <Col className="body-chest-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Musculación, la guía definitiva</h1>
                <i>Para obtener ganancias musculares en tu pectoral necesitas rutinas de pecho correctamente planificadas con los mejores ejercicios.</i>
                <br />
                <Row className="icons-chest" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-chest" src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-pecho-696x392.jpg"></Image>
                <section>
                    <p>
                        Las <strong>rutinas de pecho</strong> son las preferidas por el usuario medio del gimnasio. Un pectoral desarrollado es la seña de identidad de un hombre grande y <strong>fuerte</strong>. 
                    </p>
                    <p>
                        También las <strong>mujeres</strong> pueden obtener beneficios de las rutinas de pecho. Aunque no se puede aumentar el volumen de la mama con entrenamiento, si que se puede mejorar la forma y tonificación de las mismas.
                    </p>
                    <p>
                        En esta sección encontrarás nuestros mejores <strong>rutinas de pecho</strong> así como <strong>consejos de entrenamiento</strong> de pecho específicos para cualquier objetivo, ya quieras <strong>ganar masa muscular</strong> o <strong>definir tus músculos</strong>.
                    </p>
                    <Row className="square-chest">
                        <p className="title-square-chest">Contenidos</p>
                        <ul>
                            <li className="li-square-chest">1 Como llevar al éxito tu rutina de pecho</li>
                            <li>2 Nuestra rutina de pecho más efectiva</li>
                            <li>3 Rutina de pecho para volumen general</li>
                            <li>4 Rutina de pecho para hacer en casa</li>
                            <li>5 Rutina de pecho para principiantes</li>
                            <li>6 Rutina de pecho de 15 minutos</li>
                            <li>7 Rutina de pecho en serie gigante</li>
                            <li>8 Rutina de pecho de resistencia muscular</li>
                            <li>9 Rutina de pecho para fuerza</li>
                            <li>10 Rutina de congestión máxima</li>
                            <li>11 Rutina de pecho para pectoral inferior</li>
                            <li>12 Rutina de pecho para pectoral superior</li>
                            <li>13 Rutinas de pecho especializadas</li>
                            <li>14 Consejos avanzados para tu entrenamiento de pecho</li>
                        </ul>
                    </Row>
                    <h3>Como llevar al éxito tu rutina de pecho</h3>
                    <p>
                        Las <strong>rutinas de pecho</strong> se pueden combinar prácticamente con cualquier músculo, el propio <strong>Arnold</strong> lo entrenaba con la espalda; aunque lo más normal es entrenarla junto con el bíceps o algún músculo de pierna.
                    </p>
                    <p>
                        Para los seguidores de las <strong>rutinas tirón-empujón</strong>, <strong>entrenar el pecho</strong> en la misma sesión con el hombro y el tríceps puede ser muy efectivo.
                    </p>
                    <h5>La intensidad es clave</h5>
                    <p>
                        Si queréis unos pectorales más grandes y llenos debéis <strong>entrenaros con mucha dureza</strong>.
                    </p>
                    <p>
                        Probad a utilizar el mayor peso posible con una <strong>buena ejecución</strong> y concentraos siempre en activar todas las fibras musculares. Apretad en cada contracción como si el pecho fuera una esponja y le quisierais extraer el agua.
                    </p>
                    <h5>El estilo estricto es fundamental</h5>
                    <p>
                        El pecho necesita movimientos <strong>potentes</strong> y <strong>controlados</strong>. El control de la fase excéntrica (negativa) resulta esencial para atacar al mayor número de fibras, lo mismo que los movimientos explosivos (concéntricos) de subida, intentando usar el máximo peso posible.
                    </p>
                    <h5>Realizar un buen calentamiento</h5>
                    <p>
                        No os olvidéis nunca de <strong>calentar</strong> bien la zona de trabajo. Os recomiendo pasar cinco o seis minutos en la máquina de andar o en la de escaleras para aumentar la temperatura corporal. 
                    </p>
                    <p>
                        Empezad con poco peso en el primer ejercicio de press. Por ejemplo, si realizáis un press con mancuernas con 45 kilos y 10 repeticiones, el calentamiento debe ser:
                    </p>
                    <li>20 kilos x 12 repeticiones</li>
                    <li>30 kilos x 6 repeticiones</li>
                    <li>40kilos x 3 repeticiones</li>
                    <br />
                    <p>
                        El calentamiento está diseñado para preparar a los músculos y al sistema nervioso para el ejercicio, pero <strong>no debe agotar vuestra fuerza</strong>, por eso las repeticiones son descendentes.
                    </p>
                </section>
            </Col>
            <Aside className="aside"/>  
        </Row>
    </Container>
    )
}

export default ChestTraining