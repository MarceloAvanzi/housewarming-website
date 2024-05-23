import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DesireList, Home, OwnedList } from '../pages'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/desire-list' element={<DesireList />} />
                <Route path='/owned-list' element={<OwnedList />} />
            </Routes>
        </BrowserRouter>
    )
}