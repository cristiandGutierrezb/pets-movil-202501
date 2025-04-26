import { render, fireEvent } from "@testing-library/react-native";

import FunComponent from "../FunComponent";

test('Counter is correct', () => {
  const { getByText } = render(<FunComponent />)
  const button = getByText('Agregar');

  fireEvent.press(button);

  expect(getByText('Count: 1')).toBeTruthy();

})