import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ParallaxHero from "./components/ParallaxHero.jsx";
import Footer from "./components/Footer.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import ServicesOffered from "./components/ServicesOffered.jsx";
import Partnerships from "./components/Partnerships.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Routes>
                    <Route path="/" element={<ParallaxHero />} />
                    <Route path="/who-we-are" element={<WhoWeAre />} />
                    <Route path="/services" element={<ServicesOffered />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    <Route path="/why-choose-us" element={<WhyChooseUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
