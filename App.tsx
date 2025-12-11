import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Links from './pages/Links';
import Work from './pages/Work';
import Ask from './pages/Ask';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/links" element={<Links />} />
          <Route path="/work" element={<Work />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;