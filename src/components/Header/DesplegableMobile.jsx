import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const DesplegableMobile = (props) =>{

    return (
        <Accordion alwaysOpen className="accordion-menu">
            <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header-first">Entrenamiento</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item >
                    <Link to="/musculacion">Musculación</Link>
                    <Link to="/entrenamiento-alta-intensidad">Hit</Link>
                    <Link to="/principiantes">Principiantes</Link>
                    <Link to="/ejercicio-aerobico">Ejercicio Aerobico</Link>
                    <Link to="/culturistas">Culturistas</Link>
                    <Link to="/estiramientos">Estiramientos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion-header-first">Por músculo</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/abdominal">Entrenamieno de Abdominal</Link>
                    <Link to="/espalda">Entrenamieno de Espalda</Link>
                    <Link to="/biceps">Entrenamieno de Biceps</Link>
                    <Link to="/pecho">Entrenamieno de Pecho</Link>
                    <Link to="/pierna">Entrenamieno de Pierna</Link>
                    <Link to="/rotador">Entrenamieno de Rotador</Link>
                    <Link to="/hombro">Entrenamieno de Hombro</Link>
                    <Link to="/triceps">Entrenamieno de Triceps</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header className="accordion-header-first">Rutinas</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/rutinas-abdominal">Rutinas Abdominal</Link>
                    <Link to="/rutinas-principiantes">Rutinas Principiantes</Link>
                    <Link to="/rutinas-definicion">Rutinas Definicion</Link>
                    <Link to="/rutinas-fullbody">Rutinas Fullbdoy</Link>
                    <Link to="/rutinas-en-casa">Rutinas en Casa</Link>
                    <Link to="/rutinas-fuerza">Rutinas de Fuerza</Link>
                    <Link to="/rutinas-volumen">Rutinas de Volumen</Link>
                    <Link to="/otras-rutinas">Otras Rutinas</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
            <Accordion.Header className="accordion-header-first">Ejercicios</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/ejercicios-abdominal">Ejercicios de Abdominal</Link>
                    <Link to="/ejercicios-espalda">Ejercicios de Espalda</Link>
                    <Link to="/ejercicios-basicos">Ejercicios Basicos</Link>
                    <Link to="/ejercicios-biceps">Ejercicios de Biceps</Link>
                    <Link to="/ejercicios-pecho">Ejercicios de Pecho</Link>
                    <Link to="/ejercicios-bandas-elasticas">Ejercicios Bandas Elásticas</Link>
                    <Link to="/ejercicios-antebrazo">Ejercicios de Antebrazo</Link>
                    <Link to="/ejercicios-pierna">Ejercicios de Pierna</Link>
                    <Link to="/ejercicios-hombro">Ejercicios de Hombro</Link>
                    <Link to="/ejercicios-rotador-hombro">Ejercicios de Rotador de Hombro</Link>
                    <Link to="/ejercicios-trapecio">Ejercicios de Trapecio</Link>
                    <Link to="/ejerciciosEjercicios">Ejercicios de Triceps</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
            <Accordion.Header className="accordion-header-first">Nutricion</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/nutricion-culturista">Nutrición Culturista</Link>
                    <Link to="/nutricion-y-vida-saludable">Nutrición y Vida Saludable</Link>
                    <Link to="/nutricion-carbohidratos">Carbohidratos</Link>
                    <Link to="/nutricion-grasas">Grasas</Link>
                    <Link to="/nutricion-proteinas">Proteínas</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
            <Accordion.Header className="accordion-header-first">Suplementos</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/suplementos-como-suplementarse">Como Suplementarse</Link>
                    <Link to="/suplementos-vitaminas-y-minerales">Vitaminas y minerales</Link>
                    <Link to="/suplementos-aminoacidos">Aminoacidos</Link>
                    <Link to="/suplementos-cafeina">Suplementos Cafeína</Link>
                    <Link to="/suplementos-creatina">Suplementos Creatina</Link>
                    <Link to="/suplementos-glutamina">Suplementos Glutamina</Link>
                    <Link to="/suplementos-proteinas">Suplementos Proteinas</Link>
                    <Link to="/suplementos-comprar-proteinas">Comprar Proteínas </Link>
                    <Link to="/suplementos-otros">Otros Suplementos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
            <Accordion.Header className="accordion-header-first">Dietas</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/dietas-masa-muscular">Masa Muscular</Link>
                    <Link to="/dietas-definicion-muscular">Definición Muscular</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
            <Accordion.Header className="accordion-header-first">Mujer</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/mujer-dietas-y-nutricion">Dietas y nutrición</Link>
                    <Link to="/mujer-pesas-y-entrenamientos">Pesas y Entramientos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
            <Accordion.Header className="accordion-header-first">Objetivos</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link to="/objetivo-quemar-grasa">Quemar Grasa</Link>
                    <Link to="/objetivo-ganar-masa-muscular">Ganar Masa Muscular</Link>
                    <Link to="/objetivo-ganar-peso">Ganar Peso</Link>
                    <Link to="/objetivo-perder-peso">Perder Peso</Link>
                    <Link to="/objetivo-definicion-muscular">Definición Muscular</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>    
    )
}

export default DesplegableMobile