import './BicepsExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const BicepsExercises = () => {

    return (

        <Container className="biceps-exercise-training">
            <Row className="first-section-biceps-exercise">
                <Col className="body-biceps-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios de Bíceps</h1>
                    <br />
                    <Row className="icons-biceps-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-biceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-biceps-696x392.jpg"></Image>
                    <section>
                        <p>
                            El <strong>bíceps</strong> es el más popular de los músculos. Pero incluso el pesista más serio se olvida a veces de que debe trabajarlo con <strong>ejercicios de gimnasio</strong> desde varios ángulos para implicar a las distintas cabezas del músculo.
                        </p>
                        <p>
                            La clave de los grandes brazos es <strong>entrenarlos</strong> con variedad de movimientos, como flexiones en Banco Scott, en banco inclinado, tipo martillo, con barra y con agarre invertido, para trabajar el braquial y el bracorradial.
                        </p>
                        <p>
                            Los mejores <strong>ejercicios de bíceps</strong> están aquí. Sigue nuestras recomendaciones para alcanzar tus objetivos de entrenamiento.
                        </p>
                        <Row className="square-biceps-exercise">
                            <p className="title-square-biceps-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-biceps-exercise">1 Consejos en los ejercicios de bíceps</li>
                                <li>2 Los mejores ejercicios de bíceps</li>
                                <li>3 Ejercicios de bíceps para hacer en casa</li>
                                <li>4 Ejercicios de bíceps con barra</li>
                                <li>5 Ejercicios de bíceps con mancuernas</li>
                                <li>6 Ejercicios de bíceps en polea</li>
                                <li>7 Ejercicios en máquina y otros</li>
                            </ul>
                        </Row>
                        <h3>Consejos en los ejercicios de bíceps</h3>
                        <br />
                        <p>
                            El <strong>curl con barra</strong> es el ejercicios más importante. Ha contribuido a formar brazos de 50 centímetros más que cualquier otro ejercicio. Si no os encontráis a gusto con la barra recta, <strong> usad la EZ.</strong>
                        </p>
                        <p>
                            La separación de manos debe ser <strong>algo mayor a la distancia entre los hombros</strong>. Sobre todo si buscamos <strong>ganar masa muscular</strong> en los bíceps.
                        </p>
                        <p>
                            Los <strong>bíceps</strong> necesitan una atención especial a la <strong>velocidad</strong> de la repetición y al <strong>estilo</strong> correcto.
                        </p>
                        <p>
                            Como estamos de pie gran parte del ejercicio, es importante mantener los abdominales tensos, la espalda baja arqueada y las rodillas dobladas ligeramente.
                        </p>
                        <br />
                        <h3>Los mejores ejercicios de bíceps</h3>
                        <br />
                        <h5>Curl con barra Z</h5>
                        <br />
                        <Row className="image-center">
                            <Image className="img-biceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Curl-con-barra-Z.jpg"></Image>
                        </Row>
                        <p>
                            Un clásico del entrenamiento de bíceps, debe ser la base de tus rutinas y es muy recomendable hacerlo como primer ejercicio de tu rutina.
                        </p>
                        <p>
                            Podéis realizarlo de forma estricta con los brazos estirados sin reclinaros hacia atrás ni balancearos, o con <strong>trampa</strong>, moviendo el cuerpo para que la barra obtenga más impulso.
                        </p>
                        <p>
                            Ambos métodos son útiles, pero los culturistas de élite hacen estrictas <strong>al menos las seis primeras repeticiones</strong> y terminan con tres o cuatro con trampa.
                        </p>
                        <i>Por ejemplo, realiza 4 series de 12,12,8,6 repeticiones.</i>
                        <br />
                        <br />
                        <h5>Curl en polea Baja</h5>
                        <br />
                        <Row className="image-center">
                            <Image className="img-biceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Curl-en-polea-de-pie.jpg"></Image>
                        </Row>
                        <p>
                            El curl en polea baja mantiene la tensión sobre tus bíceps durante todo el movimiento.  Puedes y debes utilizar diferentes tipos de agarres para variar el estímulo sobre las fibras musculares.
                        </p>
                        <i>Por ejemplo, realiza 3 series de 12,10,10 repeticiones.</i>
                        <br />
                        <br />
                        <h5>Curl con mancuernas en banco inclinado</h5>
                        <p>
                            Nos permite <strong>estirar</strong> al máximo los bíceps. Si lo haces con poco peso y muy concentrado, puede ser el estímulo final que tus fibras musculares necesitan para crecer.
                        </p>
                        <Row className="image-center">
                            <Image className="img-biceps-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/2011/03/Curl-con-mancuernas-en-banco-inclinado-a-dos-manos.jpg"></Image>
                        </Row>
                        <i>
                            Por ejemplo, realiza 3 series de 12,10,10 repeticiones.
                        </i>
                        <br />
                        <br />
                        <h3>Ejercicios de bíceps para hacer en casa</h3>
                        <p>
                            No todos pueden permitirse <strong>pagar</strong> un gimnasio. Es posible que incluso no te guste el ambiente!. No te preocupes ya que existen <strong>ejercicios</strong> muy efectivos para tus brazos que puedes realizar en la comodidad de tu hogar.
                        </p>
                        <p>
                            Te recomendamos adquirir un par de <strong>mancuernas</strong> y si es posible un banco de entrenamiento.
                        </p>
                        <p>
                            Algunos ejemplo de ejercicios para hacer en casa muy efectivos son:
                        </p>
                        <li className="blue-list-biceps-exercise">Curl con mancuernas</li>
                        <li className="blue-list-biceps-exercise">Curl con mancuernas en banco inclinado</li>
                        <li className="blue-list-biceps-exercise">Curl concentrado</li>
                        <p>
                            ¡No necesitas más! Y quien diga lo contrario, <strong>miente</strong>.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default BicepsExercises