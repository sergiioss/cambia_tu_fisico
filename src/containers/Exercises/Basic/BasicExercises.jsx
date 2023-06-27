import './BasicExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BasicExercises = () => {

    return (

        <Container className="basic-exercise-training">
            <Row className="first-section-basic-exercise">
                <Col className="body-basic-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios básicos multiarticulares, los más anabólicos</h1>
                    <br />
                    <Row className="icons-basic-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-basic-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-basicos-696x392.jpg"></Image>
                    <section>
                        <p>
                            Los <strong>ejercicios básicos</strong> por excelencia son el trío de ejercicios físicos compuestos por el <strong>peso muerto</strong>, <strong>el press de banca y la sentadilla</strong> aunque otros ejercicios como las <strong>dominadas</strong> o el <strong>press militar</strong> pueden ser considerados <strong>ejercicios básicos</strong>.
                        </p>
                        <p>
                            Los <strong>ejercicios básicos</strong>, <strong>compuestos o multiarticulares</strong> son aquellos que hacen trabajar a la vez gran cantidad de músculos principales así como varios músculos auxiliares y los músculos encargados de mantener la postura.
                        </p>
                        <p>
                            Debido a esto, los <strong>ejercicios básicos</strong> son indispensables para estimular el crecimiento muscular y la fuerza de modo sólido al  activar todas o casi todas las fibras de un determinado <strong>músculo</strong>.
                        </p>
                        <p>
                            Está bastante aceptado que el <strong>entrenamiento con pesas</strong> ha de tener como base los <strong>ejercicios básicos</strong>, debido a que trabajan gran cantidad de musculatura (se realiza más trabajo en menos tiempo), induciendo una señal de adaptación más fuerte al cuerpo.
                        </p>
                        <p>
                            Otra consideración es que el cuerpo humano está diseñado para trabajar como una sola pieza, por lo que es más adecuado utilizar <strong>ejercicios en el gimnasio</strong> que lo trabajen al conjunto.
                        </p>
                        <p>
                            Los <strong>ejercicios básicos</strong> se realizan normalmente al inicio del entrenamiento, cuando los músculos se hallan todavía frescos de energía. Además de la musculatura, desarrollan los tendones y potencian las articulaciones.
                        </p>
                        <p>
                            Un físico construido sin estos <strong>ejercicios</strong> es un físico con aspecto frágil, aunque posea gruesos músculos; en efecto, tales músculos aparecen como desligados entre ellos.
                        </p>
                        <p className="parrafo-basic-blue">
                            LOS EJERCICIOS BÁSICOS COMPACTAN Y COMPLETAN TU FÍSICO, SON LOS CIMIENTOS PARA CONSTRUIR EL EDIFICIO QUE ES TU CUERPO.
                        </p>
                        <h3>Ventajas de utilizar ejercicios básicos en tu rutina</h3>
                        <br />
                        <p>
                            <strong>1) El cuerpo está diseñado para trabajar en su conjunto y no aisladamente.</strong>
                        </p>
                        <p>
                            Trabajar varios músculos a la vez con un ejercicio básico es la forma más natural de <strong>ganar masa muscular</strong>.
                        </p>
                        <p>
                            Aunque el cuerpo se estructura en grupos musculares, esta diseñado para trabajar como un todo con varios músculos colaborando entre sí para realizar los movimientos.
                        </p>
                        <br />
                        <p>
                            <strong>2) Trabajando con básicos también trabajamos los músculos auxiliares.</strong>
                        </p>
                        <p>
                            Haciendo press de banca para <strong>pecho</strong>, trabajaremos los <strong>tríceps</strong>. Si hacemos dominadas para <strong>espalda</strong>, también estaremos trabajando <strong>bíceps</strong>, por poner solo dos ejemplos.
                        </p>
                        <br />
                        <p>
                            <strong>3) El uso de ejercicios básicos promueve un mayor crecimiento</strong>
                        </p>
                        <p>
                            El uso combinado de varios músculos a la vez provoca un <strong>agotamiento</strong> mucho más intenso, lo cual se traduce también en que el cuerpo producirá las señales necesarias para provocar un mayor crecimiento en los músculos y una mayor necesidad de <strong>adaptación</strong> al esfuerzo.
                        </p>
                        <br />
                        <p>
                            <strong>4) El uso de mayores pesos produce un mayor impacto en el cuerpo.</strong>
                        </p>
                        <p>
                            Al trabajarse varios músculos conjuntamente, <strong>el peso</strong> que se maneja en los ejercicios básicos es mayor. Esto induce un mayor estímulo sobre los músculos trabajados ya que soportan un peso mayor que el que recibirían en un <strong>ejercicio de aislamiento</strong>.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BasicExercises