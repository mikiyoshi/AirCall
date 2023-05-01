import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer.jsx';

import Header from './Header.jsx';
import AllCalls from './pages/AllCalls/index.js';
import Archive from './pages/Archive/index.js';
import Detail from './pages/Detail/index.js';
import Home from './pages/Home';
import Inbox from './pages/Inbox/index.js';
import NumberKey from './pages/NumberKey/index.js';
import Outbox from './pages/Outbox/index.js';
import Settings from './pages/Settings/index.js';
import Test from './pages/Test/index.js';
import Voicemail from './pages/Voicemail/index.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container p-0">
        <Header />
        <div className="container-view p-0">
          <Routes>
            {/* <Route path="/" element={<Home title="Home" />} /> */}
            <Route path="/" element={<Test title="Test" />} />
            <Route path="/Inbox" element={<Inbox title="Inbox" />} />
            <Route path="/AllCalls" element={<AllCalls title="AllCalls" />} />
            <Route path="/Outbox" element={<Outbox title="Outbox" />} />
            <Route path="/Archive" element={<Archive title="Archive" />} />
            <Route path={`/Detail/:id`} element={<Detail title="Detail" />} />
            <Route path={`/NumberKey`} element={<NumberKey />} />
            <Route path={`/Settings`} element={<Settings title="Settings" />} />
            <Route
              path={`/Voicemail`}
              element={<Voicemail title="Voicemail" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
