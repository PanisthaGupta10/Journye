import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from "./views/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;