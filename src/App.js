import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui'
import {useState} from "react";
import SearchPage from "./pages/SearchPage";

function App() {
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)

  return (
    <>
      <EuiProvider>
        <Routes>
          <Route path='/' element={<MainPage searchValue={searchValue} setSearchValue={setSearchValue} />} />
            <Route path='/search' element={<SearchPage oldValue={searchValue} setOldValue={setSearchValue} />} />
        </Routes>
      </EuiProvider>
    </>
  );
}

export default App;
