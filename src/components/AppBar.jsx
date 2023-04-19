import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { useColorMode, Button } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box py="15px" position="relative">
        <Flex align="center" justify="space-between" gap="150px">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <Button
            onClick={toggleColorMode}
            p="1px"
            position="absolute"
            bottom="-3em"
            right="0"
            size="sm"
          >
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Box>
    </header>
  );
};
