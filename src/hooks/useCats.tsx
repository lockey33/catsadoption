import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Cat from "../interfaces/Cat";
import FetchOptions from "../interfaces/FetchOptions";


const useCats = (options: FetchOptions) => {
    const catsUrl = "https://europe-west1-matters-test.cloudfunctions.net/getCats";
    const [data, setData] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(true);

    const fetchCats = useCallback(async () => {
        try{
            const query = await axios.get(catsUrl);
            const fetchedCats = query.data;
            if(isSubscribed){
                if(options.hasOwnProperty("wantedCat") && options.wantedCat){ // for one cat details
                    const wantedCat = fetchedCats.find((c: Cat) =>  Number(c.id) === Number(options.wantedCat))
                    setData(wantedCat);
                }else{
                    setData(fetchedCats);
                }
            }
        }catch(err){
            console.log(err)
            return err
        }
    }, [data, isSubscribed])

    useEffect( () => {
        fetchCats();
        // cleanup function to avoid react lifecycle testing errors
        return () => {
            setIsSubscribed(false);
        }
    }, [fetchCats]);

    return { data, fetchCats }
}

export default useCats;