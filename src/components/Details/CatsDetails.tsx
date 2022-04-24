import React, { useState} from "react";
import {Row, Column, Text, SecondaryTitle, Button, CenteredRow} from "../Styles/Global";
import {DetailImage} from "./Style";
import useCats from "../../hooks/useCats";
import {useParams} from "react-router-dom";
import {StyledModal} from "../Modal/Style";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import * as moment from "moment";
import useAppointment from "../../hooks/useAppointment";

const CatDetails = () => {
    const params = useParams();
    const catId = parseInt(params.id);
    const cat: any = useCats({wantedCat: catId})
    const {appointmentObject, fetchAppointment} = useAppointment()
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    async function handleClick(catId: number) {
        await fetchAppointment(catId)
        toggleModal()
    }

    return (
        <>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                <Row style={{display: "flex", justifyContent: "end", alignItems: "end"}}>
                    <FontAwesomeIcon onClick={toggleModal} icon={faXmark}/>
                </Row>
                <Column>
                    <Text>Appointment request</Text>
                    {appointmentObject !== null &&
                        <>
                            <p>Thank you ! </p>
                            <p>Let's meet at "{cat.location}" the {moment(appointmentObject.appointment).format("DD/MM/YYYY")} at {moment(appointmentObject.appointment).format("hh:mma")} to finalize {cat.name}'s adoption
                            </p>
                        </>
                    }
                </Column>

            </StyledModal>
            <Row style={{padding: "4rem"}}>

                <DetailImage src={cat.picturePath} alt={cat.name}/>
                <Column style={{textAlign: "left", width: "100%", alignItems: "start", justifyContent: "space-around"}}>
                    <Column style={{"alignItems": "start"}}>
                        <SecondaryTitle>{cat.name}</SecondaryTitle>
                        <Text>Birthdate: {cat.birthdate}</Text>
                        <Text>Gender: {cat.gender}</Text>
                        <Text>Breed: {cat.breed}</Text>
                    </Column>
                    <Row style={{width: "100%"}}>
                        <Button onClick={() => handleClick(catId)}>Make an appointment to adopt</Button>
                    </Row>
                </Column>
            </Row>
        </>

    )
}

export default CatDetails