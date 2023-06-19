import './BigBodybuildersTraining.scss'
import {Col, Row, Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'

const BigBodybuildersTraining = () => {

    return (

        <Container className="big-body-builders-exercises-training">
            <Row className="first-section-big-body-builders">
                <Col className="body-big-body-builders-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>GRANDES CULTURISTAS</h1>
                    <i>
                        <p>
                            En esta sección encontrarás <strong>entrenamientos y consejos nutricionales</strong> de grandes culturistas de la historia como <strong>Arnold</strong>, Dorian y otros grandes campeones.
                        </p>
                        <p>
                            Recuerda que la forma en que entrenan los culturistas profesionales no es la más adecuada para muchas personas ya que suelen utilizar volúmenes de entrenamiento muy altos.
                        </p>
                        <p>
                            Esto es debido a que su vida está dedicada al 100% al culturismo. Descansan mucho, comen mucho y utilizan sustancias químicas. En cualquier caso, podemos aprender muchas cosas de estos <strong>«monstruos»</strong> del culturismo. Keep Watching!
                        </p>
                    </i>
                    <Row className="icons-big-body-builders" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Row className="images-content">
                        <Image className="img-big-body-builders " src="https://www.cambiatufisico.com/wp-content/uploads/hombros-arnold-696x385.jpg"></Image>
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/2015/10/Olympia_Collage_0-696x450.jpg"></Image>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/shawn-ray1-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Shawn Ray, preparando la competición</h3>
                            <p className="parrafo-img-body-builders">
                                La <strong>musculación</strong> es una disciplina que requiere tiempo, dedicación y esfuerzo. Como su propio nombre indica, su objetivo es el <strong>desarrollo de los músculos.</strong>
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dieta-lee-haney-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Dieta de Lee Haney</h3>
                            <p className="parrafo-img-body-builders">
                                Si eres nuevo en esto del culturismo quizás no te suene el nombre de Lee Haney y pienses "¿Quien demonios es este tío?". Lee Haney obstenta, ni más ni menos, el record de Mr.Olympias ganados...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/larry-scott1-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Larry Scott</h3>
                            <p className="parrafo-img-body-builders">
                                Larry Scott, "La leyenda", nació el 12 de octubre de 1938 en Blackfott (Idaho, EE UU). En su adolescencia era gimnasta, pero en la primavera del año en que cumplía 16 años comenzó su camino...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-arnold-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Los ejercicios de Arnold Schwarzenegger</h3>
                            <p className="parrafo-img-body-builders">
                                Dentro y fuera del gimnasio, Arnold Schwarzenegger seguía su propio estilo. Un estilo que solo le hubiera dejado una imagen de éxito si no se hubiera embarcado en su desastrosa aventura política. De todas...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/jay-cutler-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Rutina de Femorales de Jay Cutler</h3>
                            <p className="parrafo-img-body-builders">
                                Se conoce a Jay Cutler como una de las pocas personas que podían igualar e incluso superar el desarrollo de piernas de Ronnie Coleman, pero esto no siempre ha sido así. Siempre tuvo un...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/reg-park-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Rutinas de pecho de culturistas míticos ✓</h3>
                            <p className="parrafo-img-body-builders">
                                Hoy te traemos un ranking de diez de los hombres con el mayor desarrollo pectoral de la época dorada del culturismo  (aunque hay una par de infiltrados más actuales) y revelamos cómo cada uno...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dorian-yates.abdomen-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Rutina y entrenamiento abdominal por Dorian Yates</h3>
                            <p className="parrafo-img-body-builders">
                                En este artículo, Dorian Yates, el 6 veces Mr. Olympia (y de forma consecutiva) nos muestra su visión del entrenamiento abdominal. Puede que no estéis de acuerdo en alguno de sus planteamientos pero creo que...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/piramide-invertida2-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Entrenamiento de pirámide invertida (Por Lee Labrada)</h3>
                            <p className="parrafo-img-body-builders">
                                El Sistema de Pirámide recibe su nombre del hecho de hacer un ejercicio determinado aumentando el peso en cada serie hasta alcanzar el máximo kilaje previsto. En ese momento. reducimos el peso en cada...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/arnold-mejorar-gemelos-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Mejora tus gemelos con Arnold Schwarzenegger</h3>
                            <p className="parrafo-img-body-builders">
                                Arnold ha escrito multitud de artículos sobre entrenamiento culturista; este es uno de ellos, publicado en una conocida revista de musculación, donde Arnold nos muestra la mejor forma (para el) de conseguir unos grandes...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/fondos-pecho-696x392.jpg.webp"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Entrenamiento con fondos para pecho y tríceps</h3>
                            <p className="parrafo-img-body-builders">
                                Desde el desarrollo del gimnasio moderno, con toda su variedad de equipos de ejercicio, se hacen muy pocos entrenamientos contra resistencia en forma de calistenia o con el peso corporal.  La ausencia de movimientos con...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                    <Row className="block-big-body-builders">
                        <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dieta-phil-heat-696x392.jpg"></Image>
                        <Col className="data-img-body-builders">
                            <h3>Dieta de Phil Heath para volumen muscular</h3>
                            <p className="parrafo-img-body-builders">
                                Phil Heath nace en Seattle el 18 de Diciembre de 1979 y es profesional de la IFBB. Apodado "el regalo" jugo al baloncesto antes de volver al culturismo en 2002 en la universidad de Denver. Su...
                            </p>
                            <Button variant="outline-primary">Leer más</Button>
                        </Col>
                    </Row>
                        
                </Col>
                <Aside className="aside"/>
            </Row>
        </Container>
    )
}

export default BigBodybuildersTraining