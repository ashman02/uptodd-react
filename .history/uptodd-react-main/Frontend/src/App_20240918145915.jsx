import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from './ApplicationForm'; // Move the form component to a separate file



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abou />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;