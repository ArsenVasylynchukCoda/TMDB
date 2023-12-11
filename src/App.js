import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui'

function App() {
  return (
    <>
      <EuiProvider>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </EuiProvider>
    </>
  );
}

export default App;
