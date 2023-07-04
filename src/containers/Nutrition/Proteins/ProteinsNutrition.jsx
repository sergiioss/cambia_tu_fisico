import './ProteinsNutrition.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const ProteinsNutrition = () => {

    return (

        <Container className="proteinsNutrition-nutrition-training">
            <Row className="first-section-proteinsNutrition-nutrition">
                <Col className="body-proteinsNutrition-nutrition-training" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Proteínas ✔ Guía Completa para dominar este Macronutriente</h1>
                    <i>Cómo consumir las mejores proteínas y en la cantidad adecuada.</i>
                    <Row className="icons-proteinsNutrition-nutrition" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-proteinsNutrition-nutrition" src="https://www.cambiatufisico.com/wp-content/uploads/proteinas-3-696x460.jpg"></Image>
                    <section>
                        <p>
                            Las <strong>proteínas</strong> son los nutrientes estructurales del organismo y están constituidas por unidades elementales llamadas <strong>aminoácidos</strong>, necesarias para el crecimiento y metabolismo humanos.
                        </p>
                        <p>
                            Durante siglos, las proteínas se consideraron el ingrediente más importante de la dieta y la fuente de la velocidad y la fuerza para el esfuerzo atlético.
                        </p>
                        <Row className="square-proteinsNutrition-nutrition">
                            <p className="title-square-proteinsNutrition-nutrition">Contenidos</p>
                            <ul>
                                <li className="li-square-proteinsNutrition-nutrition">1 Para que sirven las proteínas</li>
                                <li>2 Mejores fuentes de proteínas</li>
                                <li>3 Cuántas proteínas debemos tomar</li>
                                <li>4 Déficit de proteínas y pérdida de músculo</li>
                                <li>5 ¿Tomar demasiadas proteínas es malo para los riñones?</li>
                                <li>6 Conclusiones</li>
                                <li>7 Más información sobre las proteínas</li>
                            </ul>
                        </Row>
                        <h3>Para que sirven las proteínas</h3>
                        <p>
                            Aunque ahora sabemos que <strong>los hidratos de carbono son la principal fuente de energía</strong> para los humanos, las proteínas siguen siendo un importante nutriente de especial interés, sobre todo entre levantadores de pesas, culturistas y aquellos que realizan un entrenamiento de fuerza.
                        </p>
                        <p>
                            Cabe mencionar que es uno de los nutrientes que ningún <strong>culturista</strong> de cualquier nivel debe de pasar por alto si su objetivo es el de construir un físico atlético y muscular.
                        </p>
                        <p>
                            El consumir <strong>proteína</strong> en cantidades adecuadas o no, puede ser la razón por la cual el atleta no vea resultados en el gimnasio y su físico. Lo que se traduce en que mucho del tiempo entrenado y el esfuerzo que conlleva resultarán inútiles si se omite este importantísimo nutriente.
                        </p>
                        <p>
                            Cuando el cuerpo no recibe diariamente las proteínas que necesita para la formación de los tejidos, busca en sus propios tejidos las proteínas que le faltan, produciéndose una desintegración de las proteínas orgánicas y pérdida de masa muscular.
                        </p>
                        <p>
                            Las <strong>proteínas</strong> realizan numerosas funciones en el organismo:
                        </p>
                        <li>Son el <strong>componente estructural</strong> más importante de las células.</li>
                        <li><strong>Construcción y reposición</strong> de células, tejidos, órganos, etc.</li>
                        <li><strong>Formación de anticuerpos</strong> (protección contra enfermedades).</li>
                        <li><strong>La hemoglobina</strong> (proteína transportadora de oxígeno), las enzimas y diversas hormonas son producidas a partir de ellas.</li>
                        <li><strong>Producción de energía</strong> (4 kcal por g de proteínas),</li>
                        <br />
                        <p>
                            Aunque ésta última no debe ser su principal función, pues siempre que se disponga de una buena fuente de hidratos y grasas, las proteínas deben ser aprovechadas para funciones más importantes, como reparar nuestras fibras musculares y hacerlas más fuertes.
                        </p>
                        <h3>Mejores fuentes de proteínas</h3>
                        <p>
                            Las proteínas de más <strong>calidad</strong> son las de origen <strong>animal</strong> pero hay que elegirlas con cuidado debido a la cantidad de grasas que pueden contener.
                        </p>
                        <p>
                            Por ejemplo la <strong>carne roja</strong> magra aun puede contener hasta un 40% de las calorías procedentes de la grasa. Los <strong>culturistas</strong> optan con más frecuencia por la pechuga de pollo y de pavo, así como por el pescado en lugar de la carne roja debido a la relativa carencia de grasa no visible en estos alimentos.
                        </p>
                        <p>
                            Solo un 18% de las calorías de la pechuga de pollo sin piel tienen su origen en la grasa, mientras que la pechuga de pavo sin piel y algunos pescados bajan hasta solo un 7% de las calorías procedentes de la grasa.
                        </p>
                        <p>
                            Para elegir la mejor fuente o combinación de fuentes de <strong>proteínas</strong> podemos observar la siguiente tabla, que hace una clasificación de las proteínas basándose en dos medidas científicas de la calidad de las proteínas, el PEP y el IDCAAP.
                        </p>
                        <p>
                            <strong>PEP</strong> (Proporción de la Eficiencia de las Proteínas)
                        </p>
                        <p>
                            Compara la capacidad de cada gramo de proteína para provocar el crecimiento muscular en roedores.
                        </p>
                        <p>
                            <strong>IDCAAP </strong>(Indicador de Digestibilidad Corregida de los Aminoácidos de las Proteínas)
                        </p>
                        <p>
                            Nos dice cuánto se aproxima una proteína a la combinación “ideal” de aminoácidos en los seres humanos.
                        </p>
                        <table>
                            <thead>
                                <th colSpan="3" className="header-table-proteins">Rutina de hombro para tamaño muscular</th>
                                <tr>
                                    <td className="center">Fuente Proteica</td>
                                    <td>PEP</td>
                                    <td>IDCAAP</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Huevos</td>
                                    <td>3,8</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Pescado</td>
                                    <td>3,6</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Leche(de vaca)</td>
                                    <td>3,1</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Proteína de Suero</td>
                                    <td>3,0</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Ternera</td>
                                    <td>2,9</td>
                                    <td>0,91</td>
                                </tr>
                                <tr>
                                    <td>Caseína</td>
                                    <td>2,8</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Aislado de proteínas de soja</td>
                                    <td>2,1</td>
                                    <td>1,00</td>
                                </tr>
                                <tr>
                                    <td>Semillas de soja</td>
                                    <td>2,1</td>
                                    <td>0,92</td>
                                </tr>
                                <tr>
                                    <td>Trigo</td>
                                    <td>1,5</td>
                                    <td>0,42</td>
                                </tr>
                                
                            </tbody>
                        </table>
                            <br />
                        <p>
                            Como puede observarse en la tabla las <strong>proteínas de origen animal</strong>, como los huevos, el suero y la ternera generalmente son superiores a las proteínas de origen vegetal como el trigo, siendo la soja la notable excepción.
                        </p>
                        <p>
                            Los huevos, la leche y el pescado proporcionan las proteínas de mayor <strong>calidad</strong>, seguidos por la ternera, el pollo y el pavo, el cerdo y los alimentos de origen vegetal.
                        </p>
                        <p>
                            En resumen, las mejores fuentes de proteínas son partes magras de ternera, pechuga de pavo y de pollo, huevos, pescado, requesón y yogur desnatado, carne roja de pollo y pavo y leche desnatada.
                        </p>
                        <h3>Cuántas proteínas debemos tomar</h3>
                        <p>
                            Nos referimos a cantidad de <strong>proteínas</strong> tanto de suplementos como de comida natural si estamos realizando <strong>ejercicio de gimnasio</strong>.
                        </p>
                        <p>
                            Y como sabrás, es importante que la mayor parte de las proteínas que ingieres no provengan de suplementos, si no de alimentos como el <strong>pollo, huevos, pescado…</strong>
                        </p>
                        <h5>Las proteínas que necesitas</h5>
                        <p>
                            A la hora de responder a la pregunta de <strong>cuántas proteínas necesitamos</strong> debemos considerar dos factores clave que hacen que necesitemos más o menos proteínas independientemente de si hacemos ejercicio o no:
                        </p>
                        <li>La cantidad de calorías que ingerimos según nuestro objetivo</li>
                        <li>La fuente de proteínas</li>
                        <p>
                            Las <strong>proteínas</strong> pueden ser utilizadas para conseguir energía cuando se ingieren menos calorías de las que se consumen.
                        </p>
                        <p>
                            Si este es el caso, la ingesta de proteínas no se utilizará únicamente con el objetivo previsto de construir y reponer tejido magro.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default ProteinsNutrition