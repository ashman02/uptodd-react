import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file
import About from './about'
import { Link } from 'react-router-dom';
// import Home from './Home'
import './Aboutsection.css'
import './App'
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="./about.jsx" element={<About />} />
        <Route path="./ApplicationForm.jsx" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
