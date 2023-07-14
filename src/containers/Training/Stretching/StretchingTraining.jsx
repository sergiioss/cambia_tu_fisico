import './StretchingTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const StretchingTraining = () => {

    return (

        <Container className="stretching-exercises-training">
            <Row className="first-section-stretching">
                <Breadcrumb></Breadcrumb>
                <Col className="body-stretching-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Estiramientos y entrenamiento de la flexibilidad en el gimnasio</h1>
                    <Row className="icons-stretching" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-stretching" src="https://www.cambiatufisico.com/wp-content/uploads/estiramientos-flexibilidad-696x392.jpg.webp"></Image>
                    <section>
                        <p>
                            Los <strong>estiramientos</strong> son indispensables en la vida cotidiana a fin de mejorar la soltura, la tonicidad y la movilidad. 
                        </p>
                        <p>
                            Los estiramientos no constituyen únicamente una manera de tonificar el cuerpo: ayudan a eliminar el estrés tomando conciencia del propio cuerpo.
                        </p>
                        <p>
                            Los <strong>estiramientos</strong> son una gimnasia suave, sin riesgos. Nos invita a escuchar el interior de nuestro cuerpo en lugar de prestar atención tan solo a su apariencia. El cuello se libera, el vientre se aplana, el pecho se abre y las piernas se agilizan.
                        </p>
                        <h3>Beneficios de los estiramientos</h3>
                        <p>
                            El estiramiento es un gesto natural que mantiene la forma física y procura bienestar. De manera instintiva, la primera cosa que hacemos por la mañana, cuando nos despertamos, es estirarnos.
                        </p>
                        <p>
                            Más allá de este aspecto revitalizante, los estiramientos constituyen también un buen medio para optimizar el rendimiento deportivo.
                        </p>
                        <h5>Mantenimiento o aumento de la amplitud del movimiento</h5>
                        <p>
                            Un gesto deportivo repetitivo puede reducir la amplitud del movimiento tensando músculos y tendones.
                        </p>
                        <p>
                            Una cierta tensión es indispensable, particularmente en los deportes de fuerza, pero una tensión excesiva y una amplitud reducida solo son fuente de lesiones y de disminución del rendimiento. La práctica regular de estiramientos puede prevenir este problema.
                        </p>
                        <p>
                            En ciertas disciplinas, como la <strong>natación o la gimnasia</strong>, deben efectuarse ejercicios de flexibilidad regularmente, a fin de aumentar la amplitud de movimiento de una articulación cuando dicha amplitud es sinónimo de aumento del rendimiento.
                        </p>
                        <h5>Aumento del tono muscular</h5>
                        <p>
                            Los estiramientos constituyen un potente refuerzo para los músculos. Utilizando la fuerza de resistencia pasiva del músculo, el estiramiento acelera la rapidez del proceso de síntesis de las proteínas que constituyen las fibras musculares. De esta forma, nuestro cuerpo gana en tono muscular y fuerza resistencia.
                        </p>
                        <h5>Calentamiento antes del esfuerzo</h5>
                        <p>
                            Los estiramientos calienta la musculatura, los tendones y las articulaciones, con lo cual preparamos el cuerpo para un esfuerzo físico.
                        </p>
                        <h5>Acción antiestrés</h5>
                        <p>
                            Gracias a su efecto euforizante y oxigenante, los estiramientos minimizan el estrés que puede paralizar los músculos (antes de una competición, por ejemplo).
                        </p>
                        <h5>Prevención de lesiones</h5>
                        <p>
                            La mayoría de los esfuerzos musculares inducen a un aplastamiento de las articulaciones, así como a un apisonamiento de la columna vertebral. Gracias al estiramiento, es posible descomprimir la espalda y todas las articulaciones. Esta estrategia previene las lesiones acelerando la recuperación articular, tendinosa y muscular.
                        </p>
                        <h5>Tipos de estiramientos</h5>
                        <p>
                            Existen diferentes técnicas de estiramiento, pero son tres los principales métodos de probada eficacia.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>
            </Row>
        </Container>
    )
}

export default StretchingTraining