import './ProteinsSupplements.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const ProteinsSupplements = () => {

    return (

        <Container className="proteins-supplements">
        <Row className="first-section-proteins-supplements">
        <Breadcrumb></Breadcrumb>
            <Col className="body-proteins-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Suplementos de Proteína, todo lo que necesitas saber</h1>
                <i>Los suplementos de proteínas SI funcionan. Aquí te enseñamos a tomarlos.</i>
                <Row className="icons-proteins-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-proteins-supplements" src="https://www.cambiatufisico.com/wp-content/uploads/suplementos-proteinas1-696x392.jpg.webp"></Image>
                <section>
                    <p>
                        Los <strong>suplementos de proteína</strong> son el producto estrella en la actualidad, tanto por el marketing intensivo de las marcas de suplementos como por su <strong>efectividad real.</strong>
                    </p>
                    <p>
                        Para mí, no son realmente un suplemento; los considero <strong>comida</strong>, procesada, es cierto, pero muy adecuada y útil.
                    </p>
                    <Row className="square-proteins-supplements">
                        <p className="title-square-proteins-supplements">Contenidos</p>
                        <ul>
                            <li className="li-square-proteins-supplements">1 Qué son los suplementos de proteínas</li>
                            <li>2 ¿Necesitas suplementos de proteínas?</li>
                            <li>3 El batido de proteínas post-entrenamiento</li>
                            <li>4 Tipos de suplementos de proteínas</li>
                            <li>5 Conclusiones al tomar suplementos de proteínas</li>
                            <li>6 Artículos sobre la suplementación con proteínas</li>
                        </ul>
                    </Row>
                    <h3>Qué son los suplementos de proteínas</h3>
                    <p>
                        La mayoría de los suplementos de proteínas proceden de <strong>proteínas lácteas</strong>. Algunos sólo emplean <strong>suero</strong>, y otros, una combinación de suero y <strong>caseína</strong>.
                    </p>
                    <p>
                        La ventaja del suero es que se digiere con rapidez, si bien algunos estudios sugieren que también podría ser una desventaja.
                    </p>
                    <p>
                        Los investigadores hallaron que se metabolizaba <strong>demasiado rápido</strong> como para aportar al cuerpo una cantidad suficiente de proteínas pasado el margen de las cuatro horas.
                    </p>
                    <p>
                        La <strong>caseína</strong> se digiere a un ritmo más lento, y por eso aporta aminoácidos generadores de músculo más tiempo después de comer.
                    </p>
                    <p>
                        Las proteínas completas de la leche se componen de casi un 80% de caseína y un 20% de suero. y en este caso la <strong>naturaleza parece haberlo hecho bien.</strong>
                    </p>
                    <p>
                        Por tanto, si vas a tomar algún <strong>suplemento de proteínas</strong> -y yo lo hago todos los días- tal vez obtengas los mejores resultados con uno que contenga una <strong>mezcla de ambas proteínas de la leche.</strong>
                    </p>
                    <h3>¿Necesitas suplementos de proteínas?</h3>
                    <p>
                        Durante los periodos de <strong>entrenamiento intensivos</strong> o cuando se inicia un periodo de trabajo luego de una temporada de descanso, las necesidades proteicas aumentan notablemente.
                    </p>
                    <Row className="image-center">
                        <Image src="https://www.cambiatufisico.com/wp-content/uploads/suplementos-proteicos.jpg"></Image>
                    </Row>
                    <p>
                        Por este motivo y a pesar de las controversias existentes en la literatura se acepta que las necesidades de proteínas en las personas que realizan actividad física sistemática son superiores a 0.8 o 1 gr por kg por día, especialmente cuando el ejercicio es intenso y voluminoso, se desea desarrollar masa muscular, o se realiza dieta hipocalórica para bajar de peso.
                    </p>
                    <p>
                        Si bien las cantidades recomendadas pueden parecer de fácil consumo, para muchas personas esto no es siempre factible.
                    </p>
                    <p>
                        Por ejemplo un sujeto que pese ~70 kg y que deba consumir una cantidad mínima de proteínas de 1.4 gr por kg de peso corporal debería ingerir cerca de 100 gr de proteínas puras, o aproximadamente unas 40 claras de huevo o 460 gr de pollo.
                    </p>
                    <p>
                        Entonces es donde entra la posibilidad de <strong>consumir proteínas en forma de suplemento alimenticio. </strong>
                    </p>
                    <h3>El batido de proteínas post-entrenamiento</h3>
                    <p>
                        Antes del entrenamiento es más importante complementarse de <strong>carbohidratos</strong>, porque es el que provee de energía precisada para entrenar. <strong>Posterior al entrenamiento es importante juntar tanto carbohidratos y proteínas.</strong>
                    </p>
                    <p>
                        Si se tuvo un entrenamiento muy duro y la intensidad fue bastante alta, se necesita de energía y una cantidad precisa de proteína, es aquí donde el <strong>batido proteico es muy importante.</strong>
                    </p>
                    <p>
                        La mejor manera de ingerir la proteína de forma líquida es <strong>mezclándola con agua de forma que el cuerpo absorba los nutrientes que necesita rápidamente.</strong>
                    </p>
                    <p>
                        Si se utiliza una comida sólida, como un filete y arroz,demora mucho para ser digerido por el cuerpo lo que perjudica la recuperación después del entrenamiento.
                    </p>
                    <p>
                        Una sugerencia podría ser puede mezclar (60 a 70 grs, o hasta 1 gramos por kilo de peso corporal) de carbohidratos, después creatina (hasta 5 gramos) y por último unos 30-40 gramos de un suplemento de <strong>proteína de suero</strong>, idealmente con proteínas con diferente velocidad de asimilación (por ejemplo suero + caseína).
                    </p>
                    <p>
                        Al ingerir proteína de suero después del entrenamiento, el cuerpo utilizará la proteína como energía lo que será pérdida de dinero, es por ello que <strong>se debe mezclar a la proteína con carbohidrato</strong>s, esto es muy importante.
                    </p>
                    <h3>Tipos de suplementos de proteínas</h3>
                    <p>
                        Puede que algunos de vosotros no seáis conscientes de que existen distintos tipos de proteínas para diferentes propósitos.
                    </p>
                    <Row className="image-center">
                        <Image src="https://www.cambiatufisico.com/wp-content/uploads/suplementos-de-proteinas-1.jpg"></Image>
                    </Row>
                    <p>
                        Como culturistas sabéis perfectamente que los músculos se componen de proteínas y por tanto sin un generoso aporte de éstas en la dieta es muy difícil lograr construir grandes músculos.
                    </p>
                    <p>
                        Pero cuando se busca obtener los máximos resultados, el tipo de proteína y el momento en que se consume constituyen la clave de los progresos.
                    </p>
                    <p>
                        Mi recomendación personal es comenzar con una buena proteína básica, como un concentrado de suero y ver qué resultados obtenéis de esa fuente antes de empezar a comprar los aislados de proteína de suero o los hidrolizados y gastaros considerablemente más dinero.
                    </p>
                </section>
            </Col>
            <Aside className="aside"/>  
        </Row>
    </Container>
    )
}

export default ProteinsSupplements