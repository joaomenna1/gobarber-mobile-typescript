import React from 'react';
import { View, Image } from 'react-native';
import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const SigIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default SigIn;
