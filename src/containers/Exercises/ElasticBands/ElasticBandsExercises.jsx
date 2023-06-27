import './ElasticBandsExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ElasticBandsExercises = () => {

    return (

        <Container className="elasticBands-exercise-training">
            <Row className="first-section-elasticBands-exercise">
                <Col className="body-elasticBands-exercise-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicios con bandas elásticas</h1>
                    <i>Los ejercicios con bandas elásticas son una opción eficaz y barata para entrenar en cualquier lugar.</i>
                    <Row className="icons-elasticBands-exercise" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicios-bandas-elasticas-1-696x464.jpg"></Image>
                    <section>
                        <p>
                            Los <strong>ejercicios con bandas elásticas</strong> han sido utilizados durante casi una centuria. Se crearon inicialmente como una técnica de ejercicio pero eventualmente su uso se ha ido especializando más y más a tareas de rehabilitación muscular.
                        </p>
                        <p>
                            Actualmente, su uso se ha extendido tanto en centros de fitness como en centros de rehabilitación gracias a su gran <strong>versatilidad</strong>, <strong>su bajo coste y potenciales beneficios.</strong>
                        </p>
                        <p>
                         En el actual contexto de pandemia mundial, las <strong>bandas elásticas </strong>se han establecido como una de las mejores opciones para realizar entrenamientos de fuerza en casa.
                        </p>
                        <Row className="square-elasticBands-exercise">
                            <p className="title-square-elasticBands-exercise">Contenidos</p>
                            <ul>
                                <li className="li-square-elasticBands-exercise">1 Bandas elásticas Vs. Pesos Libres</li>
                                <li>2 Ejercicios con bandas elásticas para pecho</li>
                                <li>3 Ejercicios con bandas elásticas para Bíceps</li>
                                <li>4 Ejercicios con bandas elásticas para Tríceps</li>
                                <li>5 Ejercicios con bandas elásticas para Hombro</li>
                                <li>6 Ejercicios con bandas elásticas para Espalda</li>
                                <li>7 Ejercicios con bandas elásticas para Piernas</li>
                                <li>8 ¿Debes introducir las bandas elásticas en tu rutina?</li>
                            </ul>
                        </Row>
                        <h3>Bandas elásticas Vs. Pesos Libres</h3>
                        <p>
                            Tanto las bandas elásticas como los pesos libres (barras y mancuernas) tienen propiedades muy similares:
                        </p>
                        <li className="list-elasticBands-exercise">Ambos proporcionan resistencia</li>
                        <li className="list-elasticBands-exercise">Proporcionan un rango de movimiento libre</li>
                        <li className="list-elasticBands-exercise">Es posible variar la velocidad del movimiento</li>
                        <li className="list-elasticBands-exercise">Los dos métodos ofrecen posibilidades de aumentar la resistencia de forma progresiva</li>
                        <Row className="box-elasticBands-parrafo">
                            <p className="elasticBands-exercise-square">
                                Todas estas propiedades <strong className="title-red-elasticBands-square">son críticas para ofrecer programas de ejercicio efectivos.</strong>
                            </p>
                        </Row>
                        <p>
                            A pesar de todas estas similitudes entre las bandas elásticas y los pesos libres, la gente suele pensar, debido a la apariencia «débil» y ligera de las bandas elásticas, que los pesos libres son claramente superiores y el mejor equipamiento que podemos utilizar.
                        </p>
                        <p>
                            Sin embargo, muchos estudios han demostrado que la actividad muscular producida por las bandas elásticas es muy similar a la de los pesos libres.
                        </p>
                        <p className="parrafo-elasticBands">
                            EN CAMBIATUFISICO TE RECOMENDAMOS UTILIZAR AMBOS.
                        </p>
                        <p>
                            <strong>Se complementan de forma excelente</strong>, siendo las bandas elásticas especialmente efectivas para cuidar al máximo tus articulaciones y realizar ejercicios de bombeo y congestión muscular para terminar el entrenamiento.
                        </p>
                        <h3>Ejercicios con bandas elásticas para pecho</h3>
                        <p>
                            Entrena tu pecho de forma <strong>efectiva</strong> gracias a estos <strong>ejercicios de pecho</strong> con bandas elásticas para pecho. Flexiones con resistencia, presses, aperturas, todos con una resistencia lineal progresiva.
                        </p>
                        <Row className="box-elasticBands-parrafo-tealblue">
                            <p className="elasticBands-exercise-square">
                                Te sorprenderá lo <strong>duro</strong> que puedes trabajar tu pecho utilizando bandas elásticas y lo rápido que obtendrás resultados.
                            </p>
                        </Row>
                        <h5>Cruces en polea con bandas elásticas</h5>
                        <p>
                            Un clásico entre los <strong>ejercicios de pecho</strong> por su <strong>efectividad</strong> y múltiples beneficios. Poco lesivo y útil para obtener gran <strong>congestión</strong>, es muy sencillo de realizar con bandas elásticas.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Cruces-en-polea-con-bandas-elasticas-1.jpg"></Image>
                        </Row>
                        <h5>Aperturas a una mano con bandas elásticas</h5>
                        <p>
                            Si quieres <strong>«localizar»</strong> aún más el pectoral que con los cruces, este es tu ejercicio. Coloca la banda a diferentes alturas para trabajar el pectoral desde diferentes ángulos.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Aperturas-a-una-mano-con-banda-elastica.jpg"></Image>
                        </Row>
                        <h5>Press de pecho con bandas elásticas</h5>
                        <p>
                            Un <strong>ejercicio básico</strong> para el desarrollo del pecho. Tendrás que poner a prueba tus músculos estabilizadores durante el intervalo de recorrido. Igual que en las aperturas, puedes variar la altitud a la que enganchas la banda elástica para trabajar el músculo desde diferentes ángulos.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Press-de-pecho-con-bandas-elasticas.jpg"></Image>
                        </Row>
                        <h5>Flexiones con banda elástica</h5>
                        <p>
                            Las <strong>flexiones</strong> es uno de los mejores ejercicios de pecho y para desarrollo general que existen. Con las bandas elásticas puedes añadir una resistencia extra. ¡Duro pero efectivo!
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Flexiones-con-banda-elastica.jpg"></Image>
                        </Row>
                        <h3>Ejercicios con bandas elásticas para Bíceps</h3>
                        <p>
                            Los <strong>bíceps</strong> se pueden entrenar de forma muy eficaz con bandas elásticas al ser un grupo muscular con una biomecánica muy sencilla.
                        </p>
                        <p>
                            Esta es nuestra selección de ejercicios:
                        </p>
                        <h5>Curl de bíceps con bandas elásticas</h5>
                        <p>
                            Excelente <strong>ejercicio para tus brazos</strong>, gran constructor de masa muscular. Proporciona tensión constante a tus bíceps y es muy poco lesivo para tus muñecas.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Curl-de-biceps-con-bandas-elasticas.jpg"></Image>
                        </Row>
                        <h5>Curl martillo con bandas elásticas</h5>
                        <p>
                            Excelente ejercicio con <strong>agarre prono</strong>. Puedes hacerlo tanto alterno como con los dos brazos a la vez. Otro <strong>clásico</strong> del entrenamiento de bíceps ahora con la versatilidad de las bandas elásticas.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Curl-martillo-con-bandas-elasticas.jpg"></Image>
                        </Row>
                        <h5>Curl de bíceps en banda elástica alta</h5>
                        <p>
                            Uno de los ejercicios para bíceps más realizados en los gimnasios que ahora podrás realizar <strong>en cualquier parte</strong>. Ejercicio de <strong>aislamiento</strong> que te permite focalizarte en trabajar cada fibra de tus bíceps.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Curl-de-biceps-en-banda-elastica-alta.jpg"></Image>
                        </Row>
                        <h5>Curl invertido con banda elástica</h5>
                        <p>
                            El mejor ejercicio para antebrazos que pueden realizar. <strong>Menos lesivo</strong> para tus articulaciones que la versión con pesos libres, sin duda un excelente ejercicio para terminar tu rutina de brazo.
                        </p>
                        <Row className="image-center">
                            <Image className="img-elasticBands-exercise" src="https://www.cambiatufisico.com/wp-content/uploads/Curl-invertido-con-banda-elastica.jpg"></Image>
                        </Row>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ElasticBandsExercises