import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
            Log In
          </Button>
        </Flex>
      </form>
      <Link to="/register">
        <Text
          textAlign="center"
          mt="20px"
          color="gray.500"
          fontSize="md"
          fontWeight="thin"
          _hover={{ color: '#e0e0e0' }}
        >
          No account? Register now!
        </Text>
      </Link>
    </>
  );
};
