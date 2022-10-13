import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '.';
import { theme } from '../../styles/theme';

export const renderWithTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

test('renders learn react link', () => {
  //example of debug
  const { debug } = renderWithTheme(<Home />);
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
