import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages//Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import VetAppointment from "./Pages/VetAppointment";
import Main from "./Pages/Main";
import Product from "./Pages/Product";
import HealthCare from "./Pages/HealthCare";
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="health" element={<HealthCare />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="vetappointment" element={<VetAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
