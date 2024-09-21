import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file
import './about';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./about.jsx" element={<About />} />
        <Route path="./ApplicationForm.jsx" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
