import React, {useEffect, useState} from "react";
import { Column, List, ListItem, Image, Text } from "../Styles/Global";
import { useTheme } from "styled-components";
import axios from "axios";

const CatsGallery = () => {
  const theme = useTheme();
  const [cats, setCats] = useState([]);
  const catsUrl = "https://europe-west1-matters-test.cloudfunctions.net/getCats";

  const fetchCats = async() => {
    try{
      const query = await axios.get(catsUrl);
      const fetchedCats = query.data;
      setCats(fetchedCats);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchCats();
  },[])

  return (
      <List>
        {cats && cats.map((cat:any) => (
          <ListItem theme={theme} key={cat.id}>
            <Column>
              <Text>{cat.name}</Text>
              <Image src={cat.picturePath} alt={cat.name} />
            </Column>
          </ListItem>
        ))}
      </List>
  );
};

export default CatsGallery;
