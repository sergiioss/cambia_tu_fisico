import './FatsNutrition.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const FatsNutrition = () => {

    return (

        <Container className="fats-nutrition">
            <Row className="first-section-fats-nutrition">
                <Col className="body-fats-nutrition" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Grasas, ¿Cuales debes tomar y en que cantidad?</h1>
                    <i>Descubre las grasas que debes tomar y en qué cantidades.</i>
                    <Row className="icons-fats-nutrition" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-fats-nutrition" src="https://www.cambiatufisico.com/wp-content/uploads/grasas-1-696x524.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>grasas</strong>, también denominadas <strong>lípidos</strong>, son una clase de compuestos orgánicos de elevado valor energético (9 kcal por g de grasas), y suelen encontrarse en forma de <strong>triglicéridos</strong> (es la forma más abundante de grasa en los alimentos y en los tejidos), fosfolípidos y esteroles (fundamentalmente colesterol).
                        </p>
                        <p>
                            Nuestro cuerpo acumula mucha más <strong>grasa</strong> que hidratos de carbono, y en estados de reposo, en actividades de baja intensidad, o cuando nuestro organismo ya ha agotado todos sus depósitos de HC, las <strong>grasas</strong> van a ser precisamente la principal fuente energética de nuestro organismo.
                        </p>
                        <p>
                            Esta <strong>grasa</strong> se comporta metabolizándose o transformándose para dar energía por medio de un proceso conocido como lipólisis (degradación de lípidos).
                        </p>
                        <Row className="square-fats-nutrition">
                            <p className="title-square-fats-nutrition">Contenidos</p>
                            <ul>
                                <li className="li-square-fats-nutrition">1 ¿Debemos consumir grasas?</li>
                                <li>2 Función de las grasas en nuestro cuerpo</li>
                                <li>3 Tipos de Grasas</li>
                                <li>4 Fuentes de grasa saludable y no saludable</li>
                                <li>5 Alimentos con grasas que te ayudan a perder peso</li>
                                <li>6 Grasas y Colesterol</li>
                                <li>7 Otros artículos relacionados con las grasas</li>
                            </ul>
                        </Row>
                        <h3>¿Debemos consumir grasas?</h3>
                        <p>
                            Pocos componentes de los alimentos han soportado un <strong>debate</strong> tan largo y controvertido como las grasas.
                        </p>
                        <p>
                            Primero estaban las organizaciones de salud, predicando que la mejor apuesta para mejorar tu salud y mantener la cintura en forma era evitar a toda costa los productos que contuvieran demasiada grasa. De repente, los frutos secos empezaron a oxidarse en las estanterías de las tiendas.
                        </p>
                        <p>
                            Luego vinieron los <strong>gurúes</strong> de las dietas lanzando al mercado la noticia de que toda la grasa -incluso la saturada- estaba libre de pecado, y que un plato de huevos fritos con patatas fritas y bacon no producía daños.
                        </p>
                        <p>
                            Ahora que ya parece haberse calmado el ruido de la batalla, lo que nos queda es la verdad: <strong>Que existen grasas buenas y malas.</strong>
                        </p>
                        <p>
                            Si consumís en exceso estas últimas, es muy probable que pronto acabéis en la consulta del cardiólogo. Si apenas probáis las grasas buenas, dañareis vuestra salud y pondréis en peligro vuestros progresos en el gimnasio.
                        </p>
                        <h3>Función de las grasas en nuestro cuerpo</h3>
                        <p>
                            Las grasas (lípidos) desempeñan cinco funciones principales dentro del cuerpo:
                        </p>
                        <li>1. Como deposito abundante y concentrado de energía</li>
                        <li>2. Para proteger los órganos</li>
                        <li>3. Como aislante</li>
                        <li>4. Como medio de transporte para las vitaminas liposolubles (Por ej. Vit.a,e,d…)</li>
                        <li>5. Para suministrar ácidos grasos esenciales.</li>
                        <br />
                        <p>
                            Además del riesgo de engordar, el consumo excesivo de grasa de manera crónica también ha sido relacionado con varias enfermedades metabólicas y otras que suponen una amenaza para la vida, como la diabetes, y las enfermedades cerebrovasculares y cardiovasculares.
                        </p>
                        <p>
                            Sin embargo, consumir muy pocas grasas también puede causar problemas ya que se ha demostrado que se obstaculiza la producción de testosterona y pueden aumentar los síntomas de malnutrición relacionados con las vitaminas liposolubles (A,D,E y K).
                        </p>
                        <p>
                            Además de mejorar el funcionamiento de los nervios, las hormonas y las articulaciones, las grasas dietéticas son esenciales para absorber las vitaminas liposolubles A, D, E y K. Esa es una razón más por la que es tan importante que el consumo de grasas esté entre el 15% y el 20% del total de calorías diarias.
                        </p>
                        <p>
                            Para sacarle el máximo partido a las grasas que consumes, asegúrate de que provienen de las fuentes correctas.
                        </p>
                        <p>
                            Es el macronutriente más calórico, proporciona 9 calorías por gramo.
                        </p>
                        <h3>Tipos de Grasas</h3>
                        <h5>Grasas Saturadas</h5>
                        <p>
                            Formadas mayoritariamente por ácidos grasos saturados son las llamadas “grasas malas”. Aparecen por ejemplo en el tocino, en el sebo, en las mantecas de cacao o de cacahuete, etc. Este tipo de grasas es sólida a temperatura ambiente y elevan los niveles plasmáticos de colesterol malo. Ejemplos: sebos y mantecas.
                        </p>
                        <Row className="box-fats-parrafo">
                            <p className="fats-nutrition-square">
                            Más información sobre las <strong className="title-red-fats-square">grasas saturadas.</strong>
                            </p>
                        </Row>
                        <h5>Grasas Insaturadas</h5>
                        <p>
                            Formadas principalmente por ácidos grasos insaturados como el oleico o el palmitoleico. Son líquidas a temperatura ambiente y comúnmente se les conoce como aceites.
                        </p>
                        <p>
                            Son las más beneficiosas para el cuerpo humano por sus efectos sobre los lípidos plasmáticos y algunas contienen ácidos grasos que son nutrientes esenciales, ya que el organismo no puede fabricarlos y el único modo de conseguirlos es mediante ingestión directa.
                        </p>
                        <p>
                            Las grasas insaturadas pueden subdividirse en:
                        </p>
                        <p>
                            <strong>Grasas Monoinsaturada</strong> : Son las que reducen los niveles plasmáticos de colesterol asociado a las lipoproteínas LDL (las que popularmente se denominan “colesterol malo”). Se encuentran en el aceite de oliva, el aguacate, y algunos frutos secos.
                        </p>
                        <Row className="box-fats-parrafo">
                            <p className="fats-nutrition-square">
                            Más información sobre las <strong className="title-red-fats-square">grasas monoinsaturadas.</strong>
                            </p>
                        </Row>
                        <p>
                           <strong> Grasas Polinsaturadas (con ácidos grasos omega-3 y omega-6)</strong>: Los efectos de estas grasas sobre los niveles de colesterol plasmático dependen de la serie a la que pertenezcan los ácidos grasos constituyentes.
                        </p>
                        <p>
                            Así, por ejemplo, las grasas ricas en ácidos grasos de la serie omega-6 reducen los niveles de las lipoproteínas LDL (“colesterol malo”) y HDL (“colesterol bueno”), incluso más que las grasas ricas en ácidos grasos monoinsaturados. Por el contrario, las grasas ricas en ácidos grasos de la serie omega-3 tienen un efecto más reducido.
                        </p>
                        <p>
                            Se encuentran en la mayoría de los pescados azules (bonito, atún, salmón, etc.), semillas oleaginosas y algunos frutos secos (nuez, almendra, avellana, etc.). En Europa ya se consumen abundantes cantidades de grasas del tipo Omega 6, gracias al uso de aceites vegetales. Pero además, se recomienda tomar más grasas Omega 3, ya que se cree que refuerzan la salud del corazón, y colaboran en las funciones cerebrales y oculares.
                        </p>
                        <Row className="box-fats-parrafo">
                            <p className="fats-nutrition-square">
                            Más información sobre las <strong className="title-red-fats-square">grasas poliinsaturadas.</strong>
                            </p>
                        </Row>
                        <h5>Grasas Transaturadas</h5>
                        <p>
                            Los aceites parcialmente hidrogenados, presentes por doquier en los alimentos procesados y en la comida rápida, han demostrado que pueden dañar las arterias. Algunos estudios muestran que los aceites trans reducen el colesterol bueno (HDL) y aumentan el malo (LDL) en la sangre.
                        </p>
                        <p>
                            Debido a que la administración no obliga a los fabricantes a incluir el contenido de grasas del tipo trans en las etiquetas de los productos, resulta complicado saber cuántas de estas grasas estamos consumiendo, pero normalmente todos los fritos (patatas, pescado, comida rápida), los artículos de bollería industrial, donuts, galletitas y snacks (bolsas de aperitivo) normalmente son ricos en grasas del tipo trans.
                        </p>
                        <Row className="box-fats-parrafo">
                            <p className="fats-nutrition-square">
                            Más información sobre las <strong className="title-red-fats-square">grasas transaturadas.</strong>
                            </p>
                        </Row>
                        <h3>Fuentes de grasa saludable y no saludable</h3>
                        <p>
                            Para sacarle el máximo partido a las <strong>grasas</strong> que consumes, asegúrate de que provienen de las fuentes correctas. Busca las grasas monoinsaturadas y polinsaturadas y evita las saturadas y transaturadas.
                        </p>
                        <p>
                            Las <strong>grasas saturadas</strong> no son una parte esencial de la dieta, ya que el cuerpo humano puede producirlas por si mismo. Los expertos coinciden en que solo deberían constituir un 10% del total de las grasas dietéticas que se consuman cada día.
                        </p>
                        <p>
                            Evita su uso o limita el consumo de estos alimentos o de los que estén preparados con ellos a momentos puntuales. Los expertos recomiendan que nunca se debería superar el 5% del total de calorías procedentes de las grasas saturadas.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default FatsNutrition