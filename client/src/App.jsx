import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="container mt-5"><h1>EduFlex Frontend</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
