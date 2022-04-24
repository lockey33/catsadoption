import {useEffect, useState} from "react";
import axios from "axios";
import Cat from "../interfaces/Cat";

interface Options {
    wantedCat: number
}

const useCats = (options: Options) => {
    const catsUrl = "https://europe-west1-matters-test.cloudfunctions.net/getCats";
    const [cats, setCats] = useState([]);

    const fetchCats = async() => {
        try{
            const query = await axios.get(catsUrl);
            const fetchedCats = query.data;
            if(options.hasOwnProperty("wantedCat") && options.wantedCat){ // for one cat details
                const wantedCat = fetchedCats.find((c: Cat) =>  Number(c.id) === Number(options.wantedCat))
                setCats(wantedCat);
            }else{
                setCats(fetchedCats);
            }

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCats();
    })

    return cats
}

export default useCats;