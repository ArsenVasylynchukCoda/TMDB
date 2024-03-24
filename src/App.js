import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui'
import SearchPage from './pages/SearchPage'
import PopularMoviesPage from "./pages/PopularMoviesPage";
import MovieCard from './components/MovieCard/MovieCard'

function App() {

    return (
        <>
            <EuiProvider>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path='/movies' element={<PopularMoviesPage />}/>
                    <Route path='/movie/:id' element={<MovieCard />}/>
                </Routes>
            </EuiProvider>
        </>
    )
}

export default App
