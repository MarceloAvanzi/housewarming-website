import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}