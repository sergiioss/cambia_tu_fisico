import './AminoAcidsSupplements.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'


const AminoAcidsSupplements = () => {

    return (

        <Container className="aminoAcids-supplements">
            <Row className="first-section-aminoAcids-supplements">
                <Col className="body-aminoAcids-supplements" xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                    <h1>Aminoácidos, los cimientos de nuestros músculos</h1>
                    <br />
                    <Row className="icons-aminoAcids-supplements" xs={12} sm={12} md={9} lg={9} xl={9} xxl={9}>
                        <Link className="icon-facebook" to="https://www.facebook.com/CambiatufisicoWeb/"></Link>
                        <Link className="icon-instagram" to="https://www.instagram.com/cambiatufisico_/"></Link>
                        <Link className="icon-twitter" to="https://twitter.com/cambiatufisico"></Link>
                    </Row>
                    <Image className="img-aminoAcids-supplements" src="https://www.cambiatufisico.com/wp-content/uploads/aminoacidos2-696x392.jpg.webp"></Image>
                    <section>
                        <p>
                            Los <strong>aminoácidos</strong> son compuestos orgánicos que tienen en sus estructuras un radical amino NH2 y uno Carboxilo COOH.
                        </p>
                        <p>
                            Los <strong>aminoácidos</strong> que se encuentran en la proteína se dividen en dos grupos: esenciales y no esenciales
                        </p>
                        <p>
                            Existen <strong>20 aminoácidos distintos</strong> y ocho son considerados como esenciales para los adultos. Los alimentos que contienen una baja cantidad en uno o más de estos nutrientes esenciales son considerados como proteínas incompletas, como las que se encuentran en los alimentos de origen vegetal.
                        </p>
                        <p>
                            Pero en realidad, realizando las <strong>combinaciones precisas</strong>, se pueden cubrir las necesidades proteicas utilizando solamente proteínas de origen vegetal (medida que adoptan los culturistas vegetarianos estrictos), siempre que se elijan las combinaciones de alimentos de tal modo que no se limite la cantidad de ningún aminoácido esencial.
                        </p>
                        <p>
                            Aunque miles de <strong>aminoácidos</strong> pueden estar formando las diferentes proteínas, solo hay 22 requeridos por el organismo para configurar las diversas cadenas polipetidas, cuya naturaleza y función depende de los tipos de aminoácidos que las forman y de la secuencia con que se ordenan dentro de esta.
                        </p>
                        <p>
                            Todos los aminoácidos excepto la Glicina son asimétricos pudiendo asumir diferentes configuraciones espaciales en la naturaleza donde existen dos formas: <strong>D</strong>, y <strong>L</strong>, pero solo la <strong>L</strong> es encontrada en las proteínas de los tejidos corporales y tiene efectos biológicos en el organismo.
                        </p>
                        <h3>Tipos de aminoácidos</h3>
                        <p>
                            Se pueden dividir en tres grandes grupos: Aminoácidos Esenciales, <strong>No esenciales y Condicionales.</strong>
                        </p>
                        <p>
                            Existen 13 aminoácidos no esenciales los cuales pueden ser producidos a partir de otros aminoácidos y 9 <strong>“esenciales”</strong> que son los que el organismo no puede sintetizar y por lo tanto necesitan ser aportados desde la dieta.
                        </p>
                        <p>
                            Los aminoácidos no esenciales, desde el punto de vista metabólico, <strong>no son menos importantes que los</strong> esenciales, pero pueden ser sintetizados en el organismo a partir de éstos últimos.
                        </p>
                        <p>
                            Los aminoácidos no esenciales pueden ser obtenidos desde las diversas fuentes de proteínas pero también pueden ser sintetizados a partir de otras sustancias como los glúcidos siempre que haya Nitrógeno a disposición para producir las reacciones de aminación correspondientes.
                        </p>
                        <p>
                            Las dietas que contengan una muy baja concentración de uno o más aminoácidos esenciales son considerados como dietas biológicamente pobres e incompletas, mientras que las dietas que aporten una cantidad adecuada de aminoácidos esenciales y no esenciales se consideran más completas, desde el punto de vista del aporte proteico.
                        </p>
                        <p>
                            Dentro de los aminoácidos considerados en principio como “No Esenciales”, hay algunos como la <strong>Taurina, alanina, glutamina, y arginina</strong> cuyas necesidades aumentan en situaciones de alta demanda Física o Psíquicas, especialmente a nivel <strong>muscular y cerebral</strong>, de modo que se transforman en aminoácidos <strong>semi-esenciales o condicionales</strong> ya que sus necesidades son tan importantes que su aporte exterior se hace necesario para mantener una optima funcionalidad de los procesos energéticos y metabólicos especialmente en períodos de regeneración o construcción muscular, luego de esfuerzos físicos intensos y prolongados.
                        </p>
                        <h5>Esquema de los tres tipos de aminoácidos</h5>
                        <Row>
                            <Image className="image-center" src="https://www.cambiatufisico.com/wp-content/uploads/suplementacion-aminoacidos.jpg"></Image>
                        </Row>
                        <h5>Ácido L-Glutámico</h5>
                        <p>
                            Es un aminoácido no esencial que aparece en las proteínas. Juega un rol importante en la correcta metabolización de los carbohidratos.
                        </p>
                        <p>
                            Remueve el amoníaco de los músculos. También es necesario para la producción de energía desde los BCAAs (branched-chain aminoacids = aminoacidos de cadena ramificada).
                        </p>
                        <p>
                            Durante la remoción del amoníaco, en combinación con éste y vitamina B6 se transforma en glutamina. La Glutamina es un aminoácido no esencial que cumple funciones de neurotransmisor en el cerebro y es vital para el correcto funcionamiento del sistema inmunológico.
                        </p>
                        <h5>L-Lisina</h5>
                        <p>
                            La Lisina es una amicoácido esencial que se encuentra en grandes cantidades en el tejido muscular, es necesaria para un buen crecimiento y desarrollo de los huesos, ayuda a la absorción de calcio.
                        </p>
                        <p>
                            También es fundamental para la formación de colágeno, encimas, anticuerpos, y otros compuestos, y junto con metionina, hierro y vitamina B6 interviene en la producción de Carnitina. También ayuda en la obtención de energía de las grasas y en la síntesis de las proteínas.
                        </p>
                        <h5>L-Valina</h5>
                        <p>
                            Es un aminoácido encadenado esencial. Al igual que otros aminoácidos encadenados, Isoleucina y leucina, forma parte integral del tejido muscular y puede ser usado para conseguir energía por los músculos en ejercitación.
                        </p>
                        <p>
                            Posibilita un balance de nitrógeno positivo e interviene en el metabolismo muscular y en la reparación de tejidos.
                        </p>
                    </section>
                </Col>
                <Aside className="aside"/>  
            </Row>
        </Container>
    )
}

export default AminoAcidsSupplements