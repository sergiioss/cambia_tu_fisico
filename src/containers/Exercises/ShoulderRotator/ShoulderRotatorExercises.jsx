import './ShoulderRotatorExercises.scss'
import {Row, Container} from 'react-bootstrap'
import RotatorTraining from '../../ForMuscle/Rotator/RotatorTraining'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const ShoulderRotatorExercises = () => {

    return (

        <Container className="shoulderRotator-exercise-training">
            <Row className="first-section-shoulderRotator-exercise">
            <Breadcrumb></Breadcrumb>
                <RotatorTraining></RotatorTraining>
            </Row>
        </Container>
    )
}

export default ShoulderRotatorExercises