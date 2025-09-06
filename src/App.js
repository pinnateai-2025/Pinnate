import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={ <HomePage />} />
         <Route path="/contact" element={ <ContactPage />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
