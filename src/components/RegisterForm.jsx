import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <Flex
          align="center"
          justify="center"
          gap="15px"
          direction="column"
          maxW="300px"
          m="0 auto"
        >
          <Input
            variant="filled"
            placeholder="Username"
            type="text"
            name="name"
          />
          <Input
            variant="filled"
            placeholder="Email"
            type="email"
            name="email"
          />
          <Input
            variant="filled"
            placeholder="Password"
            type="password"
            name="password"
          />
          <Button type="submit" w="100%">
            Register
          </Button>
        </Flex>
      </form>
      <Link to="/login">
        <Text
          textAlign="center"
          mt="20px"
          color="gray.500"
          fontSize="md"
          fontWeight="thin"
          _hover={{ color: '#e0e0e0' }}
        >
          Log in to your account
        </Text>
      </Link>
    </>
  );
};
