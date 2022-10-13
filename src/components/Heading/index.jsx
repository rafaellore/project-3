import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children, isLightText = false }) => {
  return <Styled.Title isLightText={isLightText}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  isLightText: P.bool,
};
