import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { Flex, Box, useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number }) => {
  const { isLoading } = useAuth();
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <li>
      <Box
        borderBottom="1px"
        borderColor="gray.500"
        bg="#ffffff1a"
        mb="10px"
        _hover={{ background: '#ffffff33' }}
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
            disabled={isLoading}
            onClick={() => {
              dispatch(deleteContact(id));
              toast({
                title: `${name} contact has been removed.`,
                position: 'top',
                status: 'info',
                isClosable: true,
              });
            }}
            _hover={{ bg: 'orangered', color: 'white' }}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Box>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
