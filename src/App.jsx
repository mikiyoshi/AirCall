import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Test from './components/Test';
import Header from './Header.jsx';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-view">
          <Routes>
            <Route path="/" element={<Home title="Inbox" />} />
          </Routes>
          Some activities should be here
          <Home />
        </div>
      </div>
    </BrowserRouter>
  );
};

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
