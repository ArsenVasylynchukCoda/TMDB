import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { EuiProvider } from '@elastic/eui'
import SearchPage from './pages/SearchPage'

function App() {

    return (
        <>
            <EuiProvider>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                </Routes>
            </EuiProvider>
        </>
    )
}

export default App
