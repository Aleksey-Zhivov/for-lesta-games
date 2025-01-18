import { useEffect } from 'react'
import './App.css'
import { useCustomDispatch } from './utils/store'
import { fetchGetShips } from './utils/slices/shipsSlice'
import { Ships } from './components/ships/ships'
import { Header } from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main-page'
import { NotFoundPage } from './pages/not-found-page'
import { Footer } from './components/footer/footer'
import { ModalUI } from './components/ui/modal-ui/modal'
import { Ship } from './components/ship/ship'
import { Modal } from './components/modal/modal'

const AppRouter = () => {
  const dispatch = useCustomDispatch();
  
  useEffect(() => {
    dispatch(fetchGetShips());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ship/:id" element={<Modal />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export const App = () => (
  <BrowserRouter>
    <Header />
    <AppRouter />
    <Footer />
  </BrowserRouter>
);
