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
    const { data } = useCats({wantedCat: catId})
    const {appointmentObject, fetchAppointment} = useAppointment()
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    async function handleClick(catId: number) {
        await fetchAppointment(catId)
        toggleModal()
    }
    if(data) {

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
                                <p>Let's meet at "{data.location}"
                                    the {moment(appointmentObject.appointment).format("DD/MM/YYYY")} at {moment(appointmentObject.appointment).format("hh:mma")} to
                                    finalize {data.name}'s adoption
                                </p>
                            </>
                        }
                    </Column>

                </StyledModal>
                <Row style={{padding: "4rem"}}>
                    <DetailImage src={data.picturePath} alt={data.name}/>
                    <Column
                        style={{textAlign: "left", width: "100%", alignItems: "start", justifyContent: "space-around"}}>
                        <Column style={{"alignItems": "start"}}>
                            <SecondaryTitle>{data.name}</SecondaryTitle>
                            <Text>Birthdate: {data.birthdate}</Text>
                            <Text>Gender: {data.gender}</Text>
                            <Text>Breed: {data.breed}</Text>
                        </Column>
                        <Row style={{width: "100%"}}>
                            <Button onClick={() => handleClick(catId)}>Make an appointment to adopt</Button>
                        </Row>
                    </Column>
                </Row>
            </>
    )
    }else{
        return <CenteredRow>Loading ... </CenteredRow>
    }

}

export default CatDetails