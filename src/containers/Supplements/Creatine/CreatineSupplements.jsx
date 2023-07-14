import './CreatineSupplements.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const CreatineSupplements = () => {

    return (

        <Container className="creatine-supplements">
            <Row className="first-section-creatine-supplements">
            <Breadcrumb></Breadcrumb>
                <Col className="body-creatine-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Creatina, el mejor suplemento para ganar masa muscular y fuerza</h1>
                    <br />
                    <Row className="icons-creatine-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-creatine-supplements" src="https://www.cambiatufisico.com/wp-content/uploads/creatina-1-696x461.jpg.webp"></Image>
                    <section>
                        <p>
                            El reconocimiento de la <strong>utilización de creatina</strong> por parte de atletas de todos los deportes y preparadores físicos ha hecho que ésta pase a ser considerada como una especie de poción mágica.
                        </p>
                        <p>
                            Favorece el <strong>rendimiento deportivo</strong>, especialmente en esfuerzos de carácter anaeróbico (breves y explosivos) y es muy útil en los <strong>ejercicios de gimnasio con pesas</strong>, para personas que buscan <strong>aumentar su musculatura</strong> sin necesidad de acudir a los fármacos.
                        </p>
                        <p>
                            Aquí te enseñamos lo que debes saber sobre este magnífico suplemento.
                        </p>
                        <Row className="square-creatine-supplements">
                            <p className="title-square-creatine-supplements">Contenidos</p>
                            <ul>
                                <li className="li-square-creatine-supplements">1 La creatina de un vistazo</li>
                                <li>2 ¿Que es la creatina?</li>
                                <li>3 Como tomar la creatina</li>
                                <li>4 Que creatina comprar</li>
                                <li>5 Creatina y aumento de masa muscular</li>
                                <li>6 Ventajas de tomar creatina</li>
                                <li>7 Efectos negativos de la creatina</li>
                                <li>8 Tipos de creatina</li>
                                <li>9 Otros artículos sobre la creatina</li>
                            </ul>
                        </Row>
                        <h3>La creatina de un vistazo</h3>
                        <p>
                            Según estudios, los suplementos orales de <strong>monohidrato de creatina</strong> (20-25 g/día, en 4 tomas al día durante 5 días) producen un incremento de creatina en el contenido muscular de un 20%, y si durante el período de suplementación se realiza ejercicio submáximo o de <strong>fuerza</strong>, como por ejemplo, el <strong>hipertrófico</strong> (para aumentar masa muscular), la captación se estimula aún más.
                        </p>
                        <p>
                            Una vez saturados los depósitos de <strong>creatina</strong>, éstos permanecerán elevados durante 6-8 semanas, especialmente si se utilizan dosis de mantenimiento de 2-5 gramos por día.
                        </p>
                        <p>
                            La <strong>creatina</strong> debe tomarse antes de las comidas o después del <strong>entrenamiento</strong>, disuelta en zumo o añadiéndole algún carbohidrato simple (mejoran su absorción).
                        </p>
                        <h3>¿Que es la creatina?</h3>
                        <p>
                            La <strong>creatina</strong> es un compuesto sintetizado en el hígado, páncreas y riñón a partir de tres <strong>aminoácidos</strong> (arginina, glicina y metionina).
                        </p>
                        <p>
                            Por s, si los músculos pequeños son ejercitados al principio de la sesión, pueden provocar una fatiga prematura general, impidiendo luego el óptimo rendimiento de los grupos musculares grandes.
                        </p>
                        <Row className="image-center">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/creatina-volumen.jpg"></Image>
                        </Row>
                        <p>
                            Además, la creatina también se encuentra en la dieta, especialmente en el pescado, en la carne y en otros productos animales, y en cantidades insignificantes en algunos vegetales.
                        </p>
                        <p>
                            Una persona de 70 kilos tiene unos <strong>depósitos de creatina</strong> de unos 120 gramos. Alrededor del 95% se encuentra en la musculatura.
                        </p>
                        <p>
                            El resto de la creatina se reparte entre el corazón , los espermatozoides, la retina y el cerebro. Las necesidades diarias de creatina para esta persona son de unos <strong>dos gramos.</strong>
                        </p>
                        <p>
                            En general, la mitad se obtiene a través de la dieta y, el resto, lo sintetiza el propio cuerpo. Los suplementos de creatina que consumen los deportistas son una versión sintética de la sustancia que fabrica el cuerpo y se ingiere diariamente con la dieta.
                        </p>
                        <p>
                            De todas formas, se debe tener en cuenta que si bien se ha hablado mucho sobre la creatina en los últimos tiempos, los estudios realizados hasta la fecha no alcanzan para afirmar con certeza si esta sustancia es realmente efectiva para todas las personas y si puede llegar a tener algún efecto secundario no deseado.
                        </p>
                        <p>
                            Sin embargo, muchos deportistas han hallado en la creatina una <strong>fuente de potencia y vigor</strong> que les permite entrenar con mayor intensidad obteniendo mejores resultados.
                        </p>
                        <h3>Como tomar la creatina</h3>
                        <p>
                            Cuando se realiza la suplementación con creatina lo que se busca es aumentar la concentración de creatina en el músculo hasta llevarla a su concentración máxima fisiológica que es de 150 a 160 mmol/kg de músculo seco.
                        </p>
                        <Row className="image-center">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/creatina-masa-muscular-1.jpg"></Image>
                        </Row>
                        <h5>Fase de carga</h5>
                        <p>
                            Algunas fuentes sugerían hasta hace no mucho tiempo que se comenzara con un período llamado de carga para que la célula pudiera almacenar creatina hasta llegar al máximo de sus posibilidades.
                        </p>
                        <p>
                            Se recomendaba que se extendiera esta fase durante, al menos, 5 o 6 días en los cuales se consumían entre 4 y 5 dosis de unos 5 gramos de monohidrato de creatina en total a lo largo de todo el día (antes del desayuno, almuerzo y cena y antes y después de la actividad física).
                        </p>
                        <p>
                            En la actualidad el <strong>período de carga</strong> se utiliza en deportes como el “culturismo” y en situaciones donde el objetivo primordial es el aumento rápido de peso y masa muscular.
                        </p>
                        <h5>Fase de mantenimiento</h5>
                        <p>
                            Después de esta etapa de carga se continuaba con el <strong>período de mantenimiento</strong> que tenía por objetivo mantener el nivel de creatina obtenido durante la carga, ya que se supone que las células han alcanzado su capacidad máxima en esta primera fase y los depósitos no seguirán creciendo.
                        </p>
                        <p>
                            El organismo se encargará de eliminar el exceso de creatina por vía renal, por ello, en esta etapa de mantenimiento, el objetivo principal es reestablecer las concentraciones de creatina obtenidas anteriormente.
                        </p>
                        <p>
                            En esta fase se administran entre 2.5 a 5 gramos de creatina <strong>después del entrenamiento</strong>.
                        </p>
                        <h5>Creatina con hidratos de carbono</h5>
                        <p>
                            Debería consumirse después del entrenamiento con una fuente de hidratos de carbono, ya que después de entrenar es cuando nuestro cuerpo es capaz de absorber una mayor cantidad de nutrientes.
                        </p>
                        <p>
                            Numerosas fuentes afirman que la asimilación de creatina depende, en parte, de la presencia en concentraciones elevadas de <strong>insulina</strong>. Es por ello que aconsejan su consumo con hidratos de carbono en una <strong>proporción de aproximadamente 1/6.</strong>
                        </p>
                        <p>
                            De esta forma para 2.5 gramos de creatina le corresponderían 15 gramos de hidratos de carbono puros, como por ejemplo 200 ml de zumo de naranja o piña naturales.
                        </p>
                        <p>
                            Se debe evitar que éstos últimos estén fríos ya que las bajas temperaturas reducen la <strong>absorción</strong> en el estómago.
                        </p>
                        <p>
                            ¿Por qué se ingieren hidratos de carbono? Porque éstos harán que el páncreas libere insulina en sangre y ésta estimulará la absorción de glucosa, aminoácidos y creatina.
                        </p>
                        <h5>Aumentar la ingesta de agua</h5>
                        <p>
                            Otra recomendación es mantener una ingesta alta de líquidos (200 a 250 ml de agua agregados al consumo habitual por cada 2.5 gramos de creatina) ya que la creatina necesita agua para almacenarse y si la disponibilidad de ésta es mínima, su absorción disminuirá así como su retención dentro de la célula.
                        </p>
                        <p>
                            Además, es altamente recomendada la reducción o eliminación del consumo de café ya que éste disminuye la absorción intestinal y la retención de creatina en las células.
                        </p>
                        <p>
                            ¿A qué se debe esto? A que el café tiene poderes diuréticos que afectan, en gran medida, la hidratación celular.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default CreatineSupplements