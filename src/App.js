import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Nav } from './components/portfolio/Nav';
import { Hero } from './components/portfolio/Hero';
import { Work } from './components/portfolio/Work';
import { About } from './components/portfolio/About';
import { Stack } from './components/portfolio/Stack';
import { Experience } from './components/portfolio/Experience';
import { Services } from './components/portfolio/Services';
import { Trust } from './components/portfolio/Trust';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/PortfolioFooter';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
          <Stack />
          <Experience />
          <Services />
          <Trust />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;