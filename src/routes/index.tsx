import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DesireList, Home } from '../pages'

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/desire-list' element={<DesireList />} />
        </Routes>
        </BrowserRouter>
    )
}