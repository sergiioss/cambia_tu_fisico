import './DietsAndNutritionWomen.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const DietsAndNutritionWomen = () => {

    return (
        <Container className="dietsAndNutrition-women">
            <Row className="first-section-dietsAndNutrition-women">
                <Breadcrumb></Breadcrumb>
                <Col className="body-dietsAndNutrition-women" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Dietas y Nutrición para mujeres</h1>
                    <br />
                    <Row className="icons-dietsAndNutrition-women" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-dietsAndNutrition-women" src="https://www.cambiatufisico.com/wp-content/uploads/Dietas-mujer1-696x392.jpg"></Image>
                    <section>
                        <p>
                            No es fácil encontrar cual es la <strong>dieta</strong> que mejor se nos ajusta y puede llevar mucho tiempo encontrar esa dieta que de verdad nos funciona, nos hace sentirnos nutridos y además nos permite conseguir nuestros <strong>objetivos deportivos</strong>.
                        </p>
                        <p>
                            Pero no hay que desanimarse, es un proceso normal que hasta los culturistas, con sus amplios conocimientos en nutrición tardan mucho tiempo en conseguir.
                        </p>
                        <p>
                            Dado lo <strong>peligroso</strong> de  dar una dieta por Internet (sobretodo para bajar de peso) sin conocer las circunstancias personales, te explicaremos la dieta basada en intercambios para que seas tú, según tus necesidades y circunstancias personales quien  elabore su propia dieta.
                        </p>
                        <li className="li-dietsAndNutrition-sublist">Dieta por Intercambios para mujeres</li>
                        <li className="li-dietsAndNutrition-sublist">Dietas competitivas para mujeres fitness y culturistas</li>
                        <br />
                        <p>
                            Recuerda también que si combinas las dietas con ejercicio de musculación y aeróbico es especialmente importante alimentarte correctamente antes y después del entrenamiento para recuperar nuestros niveles normales de energía.
                        </p>
                        <p>
                            No olvides los fundamentos de entrenamiento para mujer y échale un ojo a las siguientes rutinas de ejercicio para combinar con tu dieta.
                        </p>           
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default DietsAndNutritionWomen;