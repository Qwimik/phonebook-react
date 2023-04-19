import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #616161;
  &.active {
    color: #e0e0e0;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex align="center" gap="2em">
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Flex>
    </nav>
  );
};
