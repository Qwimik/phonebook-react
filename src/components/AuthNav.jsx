import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #616161;
  &.active {
    color: #e0e0e0;
  }
`;

export const AuthNav = () => {
  return (
    <Flex align="center" gap="15px">
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Flex>
  );
};
