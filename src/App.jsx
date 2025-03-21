import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Analytics } from '@vercel/analytics/react';

import './App.css';

const Resume = lazy(() => import('./components/resume.jsx')); // Lazy load LoginPage
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
