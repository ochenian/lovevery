import React from 'react';
import { InputContainer, Label, StyledInput } from './Styles';

const Input = ({ label, ...props }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
