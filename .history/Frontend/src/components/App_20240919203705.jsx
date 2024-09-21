import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file
import About from './About';
import Home from './Home';
import './Aboutsection.css';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Apply" element={<ApplicationForm />} />
        <Route path="/step" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
