import './StrengthRoutines.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const StrengthRoutines = () => {

    return (

        <Container className="strength-routine-training">
            <Row className="first-section-strength-routine">
            <Breadcrumb></Breadcrumb>
                <Col className="body-strength-routine-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de Fuerza Muscular</h1>
                    <br />
                    <Row className="icons-strength-routine" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-strength-routine" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-fuerza1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas de fuerza</strong> no solo proporcionan aumento de fuerza, sino también aumento de masa muscular y potencia.
                        </p>
                        <p>
                            Son <strong>rutinas de gimnasio</strong> que normalmente los culturistas realizan durante unos pocos meses antes de pasar a <strong>rutinas mas propias de volumen muscular</strong>, de esta forma pueden aplicar su nueva fuerza obtenida a la <strong>ganancia de masa muscular</strong> utilizando <strong>pesos elevados.</strong>
                        </p>
                        <p>
                            Aunque normalmente son realizadas por culturistas avanzados, algunas pueden resultar muy beneficiosas para los principiantes que quieren ganancias rápidas de fuerza y volumen de calidad, como las <strong>rutinas de fuerza 5×5.</strong>
                        </p>
                        <Row className="square-strength-routine">
                            <p className="title-square-strength-routine">Contenidos</p>
                            <ul>
                                <li className="li-square-strength-routine">1 Las rutinas de fuerza no son solo para principiantes</li>
                                <li>2 Métodos para entrenar la fuerza</li>
                                <li>3 Ejemplo de Rutina de Fuerza</li>
                                <li>4 Selección de rutinas para ganar más fuerza</li>
                            </ul>
                        </Row>
                        <h3>Las rutinas de fuerza no son solo para principiantes</h3>
                        <Row className="img-strength-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/rutina-fuerza-1.jpg"></Image>
                            <i>
                                Las rutinas de fuerza se basan en ejercicios básicos y pesados. No obstante, cuidado con realizar ejercicios lesivos como el press tras nuca.
                            </i>
                        </Row>
                        <p>
                            Estas rutinas se basan en movimientos <strong>básicos y pesados</strong>, como pueden ser la sentadilla, el peso muerto, el press de banca o el press militar aunque pueden incluir movimientos de aislamiento accesorios para trabajar los músculos desde todos los ángulos.
                        </p>
                        <p>
                            Los que entrenan sólo para <strong>ganar fuerza</strong> deben descansar más entre series que los que se ejercitan para desarrollar los músculos.
                        </p>
                        <p>
                            Los <strong>powerlifters</strong> y los <strong>halterófilos</strong> suelen reposar cuatro o cinco minutos entre series, mientras que los culturistas le dedican 60 o 90 segundos.
                        </p>
                        <p>
                            Aprovecharéis más los entrenamientos si descansáis sólo lo imprescindible para que la respiración vuelva a su ritmo habitual.
                        </p>
                        <p>
                            Las <strong>rutinas de fuerza</strong> suelen basarse en el valor de tu <strong>«repetición máxima»</strong>, 1RM. Una 1RM es la máxima resistencia que se puede vencer en una repetición completa.
                        </p>
                        <p>
                            Es de las formas mas utilizadas y simples de valorar la fuerza máxima dinámica de uno o varios grupos musculares.
                        </p>
                        <p>
                            Antes de realizar las rutinas deberías <strong>calcular tu 1RM</strong> ya que es necesario para saber que pesos usar en cada ejercicio.
                        </p>
                        <h3>Métodos para entrenar la fuerza</h3>
                        <p>
                            Sin dudas hay tres ejercicios básicos en los que vemos llevada al máximo la fuerza del hombre. Estos ejercicios son: <strong>press de banca, sentadilla y peso muerto</strong>, con records que parecen inalcanzables con más de 400 kilos en press de banca.
                        </p>
                        <p>
                            Si bien no todos podemos llegar a realizar esta hazañas, sí podemos incrementar nuestra fuerza, usando algunos de sus métodos más conocidos.
                        </p>
                        <p>
                            Básicamente hay 3 <strong>métodos</strong> para entrenar la fuerza. Deben usar los 3 métodos para construir fuerza: el dinámico, el de esfuerzo máximo y el de repeticiones cercanas al fallo.
                        </p>
                        <h5>Esfuerzo Máximo (Max effort)</h5>
                        <p>
                            Es el método más reconocido. El mismo produce ganancias mejorando la coordinación <strong>intermuscular e intramuscular</strong>.
                        </p>
                        <p>
                            Para pesos cercanos al máximo son usadas 1-2 repeticiones, pero en el verdadero método de esfuerzo máximo se usa 1 repetición. Cuando usamos 3 repeticiones se denomina el <strong>método de esfuerzos pesados</strong>.
                        </p>
                        <h5>Método Dinámico (dynamic method)</h5>
                        <p>
                            El mismo se utiliza para reemplazar un entrenamiento de esfuerzo máximo. En este método se usan pesos sub-máximos a máxima velocidad.
                        </p>
                        <p>
                            Se busca el desarrollo de la <strong>fuerza explosiva. Bandas elásticas y cadenas</strong> se deben usar para evitar la desaceleración de la barra. Las bandas también aumentan la <strong>fase excéntrica</strong> del movimiento. Las repeticiones deben ser bajas (1 para despegues, 2 para sentadillas, 3 para banco). Nunca ir al <strong>fallo muscular</strong>.
                        </p>
                        <p>
                            No continuar si la velocidad de la barra disminuye. Los pesos deben variar (o la resistencia de las bandas o las cadenas) para obligar a una mayor adaptación en las reacciones <strong>metabólicas</strong> y la coordinación <strong>intramuscular</strong>.
                        </p>
                        <p>
                            La velocidad de la barra debe ser de 8 mt por segundo o mayor. No menos de 6 series y 90 segundos entre series. Este método cambió la forma de entrenar en <strong>Westside Barbell</strong> en 1983, y se refinó durante años hasta la actualidad.  
                        </p>
                        <h5>Repeticiones “Super Training” cercanas al fallo</h5>
                        <p>
                            Se hacen repeticiones <strong>al fallo </strong>completo sin asistencia con pesos libres. Este método se basa en aumentar la fuerza en los puntos débiles de las fases de movimiento.
                        </p>
                        <h3>Ejemplo de Rutina de Fuerza</h3>
                        <p>
                            Para todos aquellos que buscan ganar fuerza en los tres ejercicios básicos más importantes: <strong>press banca, sentadilla y peso muerto</strong>.
                        </p>
                        <p>
                            En esta rutina lo importante no es solo los tipos de ejercicios y el orden, sino también la progresión de Kg que se maneja en cada uno de ellos.
                        </p>
                        <Row className="img-strength-routine">
                            <Image src="https://www.cambiatufisico.com/wp-content/uploads/tabla-de-fuerza.png"></Image>
                        </Row>
                        <h3>Selección de rutinas para ganar más fuerza</h3>
                        <p>
                            Las rutinas de fuerza tienen una <strong>base científica</strong> detrás mucho más fuerte que otro tipo de rutinas. Por lo tanto iremos actualizando esta sección de forma recurrente
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default StrengthRoutines