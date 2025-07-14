import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PersonDetail from "./components/PersonDetail"; // Create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/person/:id" element={<PersonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
