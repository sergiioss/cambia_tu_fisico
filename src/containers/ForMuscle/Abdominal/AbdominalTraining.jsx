import './AbdominalTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const AbdominalTraining = () => {

    return (

        <Container className="abdominal-training">
            <Row className="first-section-abdominal">
            <Breadcrumb></Breadcrumb>
                <Col className="body-abdominal-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Entrenamiento de los Abdominales, como conseguir tu six-pack</h1>
                    <br />
                    <Row className="icons-abdominal" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-abdominal" src="https://www.cambiatufisico.com/wp-content/uploads/abdominales5-696x392.jpg"></Image>
                    <section>
                        <p>
                            Si vas al gimnasio es muy posible que tu objetivo sea ganar masa muscular y perder grasa. ¿De verdad sabes lo importante que es entrenar tus abdominales para conseguir el éxito?
                        </p>
                        <p>
                            Va mucho más allá de conseguir lucir six-pack en la playa para impresionar a las chicas; el abdomen es vital para nuestra postura, nuestra fuerza y nuestras habilidades atléticas.
                        </p>
                        <p>
                            Para realizar un correcto entrenamiento de los abdominales  es necesario saber como funciona este complejo grupo muscular.
                        </p>
                        <p>
                            Por lo tanto, antes de empezar cualquier rutina de abdominales te recomendamos que leas con atención las siguientes líneas sobre entrenamiento abdominal.
                        </p>
                        <Row className="box-abdominal-parrafo">
                            <p className="abdominal-training-square">
                                Una vez conozcas los principios del entrenamiento abdominal, revisa nuestra sección de <br /><strong className="title-red-abdominal-square">ejercicios de abdominales.</strong>
                            </p>
                        </Row>
                        <Row className="square-abdominal">
                            <p className="title-square-abdominal">Contenidos</p>
                            <ul>
                                <li className="li-square-abdominal">1 Para qué sirve nuestro abdomen</li>
                                <li>2 Orden de trabajo del abdomen</li>
                                <li>3 Como entrenar el abdomen para máximos resultados</li>
                                <li>4 Otros artículos de entrenamiento abdominal</li>
                            </ul>
                        </Row>
                        <h3>Para qué sirve nuestro abdomen</h3>
                        <p>
                            La musculatura abdominal suele tener un carácter fásico, es decir, suele estar con falta de tono muscular.
                        </p>
                        <p>
                            Esto es debido a que no se ve solicitado en nuestra vida diaria y no se involucra en acciones musculares, sobre todo por los trabajos sedentarios.
                        </p>
                        <p>
                            Si a esto le añadimos que su antagonista (musculatura lumbar) suele tener un excesivo tono, nos conlleva a una descompensación en la región pélvica y lumbar que desembocará en problemas posturales como; anteversión y antepulsión de la cadera, hiperlordosis, problemas de ciáticas, hernias discales y sobrecargas lumbares.
                        </p>
                    </section>
                    <Image className="img-abdominal" src="https://www.cambiatufisico.com/wp-content/uploads/Entrenar-abdominales-3.jpg"></Image>
                    <br />
                    <h5>Actúa como fijador y estabilizador del tronco en un gran número de movimientos</h5>
                    <p>
                        La musculatura del tronco representa el centro de tu fuerza y de tu poder físico. En esfuerzos donde levantamos y empujamos resistencias, mantiene la columna como una base sólida, permitiendo transferir toda tu fuerza hacia los brazos y piernas para que realicen el esfuerzo.
                    </p>
                    <h5>Actúa a modo de «faja natural», interviniendo en el mantenimiento de la postura</h5>
                    <p>
                        Mantiene una alineación corporal correcta. Esto conlleva una serie de beneficios entre los que destacan una mayor efectividad del ejercicio, aumentando el rendimiento y disminuyendo el riesgo de lesión además de proporcionar estabilidad a la columna dorso-lumbar y mantener a las vísceras abdominales en su sitio.
                    </p>
                    <h5>Evitan descompensaciones musculares</h5>
                    <p>
                        En la mayoría de la población la zona posterior del tronco (lumbar) está con exceso de tono, ya que son músculos que intervienen en cualquier gesto y en el mantenimiento de la postura, mientras que la zona del abdomen esta con falta de tono.
                    </p>
                    <p>
                        Esta situación provoca descompensaciones musculares apareciendo patologías de tipo degenerativo de la columna como lordosis, escoliosis, etc.
                    </p>
                    <h5>Protección órganos internos</h5>
                    <p>
                        Los músculos del abdomen sostienen y protegen los órganos internos. Es la única defensa en esta zona, ya que está desprovista de estructura ósea.
                    </p>
                    <p>
                        Por tanto, es indispensable tener unos fuertes abdominales en deportistas que tienen que proteger esta zona de impactos como boxeadores, artes marciales, etc.
                    </p>
                    <h5>Intervienen en la respiración y presión intraabdominal</h5>
                    <p>
                        Cuando hacemos una espiración profunda (soltar el aire), los músculos respiratorios y abdominales actúan ejerciendo la presión necesaria para expulsar el aire de los pulmones
                    </p>
                    <h5>Mejoran la figura</h5>
                    <p>
                        Sin duda la zona media es la parte del cuerpo que mas ayuda a realzar la figura, podemos tener unos brazos fuertes o unas piernas esbeltas, pero de nada sirve si tenemos esa «tripita» o un vientre abultado y sin forma.
                    </p>
                    <h5>Símbolo de buena forma</h5>
                    <p>
                        Al igual que siempre se ha identificado al bíceps como un símbolo de fuerza, se identifica a la zona media como el reflejo de un buen estado de forma.
                    </p>
                    <p>
                        Si se tienen unos buenos abdominales y bien definidos, no cabe duda de que el resto del cuerpo estará a la altura.
                    </p>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default AbdominalTraining