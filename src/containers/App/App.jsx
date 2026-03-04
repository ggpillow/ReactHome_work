import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../../components/Header"
import HomePage from "../../pages/HomePage/HomePage"
import ProfilePage from "../../pages/ProfilePage/ProfilePage"
import FavoritePage from "../../pages/FavoritePage/FavoritePage"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

