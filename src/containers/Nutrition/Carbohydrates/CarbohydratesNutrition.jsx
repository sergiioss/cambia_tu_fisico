import './CarbohydratesNutrition.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const CarbohydratesNutrition = () => {

    return (

        <Container className="carbohydrates-nutrition-training">
            <Row className="first-section-carbohydrates-nutrition">
            <Breadcrumb></Breadcrumb>
                <Col className="body-carbohydrates-nutrition" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Carbohidratos, como dominar el combustible de tus músculos</h1>
                    <i>Cómo consumir los carbohidratos que tu cuerpo necesita.</i>
                    <Row className="icons-carbohydrates-nutrition" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-carbohydrates-nutrition" src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-4.jpg"></Image>
                    <section>
                        <p>
                            Los <strong>hidratos de carbono</strong> (HC), también denominados glúcidos, <strong>carbohidratos</strong> o, vulgarmente, azúcares, están considerados como la fuente de energía preferida por el organismo humano, tanto para las actividades físicas como mentales.
                        </p>
                        <p>
                            Un fallo muy habitual cuando empezamos en el gimnasio es solo preocuparnos de las proteínas. Tanto si estás intentando <strong>perder peso</strong> como <strong>ganar masa muscular</strong>, los carbohidratos son el «interruptor» que debes controlar para conseguir tus objetivos.
                        </p>
                        <Row className="square-carbohydrates-nutrition">
                            <p className="title-square-carbohydrates-nutrition">Contenidos</p>
                            <ul>
                                <li className="li-square-carbohydrates-nutrition">1 Qué son los carbohidratos</li>
                                <li>2 Porqué son importantes los carbohidratos</li>
                                <li>3 ¿Engordan los carbohidratos?</li>
                                <li>4 Tipos de carbohidratos</li>
                                <li>5 Mejores carbohidratos que puedes tomar</li>
                                <li>6 Cuántos carbohidratos comer al día</li>
                                <li>7 Otros artículos sobre los carbohidratos</li>
                            </ul>
                        </Row>
                        <h3>Qué son los carbohidratos</h3>
                        <Row className="img-carbohydrates-nutrition">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-1-1.jpg"></Image>
                        </Row>
                        <p>
                            Los <strong>carbohidratos</strong> o hidratos de carbono, fundamentalmente el glucógeno y la glucosa, constituyen el sustrato energético más importante para la <strong>fibra muscular</strong> activa durante el ejercicio físico, de tal forma que una de las principales causas de fatiga muscular se asocia a la falta de disponibilidad de carbohidratos para la obtención de energía.
                        </p>
                        <p>
                            Si no existe una disponibilidad adecuada de glucosa durante el ejercicio, la intensidad de éste disminuirá, ya que la energía proveniente de la oxidación de los <strong>lípidos</strong> y/o de las <strong>proteínas</strong> no genera tanta energía por unidad de tiempo como los hidratos de carbono.
                        </p>
                        <p>
                            El concepto de energía en relación con el rendimiento, el bienestar y la salud se basa en una <strong>dieta de</strong> <strong>hidratos de carbono</strong> junto con un <strong>control de las grasas</strong>.
                        </p>
                        <p>
                            Tienen un valor calórico de 4 calorías por gramo.
                        </p>
                        <h3>Porqué son importantes los carbohidratos</h3>
                        <Row className="img-carbohydrates-nutrition">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-2.jpg"></Image>
                            <i>
                                Los carbohidratos son el combustible principal de tus músculos. Si no tomas los recomendados estás limitando tu crecimiento.
                            </i>
                        </Row>
                        <p>
                            Si vuestra dieta es baja en carbohidratos notaréis la falta de energía. Os sentiréis débiles y tensos. Os faltará concentración y perderéis memoria.
                        </p>
                        <p>
                            El entrenamiento con pesos es una actividad de gran intensidad y por ello depende de la glucosa como fuente de energía.
                        </p>
                        <p>
                            Así pues, asegurar un aporte de <strong>carbohidratos</strong> a las fibras musculares activas durante todo el tiempo que sea necesario, resulta esencial no sólo para retrasar la aparición de la fatiga, sino también para elevar el rendimiento deportivo. La ingesta de hidratos de carbono es fundamental en cualquier tipo de situación deportiva, pero especialmente en aquéllas que su duración es superior a una hora.
                        </p>
                        <h3>¿Engordan los carbohidratos?</h3>
                        <Row className="img-carbohydrates-nutrition">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/carbohidratos-3.jpg"></Image>
                        </Row>
                        <p>                            
                            Contrariamente a lo que se piensa los carbohidratos en si mismos no engordan… pero un consumo excesivo y continuo de grasas y de calorías totales hará que engordéis, ya que cualquier exceso de carbohidratos será procesado y acumulado en forma de grasa corporal.
                        </p>
                        <p>
                            Por otra parte, no consumir los suficientes carbohidratos puede poner en riesgo las ganancias musculares, el metabolismo y el nivel de energía, por no mencionar algunos problemas potencialmente negativos de las dietas cetogénicas (bajas en carbohidratos y altas en grasas y proteínas).
                        </p>
                        <h3>Tipos de carbohidratos</h3>
                        <p>
                            Podemos clasificar los <strong>hidratos de carbono</strong> en dos grandes categorías: simples y complejos.
                        </p>
                        <p>
                            Los <strong>carbohidratos</strong> simples o sencillos están formados por una o dos unidades de azúcar. Entre ellos están: la glucosa (dextrosa), la fructosa (azúcar de la fruta), la sacarosa (azúcar de caña o típico azúcar de mesa, que consta de una molécula de fructosa y glucosa) y la lactosa (azúcar de la leche, que consta de una molécula de glucosa y galactosa).
                        </p>
                        <p>
                            Los <strong>carbohidratos</strong> complejos son moléculas mucho más grandes formadas, a su vez, por numerosas moléculas de azúcar (en su mayor parte glucosa), y están representados por alimentos como la pasta, el arroz, los cereales, las patatas, el pan, las verduras, etc., siendo éstos los que deben prevalecer en nuestra dieta.
                        </p>
                        <h5>Azúcares</h5>
                        <p>
                            La glucosa y la fructosa son azúcares simples o monosacáridos y se pueden encontrar en las frutas, las verduras y la miel. Cuando se combinan dos azucares simples se forman los disacáridos.
                        </p>
                        <p>
                            El azúcar de mesa o la sacarosa es una combinación de glucosa y fructosa que se da de forma natural tanto en la remolacha y la caña de azúcar, como en las frutas. La lactosa es el azúcar principal de la leche y los productos lácteos y la maltosa es un disacárido de la malta.
                        </p>
                        <h5>Oligosacáridos</h5>
                        <p>
                            Cuando se combinan entre 3 y 9 unidades de azúcar se forman los oligosacáridos. La rafinosa, la estaquiosa y los fructo-oligosacáridos se encuentran en pequeñas cantidades en algunas legumbres, cereales y verduras.
                        </p>
                        <h5>Polisacáridos</h5>
                        <p>
                            Se necesitan más de 10 unidades de azúcar y a veces hasta miles de unidades para formar los polisacáridos.
                        </p>
                        <p>
                            El almidón es la principal reserva de energía de las hortalizas de raíz y los cereales. Está formado por largas cadenas de glucosa en forma de gránulos, cuyo tamaño y forma varían según el vegetal del que forma parte.
                        </p>
                        <h5>Fibrosos</h5>
                        <p>
                            Estos carbohidratos complejos solamente existen en las plantas y son componentes cruciales en la digestión y para la salud ya que la fibra ralentiza el ritmo de la digestión y de la absorción, contribuyendo a crear una sensación de saciedad, y en algunos casos puede reducir la absorción total de las grasas.
                        </p>
                        <p>
                            Si bien hay que advertir que un exceso de fibra resulta perjudicial ya que limita la absorción de nutrientes deberías consumir al menos entre 20 y 35 gramos de fibra al día, con una proporción del triple de fibra soluble que de insoluble.
                        </p>
                        <p>
                            Entre las fibras solubles está la pectina y el salvado de avena, mientras que las fibras insolubles incluyen el salvado de trigo y la celulosa de las plantas.
                        </p>
                        <p>
                            Aunque no aporta calorías, el aporte de <strong>fibra</strong> resulta fundamental por las siguientes razones:
                        </p>
                        <p>
                            1) Proporciona volumen a los alimentos ingeridos. Al retener agua, distiende la pared intestinal, dando sensación de saciedad.
                        </p>
                        <p>
                            2) Favorece el transito intestinal, por lo tanto evita diarreas y el estreñimiento.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default CarbohydratesNutrition