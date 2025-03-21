import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Resume = lazy(() => import('./components/resume.jsx')); // Lazy load Resume component

function App() {
  return (
    <Router basename="/RushikeshMedhe">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
