import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Map = React.lazy(() => import('./pages/Map'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

const App = () => {
  return (
    <>
      <Notifications />
      <BrowserRouter>
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
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/services" exact component={Services} />
                  <Route path="/services/:slug" component={ServiceDetail} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/map" component={Map} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/faq" component={FAQ} />
                </Switch>
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