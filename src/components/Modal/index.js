import React from 'react';
import { Modal as RNModal, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import { Container, Header, Logo, Form, FormGroup, Label, Input, Buttom } from './styles';

import logo from '../../images/logo.png';

export default function Modal({visible, onClose}) {
  return (
    <RNModal
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Container>
        <Header>
          <Logo source={logo} resizeMode="contain" />
            <TouchableOpacity onPress={onClose}>
            <Ionicons name='ios-close' size={38} color="#0A100D"/>
            </TouchableOpacity>
        </Header>
        <Form>
          <FormGroup>
            <Label>Número da mesa</Label>
            <Input placeholder="Número da mesa" />
          </FormGroup>
          <FormGroup>
            <Label>Pedido</Label>
            <Input placeholder="Itens do pedido" multiline />
          </FormGroup>
          <Buttom>
            <Buttom.Label>Cadastrar Pedido</Buttom.Label>
          </Buttom>
        </Form>
      </Container>
    </RNModal>
  )
}