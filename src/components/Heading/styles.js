import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, isLightText }) => css`
    color: ${isLightText ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
