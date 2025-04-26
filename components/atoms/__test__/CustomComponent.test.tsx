import React from 'react';
import { render } from '@testing-library/react-native';
import CustomComponent from "../CustomComponent";

test('Verificando correcto funcionamiento de CustomComponent', () => {
  const { getByText } = render(<CustomComponent name="Cristian" />)
  expect(getByText('Hi, Cristian')).toBeTruthy()
}) 