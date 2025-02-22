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
const Quote = React.lazy(() => import('./pages/Quote'));

// Base URL should always be '/' since we're deploying to root
const baseUrl = '/';

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
              <Routes>
                <Route path="/" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Home />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/about" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <About />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/services" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Services />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/services/:slug" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <ServiceDetail />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/blog" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Blog />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/blog/:slug" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <BlogDetail />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/gallery" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Gallery />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/contact" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Contact />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/faq" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <FAQ />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="/quote" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Quote />
                    </Suspense>
                  </ErrorBoundary>
                } />
                <Route path="*" element={
                  <ErrorBoundary>
                    <Suspense fallback={
                      <Center h="100vh">
                        <Loader size="xl" variant="dots" color="green" />
                      </Center>
                    }>
                      <Home />
                    </Suspense>
                  </ErrorBoundary>
                } />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;