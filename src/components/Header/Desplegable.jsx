import { Link } from 'react-router-dom';

const Desplegable = (props) =>{

    return (
            <div id="menu">
                <ul>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Entrenamiento</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/musculacion">Musculación</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/entrenamiento-alta-intensidad">Hit</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/principiantes">Principiantes</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicio-aerobico">Ejercicio Aerobico</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/culturistas">Culturistas</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/estiramientos">Estiramientos</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Por Músculo</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/abdominal">Entrenamieno de Abdominal</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/espalda">Entrenamieno de Espalda</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/biceps">Entrenamieno de Biceps</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/pecho">Entrenamieno de Pecho</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/pierna">Entrenamieno de Pierna</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rotador">Entrenamieno de Rotador</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/hombro">Entrenamieno de Hombro</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/triceps">Entrenamieno de Triceps</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Rutinas</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-abdominal">Rutinas Abdominal</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-principiantes">Rutinas Principiantes</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-definicion">Rutinas Definicion</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-fullbody">Rutinas Fullbdoy</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-en-casa">Rutinas en Casa</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-fuerza">Rutinas de Fuerza</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/rutinas-volumen">Rutinas de Volumen</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/otras-rutinas">Otras Rutinas</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Ejercicios</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-abdominal">Ejercicios de Abdominal</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-espalda">Ejercicios de Espalda</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-basicos">Ejercicios Basicos</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-biceps">Ejercicios de Biceps</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-pecho">Ejercicios de Pecho</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-bandas-elasticas">Ejercicios Bandas Elásticas</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-antebrazo">Ejercicios de Antebrazo</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-pierna">Ejercicios de Pierna</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-hombro">Ejercicios de Hombro</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-rotador-hombro">Ejercicios de Rotador de Hombro</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejercicios-trapecio">Ejercicios de Trapecio</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/ejerciciosEjercicios">Ejercicios de Triceps</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Nutricion</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link  onClick={props.onClick} to="/nutricion-culturista">Nutrición Culturista</Link></a>
                            <a className="desplegable"><Link  onClick={props.onClick} to="/nutricion-y-vida-saludable">Nutrición y Vida Saludable</Link></a>
                            <a className="desplegable"><Link  onClick={props.onClick} to="/nutricion-carbohidratos">Carbohidratos</Link></a>
                            <a className="desplegable"><Link  onClick={props.onClick} to="/nutricion-grasas">Grasas</Link></a>
                            <a className="desplegable"><Link  onClick={props.onClick} to="/nutricion-proteinas">Proteínas</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Suplementos</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-como-suplementarse">Como Suplementarse</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-vitaminas-y-minerales">Vitaminas y minerales</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-aminoacidos">Aminoacidos</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-cafeina">Suplementos Cafeína</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-creatina">Suplementos Creatina</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-glutamina">Suplementos Glutamina</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-proteinas">Suplementos Proteinas</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-comprar-proteinas">Comprar Proteínas </Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/suplementos-otros">Otros Suplementos</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Dietas</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/dietas-masa-muscular">Masa Muscular</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/dietas-definicion-muscular">Definición Muscular</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Mujer</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/mujer-dietas-y-nutricion">Dietas y nutrición</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/mujer-pesas-y-entrenamientos">Pesas y Entramientos</Link></a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Objetivos</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable"><Link onClick={props.onClick} to="/objetivo-quemar-grasa">Quemar Grasa</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/objetivo-ganar-masa-muscular">Ganar Masa Muscular</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/objetivo-ganar-peso">Ganar Peso</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/objetivo-perder-peso">Perder Peso</Link></a>
                            <a className="desplegable"><Link onClick={props.onClick} to="/objetivo-definicion-muscular">Definición Muscular</Link></a>
                        </ul>
                    </li>
                </ul>
            </div>
    )
}

export default Desplegable