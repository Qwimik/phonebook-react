import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Flex, Button, Text } from '@chakra-ui/react';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align="center" gap="10px">
      <Text textTransform="capitalize" fontWeight="bold" letterSpacing="0.05em">
        {user.name}
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())} p="1px">
        <ImExit />
      </Button>
    </Flex>
  );
};
