import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OrgChart from "./components/OrgChart";

import PersonDetail from "./components/PersonDetail"; // Create this next
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrgChart />} />
        <Route path="/home" element={<Header />} /> {/* 👈 Add this line */}
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
