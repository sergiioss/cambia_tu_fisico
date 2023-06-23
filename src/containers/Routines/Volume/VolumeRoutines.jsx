import './VolumeRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const VolumeRoutines = () => {

    return (

        <Container className="volume-routine-training">
            <Row className="first-section-volume-routine">
                <Col className="body-volume-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de volumen para ganar masa muscular</h1>
                    <i>¡Las mejores rutinas de volumen muscular están aquí! ¡A entrenar!</i>
                    <Row className="icons-volume-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-volume-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-volumen2-696x392.jpg"></Image>
                    <section>
                        <p>
                            Aunque el objetivo principal de las rutinas de volumen es potenciar la <strong>hipertrofia muscular</strong>, con ellas se gana <strong>tamaño, fuerza</strong> y, dependiendo de la dieta, puedes incluso <strong>definir los músculos</strong>.
                        </p>
                        <p>
                            Muchos investigadores y <strong>culturistas</strong> están de acuerdo en que, para lograr el éxito, debéis conseguir el equilibrio entre los pesos, el cardio y la nutrición. Esta afirmación indica que la alimentación es una pieza ineludible de las sesiones de entrenamiento.
                        </p>
                        <p>
                            Ciertamente, los culturistas son lo que comen. Por lo tanto, ninguna rutina de volumen tendrá éxito sin ir acompañada de una adecuada <strong>dieta para ganar masa muscular.</strong>
                        </p>
                        <Row className="square-volume-routine">
                            <p className="title-square-volume-routine">Contenidos</p>
                            <ul>
                                <li className="li-square-volume-routine">1 Qué son las rutinas de volumen muscular</li>
                                <li>2 Normas a seguir en tu rutina de volumen</li>
                                <li>3 Ejemplo de rutina de volumen muscular efectiva</li>
                                <li>4 La dieta en la rutina de volumen</li>
                                <li>5 Suplementos para tu rutina de volumen muscular</li>
                                <li>6 Las mejores rutinas de volumen</li>
                                <li>7 Otras rutinas para ganar volumen muscular</li>
                                <li>8 Rutinas de volumen por grupos musculares</li>
                            </ul>
                        </Row>
                        <h3>Qué son las rutinas de volumen muscular</h3>
                        <p>
                            Una rutina de volumen es un programa de entrenamiento donde se busca como principal objetivo la <strong>hipertrofia</strong> de los músculos.
                        </p>
                        <Row className="img-volume-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/rutina-de-volumen.jpg"></Image>
                            <i>
                                El volumen muscular se consigue con constancia, buena alimentación y con una rutina de entrenamiento sólida.
                            </i>
                        </Row>
                        <p>
                            Si buscas el significado de hipertrofia lo verás claro:
                        </p>
                        <p>
                            HIPERTROFIA = «CRECIMIENTO EXCESIVO Y ANORMAL DE UN ÓRGANO O DE UNA PARTE DE ÉL DEBIDO A UN AUMENTO DEL TAMAÑO DE SUS CÉLULAS».
                        </p>
                        <p>
                            Por lo tanto, estas rutinas se centran en <strong>hacer crecer los músculos</strong> mediante grandes pesos y suficiente carga de trabajo para estimular los diferentes tipos de fibras musculares.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default VolumeRoutines