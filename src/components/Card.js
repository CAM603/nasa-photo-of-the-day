import React, { useState } from "react";
import Buttons from "./Buttons";

import styled from 'styled-components'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

    


function MyCard(props) {
    const { pic, title, date, explanation, changeYear, yearsArray } = props;

    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Card style={{maxWidth: '500px'}}>
                <CardImg src={pic} style={{maxWidth: '500px'}} alt="Nasa photo of the day"/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{date}</CardSubtitle>
                    <br></br>
                    <Button size="sm" color="danger" onClick={toggle}>Learn More</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>{title}: {date}</ModalHeader>
                        <ModalBody>
                            <CardText>{explanation}</CardText>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
                <Buttons
                changeYear={changeYear}
                yearsArray={yearsArray}
                />
            </Card>
        </>
    )
}

export default MyCard;