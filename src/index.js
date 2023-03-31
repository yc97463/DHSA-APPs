import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './_layout/layout';
import Home from './pages/home';
import Card from './pages/card';
import Auth from './pages/auth';
import AuthGoogle from './pages/auth/google';
import Room from './pages/room/index';
import NotFound from './pages/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="card" element={<Card />} />
          <Route path="auth" element={<Auth />} />
          <Route path="auth/google" element={<AuthGoogle />} />
          <Route path="room" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
