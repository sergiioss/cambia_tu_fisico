import './ShoulderRotatorExercises.scss'
import {Col, Row, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Aside from '../../../components/Aside/Aside'
import RotatorTraining from '../../ForMuscle/Rotator/RotatorTraining'


const ShoulderRotatorExercises = () => {

    return (

        <Container className="shoulderRotator-exercise-training">
            <Row className="first-section-shoulderRotator-exercise">
                <RotatorTraining></RotatorTraining>
            </Row>
        </Container>
    )
}

export default ShoulderRotatorExercises