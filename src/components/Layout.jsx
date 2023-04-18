import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <Box maxW="1270px" mx="auto" px="15px">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </div>
  );
};
