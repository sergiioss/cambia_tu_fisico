import './BeginnersTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const BeginnersTraining = () => {

    return (

        <Container className="beginners-exercises-training">
            <Row className="first-section-beginners">
            <Breadcrumb></Breadcrumb>
                <Col className="body-beginners-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Guía de Gimnasio y Musculación para principiantes</h1>
                    <i>Con nuestros consejos y técnicas dominarás el arte de la musculación para cambiar tu cuerpo.</i>
                    <Row className="icons-beginners" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-beginners" src="https://www.cambiatufisico.com/wp-content/uploads/guia-musculacion-696x392.jpg"></Image>
                    <section>
                        <p>
                            El primer día que entres en la sala de musculación te encontrarás en un territorio desconocido, no sabrás dónde están los materiales, te sentirás observado y tendrás miedo a realizar los ejercicios.
                        </p>
                        <p>
                            Los motivos por los que las personas se apuntan por primera vez al gimnasio u otra actividad física son tan diferentes como las propias personas.
                        </p>
                        <p>
                            Quizás quieras ganar más fuerza, ser más resistente o, como la mayoría, resultar más atractivo/a para el sexo opuesto mientras mejoras tu salud.
                        </p>
                        <Row className="square-beginners">
                            <p className="title-square-beginners">Contenidos</p>
                            <ul>
                                <li className="li-square-beginners">1 Antes de empezar</li>
                                <li>2 Tu primer día en el gimnasio</li>
                                <li>3 Tus primeras sesiones en el gimnasio</li>
                                <li>4 Conceptos básicos de musculación para principiantes</li>
                                <li>5 El entrenamiento del principiante</li>
                                <li>6 Alimentación del principiante</li>
                                <li>7 Suplementos alimenticios</li>
                                <li>8 Todo lo que debes llevar al gym</li>
                                <li>9 Pautas básicas de comportamiento en el gimnasio</li>
                                <li>10 Pautas a seguir en las primeras rutinas</li>
                                <li>11 Errores más comunes del principiante</li>
                                <li>12 Criterios básicos de seguridad</li>
                                <li>13 Se principiante, no estúpido</li>
                            </ul>
                        </Row>
                        <h3>Antes de empezar</h3>
                        <p>
                            No importa cual sea tu <strong>motivación</strong>, lo importante es que lo has decidido, has dado el paso, has tomado la decisión correcta.
                        </p>
                        <p>
                            PERO TEN CUIDADO, MUCHAS VECES EL DESCONOCIMIENTO Y LAS «PRISAS» PUEDEN DAR AL TRASTE CON TUS OBJETIVOS.
                        </p>
                    </section>
                        <Image className="img-beginners" src="https://www.cambiatufisico.com/wp-content/uploads/musculacion-novatos.jpg"></Image>
                        <p>
                            El Fisicoculturismo nos permite ganar masa muscular con más facilidad que cualquier otra disciplina, a la vez que nos confiere un físico que despierta admiración, pero sólo resulta cuando se lleva un programa claramente definido. Así que te enseñaremos y te guiaremos durante tus primero tres meses de entrenamiento.
                        </p>
                        <p>
                            <strong>Lee con mucha atención esta guía; antes de empezar debes hacer caso a todos estos puntos:</strong>
                        </p>
                        <p>
                            Pasa un examen médico si tienes más de 40 años, si tienes lesiones o algún problema de salud.
                        </p>
                        <p>
                            Plantéate objetivos realistas, ten en cuenta tu condición actual y dónde quieres estar en tres meses, un año o cinco y apégate a ello.
                        </p>
                        <p>
                            Espera hasta que transcurran tres meses antes de juzgar tus progresos. Ten paciencia, construir un buen cuerpo lleva tiempo; ya lo sabes: Roma no se hizo en un día.
                        </p>
                        <p>
                            El entrenamiento en el gimnasio constituye la mitad del progreso. Dormir, descansar bien y consumir los alimentos y suplementos adecuados son tanto o más importantes para el desarrollo y formación muscular.
                        </p>
                        <p>
                            Bien, pues ya estamos listos para empezar.
                        </p>
                        <h5>Tu primer día en el gimnasio</h5>
                        <p>
                            Ya has tomado la decisión y vas a empezar tu primer día en el gimnasio.
                        </p>
                        <p>
                            Después de haber visitado algunos gimnasios y conocido las opiniones de amigos y familiares que ya entrenan, decidimos apuntarnos a uno, que puede o no estar cerca de nuestro hogar o punto de trabajo -es preferible que lo esté: la proximidad evita la tentación del abandono-, después de haber elegido las clases y horarios adecuados y contratado incluso los servicios de un entrenador personal.
                        </p>
                        <h5>¡Me da vergüenza…!</h5>
                        <p>
                            Uno de los problemas <strong>psicológicos</strong> con los que suele tener que enfrentarse el novato de cualquier edad es el de la presunta recepción que cree van a hacerle los compañeros de ejercicio.
                        </p>
                        <p> 
                            Muchas personas indecisas o inseguras, temen encontrarse en los gimnasios con verdaderos
                            atletas de ambos sexos, altos, esbeltos, bien parecidos, muy desarrollados y despectivos, y dudan antes de atreverse a entrar
                        </p>
                        <p>
                            Piensan, de forma equivocada, que van a reírse de ellos, les mirarán de reojo juzgando lo que hacen, etc… sobre todo si el novato es de avanzada edad, no está en forma o tiene un físico desproporcionado.
                        </p>
                        <p>
                            Se trata de un grave error de apreciación, porque las cosas jamás suceden allí de esa manera.
                        </p>
                </Col>
                <Aside className="aside"/>
            </Row>
        </Container>
    )
}

export default BeginnersTraining