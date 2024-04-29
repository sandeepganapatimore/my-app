import "./App.css";
import DashBoard from "./Components/DashBoard";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import CustomerDashBoard from "./Customers/CustomerDashBoard";
import CustomerLogin from "./Customers/CustomerLogin";
import CustomerSignUp from "./Customers/CustomerSignup";
// import Dashboard from "./components/Dashboard";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmployeeDashBoard from "./Components/EmployessDashBoard";
import EmployeeLogin from "./Components/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/employeeLogin" element={<SignUp/>}/>
    <Route path="/customerSignUp" element={<CustomerSignUp/>}/>
    <Route path="/customerLogin" element={<CustomerLogin/>}/>
    <Route path="/EmployeeLogin" element={<EmployeeLogin/>}/>
    <Route path="/EmployeeLogin/DashBoard" element={<EmployeeDashBoard/>} />
    <Route path="/customer/DashBoard" element={<DashBoard/>} />
    <Route />
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;