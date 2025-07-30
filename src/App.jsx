import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OrgChart from "./components/OrgChart";
import Dashboard from "./components/Dashboard";

import PersonDetail from "./components/PersonDetail"; 
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard />} />
        <Route path="/orgchart" element={<OrgChart />} />
        <Route path="/home" element={<Header />} /> {/* 👈 Add this line */}
=======
        <Route path="/" element={<OrgChart />} />
        <Route path="/home" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 6d546e064a5a063c3318b90a4d655461c6afab7e
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
