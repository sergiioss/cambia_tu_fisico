import './BurnCaloriesObjetive.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const BurnCaloriesObjetive = () => {

    return (
        <Container className="burnCalories-objetive">
            <Row className="first-section-burnCalories-objetive">
            <Breadcrumb></Breadcrumb>
                <Col className="body-burnCalories-objetive" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <h1>Quemar grasa, la guía definitiva para eliminarla</h1>
                <br />
                <Row className="icons-burnCalories-objetive" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                    <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                    <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                    <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                </Row>
                <Image className="img-burnCalories-objetive" src="https://www.cambiatufisico.com/wp-content/uploads/quemar-grasa-1-696x402.jpg"></Image>
                <section>
                    <p>
                        Directrices generales y efectivas que se deben seguir para <strong>quemar grasa</strong> y producir una perdida de peso pero teniendo en cuenta la <strong>salud</strong>.
                    </p>
                    <p>
                        NUNCA debemos pensar en perder grasa en detrimento del nivel de salud.
                    </p>
                    <p>
                        No solamente es cuestión de perder peso, <strong>el peso corporal total no nos informa de mucho</strong>, lo importante es observar el porcentaje de grasa corporal, por eso yo siempre digo que es más importante observar la talla del cinturón que el peso.
                    </p>
                    <p>
                        Lo cierto es que inducir al organismo a obtener <strong>energía</strong> no es cuestión de un único factor, sino de la sinergia y correcta aplicación de estímulos encaminados a este estado fisiológico de <strong>quema de grasa</strong>.
                    </p>
                    <p>
                        Veamos sin más de demora como quemar esa capa de grasa de nuestra cintura y cartucheras.
                    </p>
                    <Row className="square-burnCalories-objetive">
                        <p className="title-square-burnCalories-objetive">Contenidos</p>
                        <ul>
                            <li className="li-square-burnCalories-objetive">1 Ten paciencia al perder grasa</li>
                            <li>2 Quemar calorías para perder grasa</li>
                            <li>3 Vuestro plan debe incluir tanto dieta como entrenamiento</li>
                            <li>4 Dar prioridad al volumen y no manejar altas intensidades</li>
                            <li>5 Ajusta tu intensidad para quemar grasa</li>
                            <li>6 Las altas intensidades también queman grasa</li>
                            <li>7 Realiza el entrenamiento de fuerza antes que el cardiovascular</li>
                            <li>8 Las prendas para sudar</li>
                            <li>9 Entrenar adecuadamente</li>
                            <li>10 Reducir el consumo de carbohidratos</li>
                            <li>11 No ingerir alimentos nada mas terminar el ejercicio</li>
                            <li>12 Ejercicio cardiovascular en ayunas</li>
                            <li>13 Dormir adecuadamente</li>
                            <li>14 Anotadlo todo</li>
                            <li>15 Sed constantes y quemareis grasa</li>
                        </ul>
                    </Row>
                    <h3>Ten paciencia al perder grasa</h3>
                    <p>
                        Recordad que la pérdida de grasa es un <strong>proceso lento</strong>. Como máximo, podemos aspirar a quemar tres cuartos de kilo por semana. Y la pérdida inicial será mucho más fácil que la de los últimos cinco kilos.
                    </p>
                    <p>
                        Cada vez que iniciamos una dieta, sea mediante restricción calórica o aumentando la ración de aerobios, vamos a perder cinco kilos al principio con mucha mayor facilidad que los cinco kilos últimos.
                    </p>
                    <p>
                        Y no sólo perdemos grasa sino también parte del <strong>agua</strong> acumulada con el glucógeno.
                    </p>
                    <p>
                        La pérdida inicial de peso se hace más rápida debido en parte a un cambio en el <strong>metabolismo</strong> del cuerpo. El metabolismo cambia, debido a las enzimas implicadas en el metabolismo de las células grasas y también se producen variaciones hormonales.
                    </p>
                    <p>
                        Cuando empezamos un programa de pérdida de peso, el cuerpo intenta, inicialmente, utilizar combustibles procedentes del hígado o de las células grasas de forma que podamos mantener los niveles de azúcar sanguíneo. Las <strong>hormonas</strong> no quedan afectadas, lo que nos permite quemar grasa a una mayor velocidad.
                    </p>
                    <p>
                        Sin embargo, con el tiempo, el cuerpo se da cuenta de que no recibe las calorías suficientes y pasa a trabajar al modo de la <strong>hambruna</strong>.
                    </p>
                    <p>
                        Entonces altera sus fuentes de combustible, apoyándose incluso en la proteína y el tejido muscular, y los niveles hormonales varían, lo que, a la larga, conduce a la acumulación de mayor cantidad de grasa.
                    </p>
                    <h3>Quemar calorías para perder grasa</h3>
                    <p>
                        Muchas personas piensan erróneamente que mientras mas calorías se consuman mucho mejor, pero no es así del todo, esta afirmación no es cierta.
                    </p>
                    <p>
                        Para quemar grasa, no nos importan mucho las calorías consumidas en la actividad, sino más bien los sustratos energéticos que ha utilizado el organismo.
                    </p>
                    <p>
                        Quizás resulte mas interesante una sesión de intensidad moderada donde no se consumen tantas calorías, pero la mayor parte vienen de la <strong>lipólisis</strong> (degradación de triglicéridos y oxidación de los ácidos grasos), que una sesión intensa donde se consuman mas calorías pero que el organismo se vea obligado a la obtención de energía a través de la <strong>glucólisis</strong> (degradación del glucógeno y oxidación de la glucosa).
                    </p>
                    <p>
                        En esta cuestión hay mucha divergencia de opiniones, sobre todo por parte de los amantes del sistema de entrenamiento de alta intensidad <strong>HIIT</strong>.
                    </p>
                    <p>
                        Además si deseamos realizar ejercicio mas de 3 días a la semana, que es lo interesante, conviene realizar sesiones con una intensidad moderada ya que cuando sometemos al organismo a este tipo de sesiones, la recuperación es rápida y así evitamos en caer en sobreentrenamientos y fatigas acumuladas que pueden revertir en el abandono de la actividad.
                    </p>
                    <h5>¿Cuando comenzamos a quemar grasa?</h5>
                    <p>
                        La grasa comienza a quemarse a partir del momento en que comiences a moverte. Cierto es que a mayor duración del ejercicio, mayor participación de los ácidos grasos como combustible.
                    </p>
                    <p>
                        A partir de los 40 ó 60 minutos, dependiendo de la intensidad y dieta de cada persona, el glucógeno (azúcar) comienza a descender de forma significativa y es cuando entran en acción las grasas como combustible energético.
                    </p>
                    <p>
                        La combustión de las grasas siempre está de fondo, así que si haces todos los días 15 ó 20 minutos de ejercicio, también conseguirás quemar grasas.
                    </p>
                    <p>
                        Para personas sedentarias y con sobrepeso, esta es la opción más interesante para lograr resultados, a medida que se gana forma física y resistencia, se puede pensar en realizar sesiones de 60 minutos.
                    </p>
                    <h3>Vuestro plan debe incluir tanto dieta como entrenamiento</h3>
                    <p>
                        La primera cosa que debéis comprobar es que cuando decidáis seguir un programa para definiros y reducir los niveles de grasa corporal, éste incluye tanto la <strong>dieta</strong> como el <strong>sistema de entrenamiento</strong>. Si dicho programa sólo hace hincapié en un plan de alimentación o bien en una rutina de entrenamiento, entonces seguramente vuestros resultados no serán los más óptimos, o desde luego no los que lograríais si combináis ambos factores.
                    </p>
                    <p>
                        Por muy buena dieta que sigáis o por muy buena que sea vuestra rutina de ejercicio, nunca alcanzaréis los mejores <strong>resultados</strong> a menos que pongáis el mismo empeño y esfuerzo en la una como en la otra.
                    </p>
                    <p>
                        Todos sabéis que la <strong>composición corporal</strong> depende del ejercicio físico que hagáis, así como de la alimentación que llevéis, por tanto, pensad desde este mismo momento que sólo logréis esos músculos definidos si otorgáis la misma importancia a ambos aspectos.
                    </p>
                </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BurnCaloriesObjetive