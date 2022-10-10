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

  // a example for to test the styles css
  const headingContainer = screen.getByRole('heading', {
    name: 'oi',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });

  // this online works because of jest-styled-components
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
