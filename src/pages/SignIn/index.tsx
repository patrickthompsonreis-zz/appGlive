/* eslint-disable no-alert */
import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container, Title, Image } from './styles';

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
            <Image source={logoImg} />
            <Button onPress={() => navigation.navigate('Dashboard')}>
              Entrar com Facebook
            </Button>
            {/* <Title>Faça seu logon</Title> */}
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
