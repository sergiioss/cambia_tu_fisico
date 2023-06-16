import './AerobicExercisesTraining.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const AerobicExercisesTraining = () => {

    return (

        <Container className="aerobic-exercises-training">
            <Row className="first-section-aerobic">
                <Col className="body-aerobic-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Ejercicio Aeróbico</h1>
                    <Row className="icons-aerobic" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-aerobic" src="https://www.cambiatufisico.com/wp-content/uploads/ejercicio-aerobico21-696x392.jpg"></Image>
                    <section>
                        <p>
                            Se llama ejercicio aeróbico a aquel para cuya realización se exige una demanda de oxígeno continua al cuerpo, de modo que el músculo utiliza como combustible principalmente nuestras reservas de grasa.
                        </p>
                        <p>
                            Si la actividad física es muy intensa el organismo no requiere de oxígeno para su realización y a ese tipo de ejercicio se le llama anaeróbico.
                        </p>
                        <p>
                            El <strong>ejercicio anaeróbico</strong> es de muy baja duración por ese mismo motivo. En cambio el ejercicio aeróbico es de una duración mucho mayor.
                        </p>
                        <p>
                            Algunos ejemplos son el aerobic, andar a paso ligero, trotar, el esquí de fondo, nadar, el ciclismo de fondo, bailar y el entrenamiento con pesas monitorizado
                        </p>
                        <h3>Principales beneficios del ejercicio aeróbico</h3>
                        <p>
                            Dado que utiliza las grasas como combustible o fuente principal de energía, acompañados de una alimentación equilibrada y un estilo de vida sana, los beneficios son evidentes:
                        </p>
                        <p>
                            – <strong>Mejora la función cardiovascular</strong>, tanto en personas sanas como individuos que hayan sido víctimas de infartos, angina de pecho o hayan sido sometidos a cirugías de corazón, angioplastia e incluso en pacientes con falla cardíaca.
                        </p>
                        <p>
                            También estimula la formación de nuevos vasos coronarios.
                        </p>
                        <p>
                            –<strong>Reduce grasa corporal y elimina la grasa subcutánea</strong> en las personas con sobrepeso y obesidad. Para lograr un consumo alto de las calorías que están acumuladas en el tejido graso(adiposo), el ejercicio debe ser habitual, de tiempo prolongado y de intensidad moderada, utilizando la mayor masa muscular posible como las de las piernas, los glúteos y la parte baja de la espalda.  
                        </p>
                        <p>
                            Además reduce la grasa subcutánea, localizada entre los músculos, Una persona que quiere definir, debe practicarlo obligatoriamente (junto a una correcta dieta), para que los músculos parezcan magros y sanos, y no voluminoso y torpe.
                        </p>
                        <p>
                            – <strong>Disminuye a mediano plazo, la presión sanguínea</strong> en los hipertensos hasta en 7 mmHg la sistólica (o alta) y 4 mmHg la diastólica (o baja), disminuyendo el requerimiento de medicamentos.
                        </p>
                        <p>
                            – <strong>Baja los niveles de colesterol total en la sangre,</strong> así como los de colesterol LDL o «colesterol malo» y de los triglicéridos y aumenta el colesterol HDL o «colesterol bueno», reduciendo el riesgo de un ataque cardíaco.
                        </p>
                        <p>
                            – <strong>Reduce los niveles sanguíneos de glucemia</strong> en los diabéticos. Al practicar un ejercicio anaeróbico, utilizamos glucosa, la cuál proviene de la sangre.
                        </p>
                        <p>
                            De esta manera los niveles de glucosa en la sangre disminuyen y los diabéticos se pueden ver beneficiados con esta práctica.
                        </p>
                        <p>
                            – <strong>Mejora la capacidad pulmonar, la circulación en general y el aprovechamiento del oxígeno</strong> no solo por los músculos (incluyendo el músculo cardíaco), sino también por los órganos internos y la piel, lo cual se refleja en mayor capacidad para realizar esfuerzos y mejoría en las funciones digestivas, renales, inmunológicas, endocrinas, el estado de ánimo, el sueño y de las funciones mentales superiores.
                        </p>
                        <p>
                            – <strong>Reduce la mortalidad cardiovascular.</strong>
                        </p>
                        <p>
                            – <strong>Aumenta la reabsorción de calcio por los huesos,</strong> fortaleciéndolos y disminuyendo el riesgo de fracturas.
                        </p>
                        <p>
                            – <strong>Reafirma los tejidos</strong> y la piel recupera parte de la lozanía perdida, contribuyendo no solo a estar y sentirse más joven sino también parecerlo
                        </p>
                        <p>
                            – <strong>Disminuye los niveles circulantes de adrenalina,</strong> la hormona del estrés, y aumenta los niveles de endorfinas y otras sustancias cerebrales, contribuyendo a bajar la tensión emocional y mejorar el estado anímico, lo cual se refleja en una gran sensación de bienestar físico, emocional y social.
                        </p>
                        <p>
                            Los <strong>ejercicios aeróbicos</strong> más comunes son caminar, trotar, nadar, bailar, esquiar, pedalear y los llamados aeróbicos.
                        </p>
                        <p>
                            Hay que tener en cuenta que los cambios que el ejercicio aeróbico produce en nuestro metabolismo, no se limitan al tiempo de ejercicio sino que perduran por varias horas más.
                        </p>
                        <p>
                            Podemos describir este fenómeno así: después de varios años de poco trabajo físico y de utilizar las calorías provenientes de los carbohidratos y de los azúcares como combustible, cambian las condiciones a un menor aporte de calorías y a una mayor carga de trabajo, lo cual obliga a activar un «generador» extra que utiliza como combustible a las grasas, las cuales le brindan muchas más calorías por gramo (9 contra 4 de los carbohidratos).
                        </p>
                        <p>
                            Al terminar el ejercicio, parece que el organismo dejara un tiempo más prendido ese otro «generador», contribuyendo a una mayor reducción de la grasa corporal.
                        </p>
                        <h5>Orden de los ejercicios</h5>
                        <p>
                            Según este principio, los músculos grandes deben ser ejercitados antes que los pequeños. La razón es muy simple: un músculo pequeño se fatiga antes y con mayor facilidad que uno grande.
                        </p>
                        <p>
                            Por consiguiente, si los músculos pequeños son ejercitados al principio de la sesión, pueden provocar una fatiga prematura general, impidiendo luego el óptimo rendimiento de los grupos musculares grandes.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>
            </Row>
        </Container>
    )
}

export default AerobicExercisesTraining