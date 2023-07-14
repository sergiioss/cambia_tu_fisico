import './BuyProteinsSupplements.scss'
import {Col, Row, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const BuyProteinsSupplements = () => {

    return (

        <Container className="buyProteins-supplements">
            <Row className="first-section-buyProteins">
            <Breadcrumb></Breadcrumb>
                <Col className="body-buyProteins-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Batidos de proteínas, que son y cuales debemos comprar</h1>
                    <br />
                    <Row className="icons-buyProteins" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-buyProteins" src="https://www.cambiatufisico.com/wp-content/uploads/comprar-proteinas-696x464.jpg"></Image>
                    <br></br>
                    <section>
                        <p>
                            Si quieres comprar <strong>batidos proteínas</strong> estás en el lugar adecuado porque te vamos a recomendar las mejores proteínas que puedes adquirir.
                        </p>
                        <p>
                            Las <strong>proteínas</strong> son el pilar básico de cualquier programa de suplementación deportiva. Sus efectos para <strong>ganar músculo</strong> han sido ampliamente demostrados en diversos estudios.
                        </p>
                        <p>
                           <strong> Los batidos de proteínas</strong>, además de permitir llegar con más facilidad a la cantidad de proteínas que necesita nuestro cuerpo, nos facilitan organizarnos las comidas cuando nuestra rutina familiar y laboral nos roba la mayor parte de nuestro tiempo.
                        </p>
                        <Row className="square-buyProteins">
                            <p className="title-square-buyProteins">Contenidos</p>
                            <ul>
                                <li className="li-square-buyProteins">1 Que batidos de batidos de proteínas comprar</li>
                                <li>2 Qué son los batidos de proteína</li>
                                <li>3 Beneficios de tomar batidos de proteínas</li>
                                <li>4 Cómo y cuándo tomar los batidos de proteínas</li>
                                <li>5 ¿Necesitas tomar batidos de proteínas?</li>
                                <li>6 Nuestra recomendación para comprar proteínas</li>
                            </ul>
                        </Row>
                        <h3>Que batidos de batidos de proteínas comprar</h3>
                        <p>
                            Si ya sabes lo que son los batidos de proteínas y <strong>quieres comprar unos 100%</strong> efectivos con esta selección te lo pondremos fácil.
                        </p>
                        <p>
                            Los enlaces siguientes son <strong>solo válidos para compras en España</strong> a través de <strong>Amazon</strong> pero seguro que puedes encontrar los mismos productos en tu market local.
                        </p>
                        <h5>Proteína de suero</h5>
                        <p>
                            Esta proteína de marca reconocida y beneficios demostrados nunca falla.
                        </p>
                        <Row className="product-buyProteins">
                            <Row className="box-product-buyProteins">
                                <Image className="img-product-buyProteins-whey" src="https://m.media-amazon.com/images/I/61ALsbWEhIL._AC_SL1000_.jpg"></Image>
                                <Row className="data-product-buyProteins">
                                    <h5 className="title-product-buyProteins">
                                        Optimum Nutrition Gold Standard 100% Whey, Proteína en Polvo para Recuperacíon y Desarrollo...
                                    </h5>
                                    <li className="font-size-li-buyProteins">Gold Standard 100% WHEY de Optimum Nutrition es la proteína en polvo más vendida del mundo* diseñada para respaldar tu proceso de...</li>
                                    <li className="font-size-li-buyProteins">Proteína whey de RÁPIDA ABSORCIÓN con aislado de proteína de suero como ingrediente principal que ayuda a ganar músculo y favorece la...</li>
                                    <li className="font-size-li-buyProteins">La fórmula de proteína whey ON está certificada por Informed Choice, contiene BCAA y GLUTAMINA naturales y es BAJA EN AZÚCAR y grasa</li>
                                    <a href="https://www.amazon.es/amazonprime?tag=cambiatufis08-21" target="_blank"><Image src="https://www.cambiatufisico.com/wp-content/plugins/aawp/assets/img/icon-check-prime.svg"></Image></a>
                                    <Row className="block-button-buyProteins">
                                        <Button className="button-buyProteins" href="https://www.amazon.es/dp/B002DYIZH6?tag=cambiatufis08-21&linkCode=ogi&th=1&psc=1" target="_blank"><span className="icon-cart"></span>Comprar</Button>
                                    </Row>
                                </Row>
                            </Row>
                        </Row>
                        <br />
                        <Row className="box-buyProteins-parrafo">
                            <p className="buyProteins-square">
                            <strong className="title-red-buyProteins-square">Comprar la mejor proteína de suero</strong>
                            </p>
                        </Row>
                        <h5>Proteína de Caseína</h5>
                        <p>
                            Liberación sostenida de aminoácidos durante toda la noche. También puedes mezclarla con tu proteína de suero concentrada y obtener una mezcla con diferentes velocidades de absorción.
                        </p>
                        <p>
                            No se ha encontrado el producto.
                        </p>
                        <Row className="box-buyProteins-parrafo">
                            <p className="buyProteins-square">
                            <strong className="title-red-buyProteins-square">Comprar la mejor proteína de caseina</strong>
                            </p>
                        </Row>
                        <h5>Barritas de proteína de suero</h5>
                        <p>
                            Una de mis formas favoritas de llegar a mi ratio de proteínas son las <strong>barritas</strong>. También suponen una buena forma de aplacar las <strong>ganas de tomar dulce</strong> y son una recompensa saludable para tus duros entrenamientos.
                        </p>
                        <Row className="product-buyProteins">
                            <Row className="box-product-buyProteins">
                                <Image className="img-product-buyProteins" src="https://m.media-amazon.com/images/I/81ZY7frqFuL._AC_SL1500_.jpg"></Image>
                                <Row className="data-product-buyProteins">
                                    <h5 className="title-product-buyProteins">
                                        Marca Amazon - Amfit Nutrition Barrita de proteína baja en azúcar (19,6gr proteina - 0,8gr...
                                    </h5>
                                    <li className="font-size-li-buyProteins">Pack de 12 (12x60g)</li>
                                    <li className="font-size-li-buyProteins">Barrita de proteínas sabor a fondant de chocolate con una capa de caramelo sabor chocolate y cobertura sabor chocolate negro, con...</li>
                                    <li className="font-size-li-buyProteins">La fórmula de proteína whey ON está certificada por Informed Choice, contiene BCAA y GLUTAMINA naturales y es BAJA EN AZÚCAR y grasa</li>
                                    <a href="https://www.amazon.es/amazonprime?tag=cambiatufis08-21" target="_blank"><Image src="https://www.cambiatufisico.com/wp-content/plugins/aawp/assets/img/icon-check-prime.svg"></Image></a>
                                    <Row className="block-button-buyProteins">
                                        <Button className="button-buyProteins" href="https://www.amazon.es/dp/B002DYIZH6?tag=cambiatufis08-21&linkCode=ogi&th=1&psc=1" target="_blank"><span className="icon-cart"></span>Comprar</Button>
                                    </Row>
                                </Row>
                            </Row>
                        </Row>
                        <br />
                        <Row className="box-buyProteins-parrafo">
                            <p className="buyProteins-square">
                            <strong className="title-red-buyProteins-square">Comprar las mejores barritas de proteína de suero</strong>
                            </p>
                        </Row>
                        <h3>Qué son los batidos de proteína</h3>
                        <p>
                            La proteína de leche está compuesta por un <strong>80% de caseína</strong> y un <strong>20% de suero lácteo</strong> (whey). El suero es sin duda la proteína más popular actualmente.
                        </p>
                        <p>
                            Para descubrir que los batidos de proteínas no son nada mágico, ni químico, ni ilegal, observa la siguiente foto:
                        </p>                      
                    </section>
                    <Image className="img-buyProteins" src="https://www.cambiatufisico.com/wp-content/uploads/2016/01/proteina-de-suero.jpg"></Image>
                    <br></br>
                    <section>
                        <p>
                            El suero lácteo posee la calidad biológica más alta, es decir, esta proteína posee los aminoácidos más asimilables por el organismo humano. 
                        </p>
                        <p>
                            Existen diferentes <strong>tipos de suero lácteo,</strong> que se diferencian por su proceso de <strong>filtración</strong>. Tenemos de entrada el <strong>concentrado</strong>, que es la forma más simple, y, por lo tanto, las más barata. Las formas más avanzadas, más rápidamente digeribles son el <strong>isolado</strong> y el <strong>hidrolizado</strong>.
                        </p>
                    </section>
                    
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BuyProteinsSupplements