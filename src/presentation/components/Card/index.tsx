import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CardContainer, Title, Button, Text, Avatar, CardFooter, CardHeader, CardContent } from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Title>Titulo</Title>
        <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/41752732?s=40&v=4' }} />
      </CardHeader>
      <CardContent>
        <Text>Conteudo</Text>
      </CardContent>
      <CardFooter>
        <Button onPress={() => {}}>
          <MaterialCommunityIcons name="star"  color={'#FFD02C'}  size={16} />
          <Text color="#FFD02C">Favoritar</Text>
        </Button>
        <Text> 
          <MaterialCommunityIcons name="star" color={'#FFD02C'}  size={16} />
          0
        </Text>
        <Text> Typescript </Text>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;