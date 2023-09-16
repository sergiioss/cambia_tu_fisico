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
                    <Link onClick={props.onClick} to="/musculacion">Musculación</Link>
                    <Link onClick={props.onClick} to="/entrenamiento-alta-intensidad">Hit</Link>
                    <Link onClick={props.onClick} to="/principiantes">Principiantes</Link>
                    <Link onClick={props.onClick} to="/ejercicio-aerobico">Ejercicio Aerobico</Link>
                    <Link onClick={props.onClick} to="/culturistas">Culturistas</Link>
                    <Link onClick={props.onClick} to="/estiramientos">Estiramientos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion-header-first">Por músculo</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/abdominal">Entrenamieno de Abdominal</Link>
                    <Link onClick={props.onClick} to="/espalda">Entrenamieno de Espalda</Link>
                    <Link onClick={props.onClick} to="/biceps">Entrenamieno de Biceps</Link>
                    <Link onClick={props.onClick} to="/pecho">Entrenamieno de Pecho</Link>
                    <Link onClick={props.onClick} to="/pierna">Entrenamieno de Pierna</Link>
                    <Link onClick={props.onClick} to="/rotador">Entrenamieno de Rotador</Link>
                    <Link onClick={props.onClick} to="/hombro">Entrenamieno de Hombro</Link>
                    <Link onClick={props.onClick} to="/triceps">Entrenamieno de Triceps</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header className="accordion-header-first">Rutinas</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/rutinas-abdominal">Rutinas Abdominal</Link>
                    <Link onClick={props.onClick} to="/rutinas-principiantes">Rutinas Principiantes</Link>
                    <Link onClick={props.onClick} to="/rutinas-definicion">Rutinas Definicion</Link>
                    <Link onClick={props.onClick} to="/rutinas-fullbody">Rutinas Fullbdoy</Link>
                    <Link onClick={props.onClick} to="/rutinas-en-casa">Rutinas en Casa</Link>
                    <Link onClick={props.onClick} to="/rutinas-fuerza">Rutinas de Fuerza</Link>
                    <Link onClick={props.onClick} to="/rutinas-volumen">Rutinas de Volumen</Link>
                    <Link onClick={props.onClick} to="/otras-rutinas">Otras Rutinas</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
            <Accordion.Header className="accordion-header-first">Ejercicios</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/ejercicios-abdominal">Ejercicios de Abdominal</Link>
                    <Link onClick={props.onClick} to="/ejercicios-espalda">Ejercicios de Espalda</Link>
                    <Link onClick={props.onClick} to="/ejercicios-basicos">Ejercicios Basicos</Link>
                    <Link onClick={props.onClick} to="/ejercicios-biceps">Ejercicios de Biceps</Link>
                    <Link onClick={props.onClick} to="/ejercicios-pecho">Ejercicios de Pecho</Link>
                    <Link onClick={props.onClick} to="/ejercicios-bandas-elasticas">Ejercicios Bandas Elásticas</Link>
                    <Link onClick={props.onClick} to="/ejercicios-antebrazo">Ejercicios de Antebrazo</Link>
                    <Link onClick={props.onClick} to="/ejercicios-pierna">Ejercicios de Pierna</Link>
                    <Link onClick={props.onClick} to="/ejercicios-hombro">Ejercicios de Hombro</Link>
                    <Link onClick={props.onClick} to="/ejercicios-rotador-hombro">Ejercicios de Rotador de Hombro</Link>
                    <Link onClick={props.onClick} to="/ejercicios-trapecio">Ejercicios de Trapecio</Link>
                    <Link onClick={props.onClick} to="/ejerciciosEjercicios">Ejercicios de Triceps</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
            <Accordion.Header className="accordion-header-first">Nutricion</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link  onClick={props.onClick} to="/nutricion-culturista">Nutrición Culturista</Link>
                    <Link  onClick={props.onClick} to="/nutricion-y-vida-saludable">Nutrición y Vida Saludable</Link>
                    <Link  onClick={props.onClick} to="/nutricion-carbohidratos">Carbohidratos</Link>
                    <Link  onClick={props.onClick} to="/nutricion-grasas">Grasas</Link>
                    <Link  onClick={props.onClick} to="/nutricion-proteinas">Proteínas</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
            <Accordion.Header className="accordion-header-first">Suplementos</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/suplementos-como-suplementarse">Como Suplementarse</Link>
                    <Link onClick={props.onClick} to="/suplementos-vitaminas-y-minerales">Vitaminas y minerales</Link>
                    <Link onClick={props.onClick} to="/suplementos-aminoacidos">Aminoacidos</Link>
                    <Link onClick={props.onClick} to="/suplementos-cafeina">Suplementos Cafeína</Link>
                    <Link onClick={props.onClick} to="/suplementos-creatina">Suplementos Creatina</Link>
                    <Link onClick={props.onClick} to="/suplementos-glutamina">Suplementos Glutamina</Link>
                    <Link onClick={props.onClick} to="/suplementos-proteinas">Suplementos Proteinas</Link>
                    <Link onClick={props.onClick} to="/suplementos-comprar-proteinas">Comprar Proteínas </Link>
                    <Link onClick={props.onClick} to="/suplementos-otros">Otros Suplementos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
            <Accordion.Header className="accordion-header-first">Dietas</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/dietas-masa-muscular">Masa Muscular</Link>
                    <Link onClick={props.onClick} to="/dietas-definicion-muscular">Definición Muscular</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
            <Accordion.Header className="accordion-header-first">Mujer</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/mujer-dietas-y-nutricion">Dietas y nutrición</Link>
                    <Link onClick={props.onClick} to="/mujer-pesas-y-entrenamientos">Pesas y Entramientos</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
            <Accordion.Header className="accordion-header-first">Objetivos</Accordion.Header>
            <Accordion.Body>
                <ListGroup.Item>
                    <Link onClick={props.onClick} to="/objetivo-quemar-grasa">Quemar Grasa</Link>
                    <Link onClick={props.onClick} to="/objetivo-ganar-masa-muscular">Ganar Masa Muscular</Link>
                    <Link onClick={props.onClick} to="/objetivo-ganar-peso">Ganar Peso</Link>
                    <Link onClick={props.onClick} to="/objetivo-perder-peso">Perder Peso</Link>
                    <Link onClick={props.onClick} to="/objetivo-definicion-muscular">Definición Muscular</Link>
                </ListGroup.Item>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>    
    )
}

export default DesplegableMobile