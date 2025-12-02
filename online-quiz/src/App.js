import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage'; 
import SubSubjects from './components/SubSubjects/SubSubjects'; 
import QuizLibrary from './components/QuizLibrary/QuizLibrary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/category/:categoryId" element={<SubSubjects />} />
          <Route path="/subject/:subSubjectId" element={<QuizLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;