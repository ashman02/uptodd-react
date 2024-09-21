import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file
import './about';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
