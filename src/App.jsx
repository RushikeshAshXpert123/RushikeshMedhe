import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from './components/Loader.jsx';
import './App.css';

const Resume = lazy(() => import('./components/resume.jsx'));

// Higher-order component to add loading delay
const withLoadingDelay = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Minimum 2.5 seconds delay to show loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5500);

      return () => clearTimeout(timer);
    }, []);

    return isLoading ? <LoadingScreen /> : <WrappedComponent {...props} />;
  };
};

const DelayedResume = withLoadingDelay(Resume);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<DelayedResume />} />
        </Routes>
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default App;