import './RoutinesWomen.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const RoutinesWomen = () => {

    return (
        <Container className="routines-women">
            <Row className="first-section-routines-women">
                <Breadcrumb></Breadcrumb>
                <Col className="body-routines-women" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas de ejercicios con pesas para mujer</h1>
                    <br />
                    <Row className="icons-routines-women" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-routines-women" src="https://www.cambiatufisico.com/wp-content/uploads/rutinas-pesas-mujer1-696x392.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas</strong> de pesas para mujer tienen muchos ejercicios y técnicas en común que las rutinas de pesas realizadas normalmente por los hombres.
                        </p>
                        <p>
                            Aun así es necesario tener en cuenta pequeños detalles  en el <strong>entrenamiento con pesas</strong> ya que los objetivos de las mujeres no suelen ser los mismos que los de un hombre.
                        </p>
                        <p>
                            Os presentamos un conjunto de rutinas de musculación especialmente orientadas para la mujer. Como ya te explicamos en el apartado <strong> Pesas en la Mujer</strong>, el cual deberías haber leído atentamente antes de probar estas rutinas el hecho de realizar <strong>ejercicios con pesas</strong>, no significa que vayas a coger un aspecto hombruno, sino todo lo contrario, adquirirás un aspecto <strong>estético, tonificado y bien proporcionado</strong>.
                        </p>
                        <li className="li-routines-sublist">Ejercicios de glúteos</li>
                        <li className="li-routines-sublist">Elaboración de un programa de ejercicios en mujer</li>
                        <li className="li-routines-sublist">Entrenamiento de pesas en circuito</li>
                        <li className="li-routines-sublist">Entrenamiento de piernas para mujer</li>
                        <li className="li-routines-sublist">Rutina de cuerpo completo para mujer</li>
                        <li className="li-routines-sublist">Rutina de ejercicios para tonificar</li>
                        <li className="li-routines-sublist">Rutina de entrenamiento para tus primeros tres meses en el gimnasio</li>
                        <li className="li-routines-sublist">Rutina de gimnasio para mujer</li>
                        <li className="li-routines-sublist">Rutina de pesas para piernas (Mujeres)</li>
                        <li className="li-routines-sublist">Rutina dividida de 3 días para mujer principiante</li>
                        <li className="li-routines-sublist">Rutina para unos glúteos duros y tonificados</li>
                        <br />
                        <p>
                            Si llevas poco tiempo en el mundo de las pesas o eres una principiante te aconsejamos que realices las rutinas más sencillas, y cada dos meses vayas cambiándolas por otras progresivamente más exigentes.
                        </p>
                        <p>
                            En cualquier caso, en un gimnasio podrán hacerte una rutina a tu medida, pero desconfía de las rutinas que <strong>solo</strong> constan de ejercicio aerobio, no sirven para nada excepto ralentizar el metabolismo y perder músculo.
                        </p>
                        <p></p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default RoutinesWomen