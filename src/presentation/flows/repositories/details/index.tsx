import React from "react";
import { BoxButton, Button, Container, Content, Text } from "./styles";

const Details = () => {
  return (
    <Container>
      <Content>
        <Text>appswefit/create-react-app</Text>
        <Text margin="16px 0 0 0" fontSize="16px" color="#9A9A9A">Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.</Text>
        <Text margin="16px 0 0 0" fontSize="16px" color="#9A9A9A">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.</Text>
        <Text margin="16px 0 0 0" fontSize="14px" color="#9A9A9A">Typescript</Text>
      </Content>
      <BoxButton>
        <Button>
          <Text>Ver repositório</Text>
        </Button>
        <Button>
          <Text>Favoritar</Text>
        </Button>
      </BoxButton>
    </Container>
  );
};


export default Details;
