import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen overflow-x-hidden ">
                <Routes>
                    <Route path="/" element={
                        <div className="relative">

                            <LandingPage />
                            <Footer/>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;