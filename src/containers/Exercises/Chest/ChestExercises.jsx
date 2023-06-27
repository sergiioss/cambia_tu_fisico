import './ChestExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ChestExercises = () => {

    return (

        <Container className="chest-exercise-training">
            <Row className="first-section-chest-exercise">
                <Col className="body-chest-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Pecho, los más efectivos</h1>
                    <i>Los mejores ejercicios de pecho están aquí. ¡Consigue resultados rápidos!</i>
                    <Row className="icons-chest-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-pecho1-696x392.jpg"></Image>
                    <section>
                        <p>
                            En esta sección veremos una gran cantidad de <strong>ejercicios de pecho</strong> divididos en diferentes secciones y que podrás <strong>realizar en el gimnasio</strong> sin equipamiento demasiado avanzado
                        </p>
                        <p>
                            Un <strong>pecho</strong> amplio y completo es lo primero que se ve cuando observas un físico bien desarrollado. Un pecho grande ayuda a definir el torso y fija el listón de la simetría.
                        </p>
                        <p>
                            Los ejercicios básicos y pesados como el <strong>press de banca</strong> son los más efectivos pero también es imprescindible incorporar otros <strong>ejercicios de aislamiento</strong> para redondear vuestra rutina.
                        </p>
                        <p>
                            Elegir los ejercicios adecuados en tu <strong>rutina de pecho</strong> es muy importante para conseguir tus objetivos evitando descompensaciones y lesiones.
                        </p>
                        <Row className="square-chest-exercise">
                            <p className="title-square-chest-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-chest-exercise">1 Los mejores ejercicios de pecho</li>
                                <li>2 Mejores ejercicios de pecho para hacer en casa</li>
                                <li>3 Ejercicios de Pecho con énfasis en zona superior</li>
                                <li>4 Ejercicios de Pecho zona media</li>
                                <li>5 Ejercicios de Pecho con énfasis en zona inferior</li>
                            </ul>
                        </Row>
                        <h3>Los mejores ejercicios de pecho</h3>
                        <p>
                            Existen numerosos ejercicios posibles para realizar en un <strong>gimnasio</strong> pero no todos son igual de efectivos.
                        </p>
                        <p>
                            Esto no significa que debamos estar continuamente haciendo los mismos ejercicios de pecho ya que la <strong>variedad</strong> es una regla básica para obtener resultados.
                        </p>
                        <p>
                            Aún así, es indudable que existen algunos <strong>ejercicios</strong> más efectivos que otros y son estos los que deben formar la base de nuestra rutina pecho.
                        </p>
                        <p>
                            <strong>Aquí tienes nuestros seis ejercicios de pecho favoritos:</strong>
                        </p>
                        <h5>Press de banca con barra</h5>
                        <p>
                            Sin duda el <strong>rey de los ejercicios de pecho</strong> y un indicativo fiable de la fuerza de cada individuo.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/press-banca-barra.jpg"></Image>
                        </Row>
                        <p>
                            Este ejercicio <strong>constructor de masa muscular</strong> trabaja de forma secundaria los tríceps y los hombros; tanto es así que muchas personas que basan sus entrenamiento en presses pesados no realizan ningún ejercicio de tríceps adicional.
                        </p>
                        <h5>Press con mancuernas en banco inclinado</h5>
                        <p>
                            Es tan efectivo <strong>como el press de banca con barra</strong> y además tiene otros beneficios asociados al uso de mancuernas.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/press-inclinado-mancuernas.jpg"></Image>
                        </Row>
                        <p>
                            Trabaja los <strong>músculos estabilizadores</strong> y debido a que el recorrido se realiza de forma totalmente natural, es <strong>menos lesivo</strong> que otros ejercicios guiados. El peso es importante pero la correcta ejecución aún más
                        </p>
                        <h5>Aperturas en máquina para pecho</h5>
                        <p>
                            Este ejercicio es superior a las aperturas con mancuerna. <strong>¿No te lo crees?</strong> Al contrario que en su versión con mancuerna, la tensión sobre el músculo se mantiene durante todas las fases del ejercicio.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/aperturas-maquina.jpg"></Image>
                        </Row>
                        <p>
                            Además te permite realizar fácilmente muchas <strong>técnicas de alta intensidad</strong> sin peligro a lesionarte; como series superlentas, series con pausa, <strong>series descendentes</strong>, etc.
                        </p>
                        <h5>Press Inclinado en Multipower</h5>
                        <p>
                            No siempre debes hacer press de banca y este es un perfecto sustituto para enfatizar la parte superior del pecho.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/press-inclinado-multipower.jpg"></Image>
                        </Row>
                        <p>
                            En este caso el multipower nos permite <strong>«sentir»</strong> mejor el ejercicio, dándonos la oportunidad de trabajar de forma segura la fase negativa del ejercicio o realizarlo de forma más explosiva.
                        </p>
                        <h5>Pull over para pecho</h5>
                        <p>
                            Este ejercicio proporciona un <strong>estímulo diferente</strong> a nuestros pectorales y deja «descansar» nuestros hombros del estrés producido por los presses pesados.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/pullover-mancuerna-banco-inclinado.jpg"></Image>
                        </Row>
                        <p>
                            Para el pecho, no nos vale cualquier <strong>pull over…</strong> te recomendamos especialmente esta versión con banco inclinado para máxima estimulación del pectoral.
                        </p>
                        <h5>Cruces en polea alta</h5>
                        <p>
                            Gracias a los cruces podemos proporcionar todos los beneficios del trabajo con poleas a nuestros pectorales.
                        </p>
                        <Row className="image-center">
                            <Image className="img-chest-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/cruces-polea-alta.jpg"></Image>
                        </Row>
                        <p>
                            <strong>Tensión constante</strong> durante el intervalo completo de recorrido, <strong>bajo peligro de lesión y gran congestión</strong>. Una apuesta segura en tu rutina de entrenamiento de pecho.
                        </p>
                        <h3>Mejores ejercicios de pecho para hacer en casa</h3>
                        <p>
                            El pecho es uno de los músculos más sencillos de entrenar en casa. Solo necesitas tu peso corporal y un equipamiento mínimo de gimnasio (mancuernas, barras y bandas elásticas).
                        </p>
                        <p className="parrafo-chest">
                            ¡No hay excusas que valgan!
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ChestExercises