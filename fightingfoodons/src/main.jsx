import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimePage, CharactersPage, Footer, GamesPage, Header, HomePage, MangaPage } from './components';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/anime" element={<AnimePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/manga" element={<MangaPage />} />
      <Route path="/games" element={<GamesPage />} />

      {/* <Route path="/*" element={<PageNotFound />} /> */}

    </Routes>
  </BrowserRouter>
  <Footer />
  </>
)