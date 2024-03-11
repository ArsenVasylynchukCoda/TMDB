import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui'
import SearchPage from './pages/SearchPage'
import PopularMoviesPage from "./pages/PopularMoviesPage";

function App() {

    return (
        <>
            <EuiProvider>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path='/movies' element={<PopularMoviesPage />}/>
                </Routes>
            </EuiProvider>
        </>
    )
}

export default App
