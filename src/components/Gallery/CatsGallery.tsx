import React from "react";
import { Column, List, ListItem, Image, Text } from "../Styles/Global";
import { useTheme } from "styled-components";
import useCats from "../../hooks/useCats";
import Cat from "../../interfaces/Cat";
import { useNavigate } from "react-router-dom";


const CatsGallery = () => {

    const { data } = useCats({wantedCat: undefined});
    const theme = useTheme();
    const navigate = useNavigate();

    async function handleClick(id: Number) {
        navigate('details/' + id)
    }

  return (
      <List>
        {data && data.map((cat: Cat) => (
          <ListItem onClick={() => handleClick(cat.id)} theme={theme} key={cat.id}>
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
