import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  //example of debug
  const { debug } = renderTheme(<Home />);
  debug();

  // a example to test the styles css
  const headingContainer = screen.getByRole('heading', {
    name: 'Meu titulo',
  });

  // this work without jest-styled-components
  expect(headingContainer).toHaveStyle({
    color: '#0A1128',
  });

  // this only works because of jest-styled-components
  expect(headingContainer).toHaveStyleRule('color', '#0A1128');
});
