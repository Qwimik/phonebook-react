import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex align="center" gap="2em">
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Flex>
    </nav>
  );
};
