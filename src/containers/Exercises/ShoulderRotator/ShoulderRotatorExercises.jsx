import './ShoulderRotatorExercises.scss'
import {Row, Container} from 'react-bootstrap'
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