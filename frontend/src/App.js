import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages//Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
