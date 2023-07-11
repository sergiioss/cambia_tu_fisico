import './OtherSupplements.scss'
import {Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const OtherSupplements = () => {

    return (

        <Container className="other-supplements">
            <Row className="first-section-other-supplements">
                <Col className="body-other-supplements-main" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>OTROS SUPLEMENTOS</h1>
                    <i>
                    <p>
                        Ya te hemos contado en otras secciones de la web que los suplementos más efectivos son la <strong> proteína de suero y la creatina</strong> pero existen otros suplementos menos conocidos.
                    </p>
                    <p>
                        Algunos son efectivos, otros <strong>puro marketing</strong>. Descubre cuales pueden darte ese impulso adicional que necesitas para cambiar tu físico y cuales solo se te harán perder dinero.
                    </p>
                    <p>
                        Como siempre, recuerda que una <strong>dieta variada con alimentos</strong> de calidad te proporcionará el 99% de los nutrientes necesarios para conseguir tus objetivos.
                    </p>
                    </i>
                    <Row className="icons-other-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Row className="double-img-other">
                        <Row className="img-other-supplements">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-other" src="https://www.cambiatufisico.com/wp-content/uploads/cbd-deportistas-696x464.jpg"></Image></a>
                        </Row>
                        <Row className="img-other-supplements">
                            <a className="img-fluid" href="https://www.google.com/"><Image className="image-other" src="https://www.cambiatufisico.com/wp-content/uploads/gaba-estres-696x464.jpg"></Image></a>
                        </Row>
                    </Row>
                </Col>
                <Col className="body-other-supplements">
                    <section>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/carnitina1-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Carnitina y su efectividad para perder peso</h3>
                                <p>
                                    La carnitina es un aminoácido que se elabora en el hígado, y su utilización parece estar justificada en deportes de tipo aeróbico, ya que se la relaciona con el acceso de ácidos grasos de...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/aspartamo-es-peligroso-696x391.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Aspartamo, ¿es realmente peligroso?</h3>
                                <p>
                                    Hace más de 20 años que se utiliza el aspartamo como "azúcar falso". El aspartamo es un edulcorante a base de aminoácidos (éster metílico del dipéptido L aspartil-L-fenilalanina) que se transforma en aspartato, fenilalanina y metanol en nuestro...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/HMB-696x464.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">HMB, análisis y acción de este suplemento</h3>
                                <p>
                                    El HMB vuelve a ponerse de moda desde que anuncian alimentos complementados con esta sustancia... ¿Pero que es exactamente? ¿Es eficaz? El beta-hidroxi-beta-metilbutirato conocido en el mundo de los suplementos como HMB es un metabolito...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/mass-gainers-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Ganadores de peso (Mass Gainers)</h3>
                                <p>
                                    Los ganadores de peso o Mass Gainers se componen mayoritariamente de glúcidos (azúcares) y un 20-30% de proteínas y son bastante ricos en calorías. Con tal de reducir el coste de estos ganadores de peso y permitir que lleguen al...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/bloqueadores-carbohidratos-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Bloqueadores de carbohidratos, análisis completo</h3>
                                <p>
                                    En la búsqueda de pérdida de peso y un físico libre de grasa son muchos los que buscan esa "fórmula mágica" para conseguirlo sin esfuerzo... y uno de los protagonistas son los bloqueadores de...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/glucosamina1-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Glucosamina, suplemento para las articulaciones</h3>
                                <p>
                                    El sulfato de glucosamina es un precursor de los glucosaminoglucanos, el segundo componente de los cartílagos, los tendones y los ligamentos después del colágeno. Nuestro cuerpo produce naturalmente glucosamina a partir de un azúcar y...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/dopaje2-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Esteroides</h3>
                                <p>
                                    Nunca hemos hablado en cambiatufisico del tema de los esteroides, ciertamente suele crear un debate estúpido y sin sentido. Personalmente hace tiempo que elegí seguir el camino del culturismo natural, después de todo no vivo...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                        <Row className="block-big-body-builders">
                            <Image className="img-big-body-builders" src="https://www.cambiatufisico.com/wp-content/uploads/prohormonales1-696x392.jpg"></Image>
                            <Col className="data-img-body-builders">
                                <h3 className="parrafo-img-body-builders">Pro-Hormonales</h3>
                                <p>
                                    Las pro-hormonas esteroideas, tales como la androstendiona, norandrostendiona y dehidroepiandrosterona (DHEA) son precursoras o «ladrillos de construcción» de la molécula de testosterona. Cuando se consumen, éstas se convierten en testosterona dentro del organismo. En teoría,...
                                </p>
                                <Button variant="outline-primary">Leer más</Button>
                            </Col>
                        </Row>
                    </section>
                </Col>
                <Aside className="aside padding-rigth"/>  
            </Row>
        </Container>
    )
}

export default OtherSupplements