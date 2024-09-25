import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './Components/Cursor/Cursor';
import Home from './Pages/Home/Home';
import Main from './Layout/Main';

const App = () => {

  return (
    <Router>
      <div>
        <Cursor />
        <Routes>
        <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
