
const Desplegable = (props) =>{

    return (
            <div id="menu">
                <ul>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Entrenamiento</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/musculacion">Musculación</a>
                            <a className="desplegable" href="/entrenamiento-alta-intensidad">Hit</a>
                            <a className="desplegable" href="/principiantes">Principiantes</a>
                            <a className="desplegable" href="/ejercicio-aerobico">Ejercicio Aerobico</a>
                            <a className="desplegable" href="/culturistas">Culturistas</a>
                            <a className="desplegable" href="/estiramientos">Estiramientos</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Por Músculo</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/abdominal">Entrenamieno de Abdominal</a>
                            <a className="desplegable" href="/espalda">Entrenamieno de Espalda</a>
                            <a className="desplegable" href="/biceps">Entrenamieno de Biceps</a>
                            <a className="desplegable" href="/pecho">Entrenamieno de Pecho</a>
                            <a className="desplegable" href="/pierna">Entrenamieno de Pierna</a>
                            <a className="desplegable" href="/rotador">Entrenamieno de Rotador</a>
                            <a className="desplegable" href="/hombro">Entrenamieno de Hombro</a>
                            <a className="desplegable" href="/triceps">Entrenamieno de Triceps</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span className={props.styles[0]}>Rutinas</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/rutinas-abdominal">Rutinas Abdominal</a>
                            <a className="desplegable" href="/rutinas-principiantes">Rutinas Principiantes</a>
                            <a className="desplegable" href="/rutinas-definicion">Rutinas Definicion</a>
                            <a className="desplegable" href="/rutinas-fullbody">Rutinas Fullbdoy</a>
                            <a className="desplegable" href="/rutinas-en-casa">Rutinas en Casa</a>
                            <a className="desplegable" href="/rutinas-fuerza">Rutinas de Fuerza</a>
                            <a className="desplegable" href="/rutinas-volumen">Rutinas de Volumen</a>
                            <a className="desplegable" href="/otras-rutinas">Otras Rutinas</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Ejercicios</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/ejercicios-abdominal">Ejercicios de Abdominal</a>
                            <a className="desplegable" href="/ejercicios-espalda">Ejercicios de Espalda</a>
                            <a className="desplegable" href="/ejercicios-basicos">Ejercicios Basicos</a>
                            <a className="desplegable" href="/ejercicios-biceps">Ejercicios de Biceps</a>
                            <a className="desplegable" href="/ejercicios-pecho">Ejercicios de Pecho</a>
                            <a className="desplegable" href="/ejercicios-bandas-elasticas">Ejercicios Bandas Elásticas</a>
                            <a className="desplegable" href="/ejercicios-antebrazo">Ejercicios de Antebrazo</a>
                            <a className="desplegable" href="/ejercicios-pierna">Ejercicios de Pierna</a>
                            <a className="desplegable" href="/ejercicios-hombro">Ejercicios de Hombro</a>
                            <a className="desplegable" href="/ejercicios-rotador-hombro">Ejercicios de Rotador de Hombro</a>
                            <a className="desplegable" href="/ejercicios-trapecio">Ejercicios de Trapecio</a>
                            <a className="desplegable" href="/ejercicios-triceps">Ejercicios de Triceps</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Nutricion</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/nutricion-culturista">Nutrición Culturista</a>
                            <a className="desplegable" href="/nutricion-y-vida-saludable">Nutrición y Vida Saludable</a>
                            <a className="desplegable" href="/nutricion-carbohidratos">Carbohidratos</a>
                            <a className="desplegable" href="/nutricion-grasas">Grasas</a>
                            <a className="desplegable" href="/nutricion-proteinas">Proteínas</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Suplementos</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/suplementos-como-suplementarse">Como Suplementarse</a>
                            <a className="desplegable" href="/suplementos-vitaminas-y-minerales">Vitaminas y minerales</a>
                            <a className="desplegable" href="/suplementos-aminoacidos">Aminoacidos</a>
                            <a className="desplegable" href="/suplementos-cafeina">Suplementos Cafeína</a>
                            <a className="desplegable" href="/suplementos-creatina">Suplementos Creatina</a>
                            <a className="desplegable" href="/suplementos-glutamina">Suplementos Glutamina</a>
                            <a className="desplegable" href="/suplementos-proteinas">Suplementos Proteinas</a>
                            <a className="desplegable" href="/suplementos-comprar-proteinas">Comprar Proteínas </a>
                            <a className="desplegable" href="/suplementos-otros">Otros Suplementos</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Dietas</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/dietas-masa-muscular">Masa Muscular</a>
                            <a className="desplegable" href="/dietas-definicion-muscular">Definición Muscular</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Mujer</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/mujer-dietas-y-nutricion">Dietas y nutrición</a>
                            <a className="desplegable" href="/mujer-rutinas">Rutinas para mujeres</a>
                            <a className="desplegable" href="/mujer-pesas-y-entrenamientos">Pesas y Entramientos</a>
                        </ul>
                    </li>
                    <li className={props.styles[0]}><span href="#" className={props.styles[0]}>Objetivos</span>
                        <ul className={props.styles[1]}>
                            <a className="desplegable" href="/objetivo-quemar-grasa">Quemar Grasa</a>
                            <a className="desplegable" href="/objetivo-ganar-masa-muscular">Ganar Masa Muscular</a>
                            <a className="desplegable" href="/objetivo-ganar-peso">Ganar Peso</a>
                            <a className="desplegable" href="/objetivo-perder-peso">Perder Peso</a>
                            <a className="desplegable" href="/objetivo-definicion-muscular">Definición Muscular</a>
                        </ul>
                    </li>
                </ul>
            </div>
    )
}

export default Desplegable