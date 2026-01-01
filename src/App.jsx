import React from "react";
import LandingPage from "./venderDashboard/pages/LandingPage";
import { Routes, Route } from "react-router-dom" //importing routes
import "./App.css";
import NotFound from "./venderDashboard/components/NotFound";
import UserDetails from "./venderDashboard/components/UserDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>              
  )
}
export default App;