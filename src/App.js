import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import AdminPage from "./pages/shop/Admin/Admin";
import { ShopContextProvider } from "./context/shop-context";
import LoginForm from "./pages/shop/Admin/LoginFrom";
import RegistrationForm from "./pages/shop/Admin/RegistrationFrom";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
      
          <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/Reg" element={<RegistrationForm/>}/>
          <Route path="/Admin" element={<AdminPage/>}/>
            <Route path="/home" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
           
       
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
