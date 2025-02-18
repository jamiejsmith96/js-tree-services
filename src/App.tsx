import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader, Center } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load all pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

// Get the base URL from the homepage in package.json or use '/' for development
const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/js-tree-services';

const App = () => {
  return (
    <>
      <Notifications />
      <BrowserRouter basename={baseUrl}>
        <ScrollToTop />
        <div className="app-wrapper" style={{ 
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#fff'
        }}>
          <Header />
          <main style={{ flex: 1, width: '100%' }}>
            <ErrorBoundary>
              <Suspense fallback={
                <Center h="100vh">
                  <Loader size="xl" />
                </Center>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;