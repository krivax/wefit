import React, { useEffect } from "react";
import { useModalize } from "react-native-modalize";
import {
  Box,
  Button,
  ButtonContainer,
  Container, 
  Input, 
  Text
} from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const UserSelectionModal = ({ visible, onClose }: Props) => {
  const { ref, open, close } = useModalize();

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return (
    <Container ref={ref} onClose={onClose}>
      <Text fontSize="16px" margin="16px 0">Alterar usuário selecionado</Text>
      <Box>
        <Text fontSize="12px" margin="2px 12px 0px">Nome do usuário</Text>
        <Input />
      </Box>
      <ButtonContainer>
        <Button>
          <Text fontSize="15px" color="#1976D2">CANCELAR</Text>
        </Button>
        <Button bColor>
          <Text fontSize="15px" color="#FFF">SALVAR</Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default UserSelectionModal;
