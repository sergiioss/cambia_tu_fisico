import './BackExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BackExercises = () => {

    return (

        <Container className="back-exercise-training">
            <Row className="first-section-back-exercise">
                <Col className="body-back-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Espalda</h1>
                    <i>Los ejercicios de espalda más efectivos que puedes realizar en tu rutina.</i>
                    <Row className="icons-back-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-espalda1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Después de las piernas, el día de <strong>ejercicios de espalda</strong> es el día de entrenamiento más duro. En las rutinas de espalda se moviliza mucha masa muscular, incluidos bíceps y otros músculos auxiliares.
                        </p>
                        <p>
                            Los <strong>ejercicios de gimnasio</strong> como jalones y dominadas, así como de remo efectuado desde varios ángulos y con diversas intensidades son cruciales para lograr el desarrollo completo de la espalda.
                        </p>
                        <Row className="square-back-exercise">
                            <p className="title-square-back-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-back-exercise">1 Cómo elegir tus ejercicios de espalda</li>
                                <li>2 Los mejores ejercicios de espalda</li>
                                <li>3 Ejercicios de espalda de Dominadas y Jalones</li>
                                <li>4 Ejercicios de espalda de Remo</li>
                                <li>5 Espalda baja, peso muerto y otros</li>
                            </ul>
                        </Row>
                        <h3>Cómo elegir tus ejercicios de espalda</h3>
                        <p>
                            Los dos tipos principales de ejercicios de espalda son los <strong>jalones</strong> o las <strong>dominadas</strong> (virtualmente los mismos movimientos) y el <strong>remo</strong>.
                        </p>
                        <p>
                            Las dominadas y los jalones en primer término desarrollan la <strong>anchura</strong> en la espalda centrándose en las porciones externas de los músculos dorsal ancho, el remo es ideal para crear <strong>densidad</strong> mediante el desarrollo de los músculos de la parte media de la espalda y del romboides y de la parte media del trapecio.
                        </p>
                        <p>
                            Resulta critico mantener el arco natural de la espalda, los abdominales tensos y el pecho fuera sobre todo cuando hacemos <strong>ejercicios</strong> de remo. El estilo estricto ayuda a conseguir mayores progresos y a evitar lesiones de espalda.
                        </p>
                        <p>
                            Para lograr simetría y equilibrio en la <strong>espalda</strong> resulta fundamental variar de manerales y de agarres en los diferentes <strong>ejercicios</strong>. Si la <strong>espalda</strong> carece de amplitud, usad un <strong>agarre abierto</strong>. Si carece de relieve en la zona media, reducid la distancia de agarre.
                        </p>
                        <h3>Los mejores ejercicios de espalda</h3>
                        <p>
                            Veremos una selección de los mejores ejercicios de espalda, que a mi juicio y después de casi veinte años de experiencia en el gimnasio son <strong>los más eficaces para desarrollar la espalda</strong>.
                        </p>
                        <h5>Peso muerto con barra</h5>
                        <p>
                            Los pesos muertos son un ejercicio muy eficaz, pues estimulan el crecimiento de la espalda, pero también de todo el cuerpo. Por lo tanto, son una elección acertada para todos aquellos que quiera <strong>ganar masa muscular</strong>, sobre todo para <strong>ectomorfos</strong>.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/peso-muerto2.jpg"></Image>
                        </Row>
                        <p>
                            Es un ejercicio donde podemos mover gran cantidad de kilos pero es fundamental  mantener una técnica adecuada. Sube los kilos poco a poco y obtendrás todos los beneficios del peso muerto sin ponerte en peligro.
                        </p>
                        <h5>Dominadas</h5>
                        <p>
                            Las dominadas son la madre de los movimientos de tracción verticales y es mejor utilizarlas en vez de los jalones en polea. Subir el cuerpo hacia una barra es mucho más difícil que bajar un agarre con peso hacia el pecho, y en el esfuerzo está el crecimiento.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/dominadas5.jpg"></Image>
                        </Row>
                        <p>
                            Podéis utilizar varios agarres, desde el ancho, que no debe superar en más de unos cinco centímetros a la amplitud entre los hombros, el medio con las manos por debajo, y el neutral, con las palmas de las manos mirándose.
                        </p>
                        <h5>Jalones frontales</h5>
                        <p>
                            A pesar de que considero que los jalones son menos eficaces que las dominadas, tienen ciertas aplicaciones. Para empezar, te permiten usar varios agarres. Además, muchas personas no pueden completar demasiadas dominadas, así que pueden empezar por los jalones.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/jalones-frontales1.jpg"></Image>
                        </Row>
                        <p>
                            Puesto que tenéis un rodillo acolchado sobre las rodillas que os sujeta, la ejecución debe ser perfecta. No os inclinéis demasiado hacia atrás porque el ejercicio se convertiría en un remo en polea.
                        </p>
                        <h5>Remo inclinado con barra</h5>
                        <p>
                            El agarre habitual es con las manos por encima y con la amplitud que hay entre los hombros, aunque también podéis usar el agarre por debajo (remo agarre inverso) que hizo famoso el seis veces Mr. Olympia Dorian Yates.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/remo-barra3.jpg"></Image>
                        </Row>
                        <p>
                            Mantened la cabeza y el pecho para arriba y llevad la barra hacia la parte inferior de los abdominales. No balanceéis la barra hacia fuera ni la dejéis caer de golpe. El movimiento debe ser controlado de principio a fin.
                        </p>
                        <h5>Remo con mancuerna</h5>
                        <p>
                            Este <strong>ejercicio</strong> tiene la ventaja de que el agarre es estrecho, el peso está cerca del cuerpo y se usan los brazos por separado (entrenamiento unilateral), con lo que se consigue una mayor eficiencia neuromuscular.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/remo-con-mancuerna.jpg"></Image>
                        </Row>
                        <p>
                            No os centréis en el peso, y sí en realizar el ejercicio de forma correcta y notar los dorsales. Por ejemplo, Lee Haney no solía usar más de 35 kilos en este ejercicio. Si utilizáis 68 kilos y vuestra forma es como la de un hombre arrancando un cortacésped, debéis meditar sobre qué pretendéis conseguir.
                        </p>  
                        <h5>Remo con barra T</h5>
                        <p>
                            En la actualidad no se encuentran muchas maquinas de <strong>remo con barra T</strong> en los gimnasios, y es una lástima. Utilizo el término máquina libremente porque, en realidad, la barra T consiste en una barra móvil unida a una palanca en una base.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/remo-barra-t1.jpg"></Image>
                        </Row>
                        <p>
                            Con ella se puede realizar un remo con barra que requiere menos coordinación y equilibrio, y permite colocar las manos de formas distintas.
                        </p>
                        <h5>Remo sentado en polea</h5>
                        <p>
                            El <strong>remo en polea</strong> es parecido a los jalones porque se puede usar desde un agarre estrecho hasta una barra normal de jalones. Es un ejercicio interesante para cuando llevas más de la mitad de la sesión y ya no puedes mantener un correcto equilibrio en los pesos libres.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/remo-polea-sentado1.jpg"></Image>
                        </Row>
                        <p>
                            Inclinaos un poco hacia delante para comenzar el movimiento y echaos un poco hacia atrás al final para apretar los dorsales, como si estuvierais remando en una barca.
                        </p> 
                        <h5>Pullover</h5>
                        <p>
                            Los pullovers son el único ejercicio que aísla los dorsales de verdad, sin que actúen los bíceps o los deltoides posteriores. Es un movimiento estupendo para finalizar la sesión, o como parte de la técnica de <strong>preagotamiento</strong>.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/pull-over-mancuerna.jpg"></Image>
                        </Row>
                        <p>
                            Es decir, que haríais una serie de pullovers <strong>hasta el fallo muscular</strong> y pasaríais de inmediato a una serie de dominadas o remo para que los bíceps y los deltoides posteriores ayuden a los dorsales a cansarse más.
                        </p>
                        <h5>Hiperextensiones</h5>
                        <p>
                            Una zona lumbar fuerte aportará estabilidad a todos los ejercicios del gimnasio, pero también a las actividades de la vida diaria. La banca de <strong>hiperextensiones</strong> es perfecta para este movimiento. Debéis esforzaros para alcanzar un peso suficiente que desarrolle los erectores.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/hiperextensiones-espalda.jpg"></Image>
                        </Row>
                        <p>
                            Aseguraos de que el trabajo lo realiza la zona baja de la espalda y no los glúteos o los femorales, pues las hiperextensiones se podrían convertir en un peso muerto con las piernas rectas. Además, no arqueéis la espalda. <strong>Si habéis realizado pesos muertos y tenéis la zona cansada, quizá no necesitéis nada más</strong>.
                        </p>
                        <h5>Buenos días con barra</h5>
                        <p>
                            Un ejercicio para la zona lumbar que ya casi no se ve son los <strong>buenos días</strong>. Con una barra en vuestra espalda, como si fuerais a hacer una serie de sentadillas o zancadas, os inclináis hacia delante y luego volvéis a subir.
                        </p>
                        <Row className="image-center">
                            <Image className="img-back-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/buenos-dias-barra1.jpg"></Image>
                        </Row>
                        <p>
                            En este movimiento es muy fácil doblar la espalda, así que empezad con la barra olímpica sola y añadid peso según avancéis.
                        </p>
                        <h3>Ejercicios de espalda de Dominadas y Jalones</h3>
                        <p>
                            Selección de ejercicios de espalda basados en dominadas y movimientos de jalón. Te recomendamos introducir de 2 a 3 ejercicios de este tipo en tu rutina de espalda ya que suponen la base del entrenamiento de espalda.
                        </p>
                        <li className="blue-list-back-exercise">Dominadas agarre ancho</li>
                        <li className="blue-list-back-exercise">Dominadas agarre cerrado</li>
                        <li className="blue-list-back-exercise">Dominadas con peso en multipower</li>
                        <li className="blue-list-back-exercise">Dominadas en máquina (asistidas)</li>
                        <li className="blue-list-back-exercise">Dominadas tras nuca</li>
                        <li className="blue-list-back-exercise">Dominadas, como dominarlas</li>
                        <li className="blue-list-back-exercise">Jalón dorsal a una mano</li>
                        <li className="blue-list-back-exercise">Jalones agarre cerrado (o jalón al pecho)</li>
                        <li className="blue-list-back-exercise">Jalones agarre V</li>
                        <li className="blue-list-back-exercise">Jalones en máquina</li>
                        <li className="blue-list-back-exercise">Jalones frontales</li>
                        <li className="blue-list-back-exercise">Jalones frontales con brazos rectos</li>
                        <li className="blue-list-back-exercise">Jalones tras nuca</li>
                        <br />
                        <h3>Ejercicios de espalda de Remo</h3>
                        <p>
                            En la ejecución de los remos es muy importante que tengas una conexión músculo mental adecuada. No sirve de nada con «tirar» del peso sin más, debes sentir como tus dorsales trabajan y quieren explotar.
                        </p>
                        <li className="blue-list-back-exercise">Remo con barra</li>
                        <li className="blue-list-back-exercise">Remo con barra agarre invertido</li>
                        <li className="blue-list-back-exercise">Remo con mancuerna</li>
                        <li className="blue-list-back-exercise">Remo en barra T</li>
                        <li className="blue-list-back-exercise">Remo en máquina</li>
                        <li className="blue-list-back-exercise">Remo en máquina tumbado</li>
                        <li className="blue-list-back-exercise">Remo en multipower</li>
                        <li className="blue-list-back-exercise">Remo en polea sentado (Remo Gironda)</li>
                        <li className="blue-list-back-exercise">Remo invertido</li>
                        <li className="blue-list-back-exercise">Remo Pendley</li>
                        <br />
                        <h3>Espalda baja, peso muerto y otros</h3>
                        <p>
                            Estos ejercicios enfatizan la zona baja de la espalda o son directamente constructores de masa muscular a nivel general como el peso muerto.
                        </p>
                        <li className="blue-list-back-exercise">Buenos días con barra de pie</li>
                        <li className="blue-list-back-exercise">Buenos días con barra sentado</li>
                        <li className="blue-list-back-exercise">Hiperextensiones de espalda</li>
                        <li className="blue-list-back-exercise">Peso Muerto</li>
                        <li className="blue-list-back-exercise">Peso Muerto estilo Sumo</li>
                        <li className="blue-list-back-exercise">Peso muerto piernas rígidas con barra</li>
                        <li className="blue-list-back-exercise">Peso muerto piernas rígidas con mancuernas</li>
                        <li className="blue-list-back-exercise">Pullover en banco declinado</li>
                        <br />
                   </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BackExercises