import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <>
      <EuiProvider colorMode='dark'>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </EuiProvider>
    </>
  );
}

export default App;
