import React from 'react';

import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import arCondicionado from '../../assets/ar-condicionado.png';
import pintura from '../../assets/pintura-interna.png';
import piso from '../../assets/piso.png';
import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';

import { Container, Title, Logo, Image } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { Service } = useAuth();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Title>Agende um de nossos serviços</Title>
            <Image source={arCondicionado} />

            <Image source={pintura} />

            <Image source={piso} />
            <Button onPress={() => navigation.navigate('Service')}>Ir</Button>
          </Container>
          <Logo source={logoImg} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;
