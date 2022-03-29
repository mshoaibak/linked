import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import SuccessStory from "./components/SuccessStory";
import About from "./components/About";
import All from "./components/All";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/">
            <Navbar />
          </Route>
        </Routes>
      </Router> */}
      {/* <Navigation /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
