import React from "react";
import Buttons from "./Buttons";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container
} from 'reactstrap';

function MyCard(props) {
    const { pic, title, date, explanation, changeYear, yearsArray } = props;

    return (
        <Container fluid="md">
            <Card body >
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{date}</CardSubtitle>
                </CardBody>
                <CardImg top width="100%" src={pic} alt="Nasa photo of the day"/>
                <CardBody>
                    <CardText>{explanation}</CardText>
                </CardBody>
                <Buttons
                changeYear={changeYear}
                yearsArray={yearsArray}
                />
            </Card>
        </Container>
    )
}

export default MyCard;