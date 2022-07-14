import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
// import { useSelector } from "react-redux";

// Components
// import NavBar from './components/navBar/navBar';
// import { ProtectedRoute } from "./components/auth/ProtectedRoute";

// Views
import Home from './views/home';
import About from './views/about';
import Apply from './views/apply';
import LoginView from './views/login';
import Contact from './views/contact';
import Dashboard from './views/dashboard';
import Footer from './components/footer/footer';
import SubFooter from './components/footer/subFooter';
import Spinner from './components/spinner/spinner';
import NOT_FOUND_404 from './views/Error_404_page';
import NewNavBar from './components/newNavBar/newNavBar';
// import { ToastContainer } from 'react-toastify'

function App() {
  // const isAuthenitcated = useSelector(({ auth: { isAuthenitcated }}) => isAuthenitcated);
  let [loading] = useState(false);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <NewNavBar />

      {/* <ToastContainer position='bottom-right' newestOnTop /> */}
      {loading ? <Spinner /> : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" to="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/apply" element={<Apply />} />
            <Route exact path="/login" element={<LoginView />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* {isAuthenitcated && <Route exact path="/dashboard" element={<Dashboard />} />} */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            {/* <ProtectedRoute exact path="/dashboard" component={<Dashboard />} /> */}
            <Route path="*" element={<NOT_FOUND_404 />} />
          </Routes>
        </BrowserRouter>
      )}
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
