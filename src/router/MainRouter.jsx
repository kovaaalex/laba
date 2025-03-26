import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Menu from '../pages/Menu/Menu';
import Marks from '../pages/Marks/Marks';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';
function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/marks" element={<Marks />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
export default MainRouter;