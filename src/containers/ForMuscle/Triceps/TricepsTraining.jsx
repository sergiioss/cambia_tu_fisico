import './TricepsTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const TricepsTraining = () => {

    return (

        <Container className="triceps-training">
            <Row className="first-section-triceps">
            <Breadcrumb></Breadcrumb>
                <Col className="body-triceps-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Rutinas y entrenamiento del Tríceps</h1>
                    <i>Los mejores consejos de entrenamiento de tríceps, como elaborar tus rutinas de entrenamiento y completa selección de rutinas de tríceps para cualquiera que sea tu objetivo.</i>
                    <Row className="icons-triceps" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-triceps" src="https://www.cambiatufisico.com/wp-content/uploads/entrenamiento-triceps1-696x463.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>rutinas de tríceps</strong> son de las más entretenidas de realizar en el gimnasio, debido a la gran cantidad de ejercicios muy efectivos de los que disponemos.
                        </p>
                        <p>
                            El <strong>entrenamiento del tríceps</strong> puede realizarse con cualquier otro músculo aunque la combinación preferida es junto con la <strong>espalda</strong> o con su grupo antagonista, el <strong>bíceps</strong>.
                        </p>
                        <Row className="square-triceps">
                            <p className="title-square-triceps">Contenidos</p>
                            <ul>
                                <li className="li-square-triceps">1 Como entrenar los tríceps</li>
                                <li>2 Como crear tu rutina de tríceps</li>
                                <li>3 Cuando entrenar los tríceps</li>
                                <li>4 Rutina de tríceps para tamaño muscular</li>
                                <li>5 Entrenamiento de tríceps en serie gigante</li>
                                <li>6 Rutina de tríceps para principiantes</li>
                                <li>7 Rutina de tríceps Casera</li>
                                <li>8 Entrenamiento de tríceps de 15 minutos</li>
                                <li>9 Rutina para prioridad en la cabeza larga del tríceps</li>
                                <li>10 Rutina para prioridad en la cabeza lateral del tríceps</li>
                                <li>11 Rutina de tríceps para fuerza</li>
                                <li>12 Rutina de tríceps para definición</li>
                                <li>13 Rutina de tríceps para supercongestión</li>
                                <li>14 Rutinas de tríceps especializadas</li>
                                <li>15 Consejos avanzados para tu entrenamiento de tríceps</li>
                            </ul>
                        </Row>
                        <h3>Como entrenar los tríceps</h3>
                        <p>
                            Si hay una <strong>recomendación</strong> aplicable virtualmente a todos los <strong>ejercicios del tríceps</strong> en términos de técnica, ésa es la de <strong>aislar el músculo</strong> y minimizar la implicación de los músculos circundantes, como el pecho y el deltoides; para ello vas a necesitar mantener los codos en posición extendida, independientemente de la posición de los brazos.
                        </p>
                        <p>
                            Si permites que se desplacen hacia fuera, en la mayoría de los casos reducirá la efectividad del ejercicio.
                        </p>
                        <h5>Trabaja las tres cabezas</h5>
                        <p>
                            La parte posterior y superior del brazo sólo tiene un músculo: el <strong>tríceps braquial</strong>, que está compuesto por tres cabezas diferenciadas: <strong>lateral, medial y larga.</strong>
                        </p>
                        <Row className="double-img-block">
                            <Image className="double-img" src="https://www.cambiatufisico.com/wp-content/uploads/cabezas-triceps.jpg"></Image>
                        </Row>
                        <p>
                            La <strong>cabeza lateral</strong> trabaja más en los press de banca con agarre estrecho; el jalón de tríceps en polea estándar también sitúa un ligero énfasis mayor sobre la cabeza lateral que sobre las otras dos.
                        </p>
                        <p>
                            La <strong>cabeza medial</strong> se estimula cuando se utiliza el agarre reverso, como cuando se hace la versión de agarre reverso en el jalón de tríceps y en el press de banca o en las extensiones tumbado.
                        </p>
                        <p>
                            La <strong>cabeza larga</strong> se estimula más en los ejercicios del tríceps en los cuales el brazo está por encima de la cabeza (todas las variaciones de extensiones sobre la cabeza).
                        </p>
                        <h3>Como crear tu rutina de tríceps</h3>
                        <p>
                            Con estos consejos podréis armar una <strong>rutina de tríceps</strong> eficiente y efectiva.
                        </p>
                        <p>
                            No son normas universales y otras composiciones de ejercicios pueden dar también excelentes resultados, pero <strong>este tipo de rutinas son efectivas</strong> y garantizan entrenar el tríceps desde todos los ángulos y sin provocar desequilibrios.
                        </p>
                        <h5>Primer ejercicio de masa</h5>
                        <p>
                            Todos saben que los movimientos compuestos se hacen, por norma general, antes de los de aislamiento. El press de banca antes de las aperturas, las sentadillas antes de las extensiones, <i>¿verdad? ¿por qué, entonces, muchos culturistas comienzan sus rutinas de tríceps con jalones?</i>
                        </p>
                        <p>
                            Al escoger un ejercicio <strong>multiarticular</strong> para empezar la rutina de tríceps, podremos utilizar más peso y desarrollar más fuerza que si comenzamos con un movimiento de aislamiento.
                        </p>
                        <p>
                            Comenzad eligiendo un movimiento compuesto cuando estáis a tope de fuerza y energía. Las elecciones adecuadas incluyen las flexiones en paralelas con cuerpo recto, flexiones entre bancos con lastre y press de banca con agarre cerrado.
                        </p>
                        <Row className="double-img-block">
                            <Image className="double-img-big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/fondos-triceps.jpg"></Image>
                        </Row>
                        <p>
                            Este último <strong>ejercicio</strong> incorpora las tres cabezas con ayuda de pectorales y deltoides. Recordad no cerrar demasiado el agarre; entre 25 y 30 centímetros serán lo ideal.
                        </p>
                        <p>
                            También podéis realizar la típica superserie de tríceps de extensiones con barra Z seguidas por press de banca con agarre cerrado, aunque no está considerado un ejercicio «puro» de masa.
                        </p>
                        <h5>Segundo ejercicio de masa, ángulo diferente</h5>
                        <p>
                            Vuestro próximo <strong>ejercicio</strong> debe ser para masa, lo que significa utilizar una cantidad significativa de peso. Olvidaos de movimientos unilaterales como las patadas con mancuerna que no permiten utilizar muchos kilos. Un ejercicio bilateral es vuestra mejor apuesta.
                        </p>
                        <p>
                            En vuestro segundo ejercicio, trabajad los tríceps desde un ángulo diferente con un movimiento de brazos por encima de la cabeza. Buenas elecciones en las que usáis ambos brazos y podéis trabajar con kilos apreciables son extensiones con barra Z o una mancuerna.
                        </p>
                        <Row className="double-img-block">
                            <Image className="double-img-big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Press-Frances.jpg"></Image>
                        </Row>
                        <p>
                            Si iniciáis vuestro <strong>entrenamiento de tríceps</strong> con un ejercicio de brazos por encima de la cabeza, cualquiera de las variaciones de las flexiones en paralela serán excelentes para seguir.
                        </p>
                        <p>
                            Recordad que entrenáis para tamaño, y escoged pesos que produzcan el fallo muscular entre 8 y 10 repeticiones. Si hacéis flexiones en paralelas, aseguraos de utilizar la suficiente resistencia extra que os resulte posible.
                        </p>
                        <p>
                            En muchos casos, vuestro propio peso resultará insuficiente para producir el fallo al llegar a la repetición número 10.
                        </p>
                        <h5>Ejercicios de aislamiento desde diferentes ángulos</h5>
                        <p>
                            Aquí podemos escoger ejercicios que congestionen los <strong>tríceps</strong> con pesos relativamente ligeros. Ejemplos incluyen jalones, patadas o diversas extensiones de tríceps utilizando poleas.
                        </p>
                        <p>
                            Debemos enfatizar la importancia de un movimiento <strong>lento y controlado</strong> al referirnos a ejercicios en poleas.
                        </p>
                        <p>
                            Si buscamos sacar máximo partido a cada serie, probad a apretar los brazos a tope en la posición final durante dos segundos. No es fácil, pero supone la diferencia entre hacer una repetición sin más y hacer que cada repetición cuente.
                        </p>
                        <p>
                            Los jalones trabajan las cabezas <strong>lateral y medial</strong>, lo mismo que las patadas. Eso resulta excelente para concentrar el trabajo en esta zona de los tríceps, sobre todo si hemos hecho antes un movimiento compuesto. La idea está en trabajar desde diversos ángulos, estimulando el músculo de manera ligeramente distinta.
                        </p>
                        <p>
                            Teniendo esto en cuenta, los movimientos que sigan deberán incluir ángulos distintos. No hagáis siempre dos jalones con agarre prono, utilizad el supino ocasionalmente.
                        </p>
                        <p>
                            Incluso el <strong>uso de las cuerdas</strong>, donde las manos empiezan en posición neutra y terminan en posición prona, pueden suponer un buen cambio de ritmo.
                        </p>
                        <Row className="double-img-block">
                            <Image className="double-img-big" src="https://www.cambiatufisico.com/wp-content/uploads/2011/02/Jalones-con-cuerda.jpg"></Image>
                        </Row>
                        <p>
                            Los movimientos a un solo brazo, donde usamos muy poco peso, <strong>son excelentes para la congestión final</strong>. Mantened un estilo estricto, un intervalo completo de recorrido y seguid las repeticiones hasta que no podáis más.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default TricepsTraining