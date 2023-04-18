import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';

export const ContactListItem = ({ id, name, number }) => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  return (
    <li>
      <Box
        bg="#ffffff1a"
        mb="10px"
        _hover={{ background: '#ffffff33' }}
        cursor="pointer"
        borderRadius="4px"
        pl="15px"
      >
        <Flex align="center" justify="space-between" gap="20px">
          <Flex align="center" gap="15px">
            <span>{name}</span>
            <span>{number}</span>
          </Flex>
          <Button
            p="1px"
            type="button"
            disabled={isRefreshing}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Box>
    </li>
  );
};
