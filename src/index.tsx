import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// Import Mantine styles first
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

// Then import our global styles
import './styles/global.css';

// Preload critical fonts
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.as = 'style';
fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
document.head.appendChild(fontPreload);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider
        defaultColorScheme="light"
        theme={{
          primaryColor: 'green',
          primaryShade: 6,
          fontFamily: 'Inter, sans-serif',
          headings: {
            fontFamily: 'Inter, sans-serif',
          },
          colors: {
            green: [
              '#E8F5E9',
              '#C8E6C9',
              '#A5D6A7',
              '#81C784',
              '#66BB6A',
              '#4CAF50',
              '#43A047',
              '#388E3C',
              '#2E7D32',
              '#1B5E20',
            ],
          },
          components: {
            Button: {
              defaultProps: {
                size: 'md',
              },
              styles: {
                root: {
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                },
              },
            },
            Container: {
              defaultProps: {
                size: 'xl',
              },
            },
            Card: {
              defaultProps: {
                padding: 'xl',
                radius: 'md',
              },
            },
          },
        }}
      >
        <ModalsProvider>
          <Notifications position="top-right" />
          <App />
        </ModalsProvider>
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>
);