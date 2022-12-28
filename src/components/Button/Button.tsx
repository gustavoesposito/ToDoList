import React from 'react';
import { ContainerButton, MainButton, TextButton } from './styles';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

// eslint-disable-next-line react/display-name
export default function ({ title, onPress }: ButtonProps) {
  return (
    <ContainerButton onPress={onPress}>
      <MainButton>
        <TextButton>{title}</TextButton>
      </MainButton>
    </ContainerButton>
  );
}
