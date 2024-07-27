'use client';

import './styles//globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers/ChakraProvider';
import { Provider } from 'react-redux';
import {store} from './store/store.js';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>    
        <Providers>
          <Provider store={store}>
            {children}
          </Provider>
        </Providers>
      </body>
    </html>
    
    
  )
}
