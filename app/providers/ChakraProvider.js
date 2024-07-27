'use client';

import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react';

export function Providers({ children }) {
  return (
    <ChakraUIProvider>
      {children}
    </ChakraUIProvider>
  );
}