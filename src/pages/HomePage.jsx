import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <Box maxW="300px" m="0 auto">
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        Contacts book
      </Text>
      <Text textAlign="center" fontSize="xl" my="20px">
        "Contacts book" is a convenient and easy-to-use application that helps
        you store and organize your contacts, so you can always find the
        necessary information quickly and efficiently.
      </Text>
      {!isLoggedIn && (
        <Link to="/login">
          <Text
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Join us now!
          </Text>
        </Link>
      )}
    </Box>
  );
}
