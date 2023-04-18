import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex align="center" gap="15px">
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Flex>
  );
};
