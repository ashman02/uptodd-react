import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file
import About from './About';
import Home from './Home';
import './Aboutsection.css';
import './App.css';
import './su'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Apply" element={<ApplicationForm />} />
        <Route path="/step" element={<Step />} />
        <Route path="/achievers" element={<SuccessStory />} />
      </Routes>
    </Router>
  );
}

export default App;
