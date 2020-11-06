/* eslint-disable no-alert */
import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import piso from '../../assets/piso.png';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container, Title, Image, Text } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { Dashboard } = useAuth();

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
            <Title>Colocação de Pisos</Title>
            <Image source={piso} />
            <Text>
              Serviço de remoção, troca e assentamento de pisos de cerâmica,
              porcelanato ou viílico, em residências, salas comerciais ou
              consultórios
            </Text>
            <Button onPress={() => navigation.navigate('Dashboard')}>
              Encontrar Profissionais
            </Button>
            <Button onPress={() => navigation.navigate('Dashboard')}>
              Voltar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
