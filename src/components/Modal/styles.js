import styled from 'styled-components/native';

import StyledButtom from '../Button'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`; 

export const Header = styled.View`
  width: 100%;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`; 

export const Logo = styled.Image`
  width: 135px;
`;

export const Form = styled.View`
  padding: 0 16px;
  margin-top: 56px;
`;

export const FormGroup = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`  
  font-size: 18px;
  color: #0A100D;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: ${props => props.multiline ? '120px' : '55px'};
  padding: ${props => props.multiline ? '16px' : '0 16px'};
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Buttom = styled(StyledButtom)`
  margin-top: 16px;

`; 