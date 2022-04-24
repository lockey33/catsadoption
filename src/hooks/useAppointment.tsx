import {useState} from "react";
import axios from "axios";

const useAppointment = () => {

    const appointmentUrl = "https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment";
    const [appointmentObject, setAppointmentObject] = useState(null)

    const fetchAppointment = async (catId: number) => {
        try{
            const query = await axios.post(appointmentUrl, {catId: catId});
            const result = query.data;
            setAppointmentObject(result);
        }catch(err){
            console.log(err);
        }
    }

    return { appointmentObject, fetchAppointment }
}

export default useAppointment