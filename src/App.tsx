import { useEffect } from 'react'
import './App.css'
import { useCustomDispatch } from './utils/store'
import { fetchGetShips } from './utils/slices/shipsSlice'
import { Header } from './components/header/header'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { NotFoundPage } from './pages/not-found-page'
import { Footer } from './components/footer/footer'
import { Modal } from './components/modal/modal'
import { MainPage } from './pages/main-page/main-page'

const AppRouter = () => {
  const dispatch = useCustomDispatch();
  const location = useLocation();
  const background = location.state?.background;
  
  useEffect(() => {
    dispatch(fetchGetShips());
  }, []);

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/ship/:id" element={<Modal />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path='/ship/:id'
            element={
              <Modal />
            }
          />
        </Routes>)}
    </>


    
  );
};

export const App = () => (
  <BrowserRouter>
    <Header />
    <AppRouter />
    <Footer />
  </BrowserRouter>
);
