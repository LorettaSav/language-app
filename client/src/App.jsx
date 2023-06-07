import { Routes, Route, Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import Review from "./pages/Review";
import Play from "./pages/Play";
//import background from "./background.jpg";
import Form from "./Components/Form";
import HomePage from "./pages/HomePage";
//import RegistrationForm from "./Components/RegistrationForm";
//import NavBar from "./Components/NavBar";
//import PrivatePage from "./Components/PrivatePage";
//import { AuthContext } from "./Contexts/authContext";

import "./App.css";
//import Login from "./Components/Login";
//import RequireAuth from "./Components/RequireAuth";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     setUser(true);
  //   }
  // })
  // const authObject = {
  //   user,
  //   login,
  //   logout
  // }

  // function login(username, password) {
  //   setUser(true);
  //   localStorage.removeItem("token")
  // }

  // function logout() {
  //   setUser(false)
  // }


  return (
    // <AuthContext.Provider value={authObject}>
    <div style={{ textAlign: "center" }}>
        <HomePage /> {/* my logo*/}
        
      {/* <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/login" element={<Login/>} />
              <Route path="/dashboard" element={<RequireAuth>
                <PrivatePage/>
              </RequireAuth>} />
          </Routes>
        </div>

      </div> */}
      <div className="homeBox">
        
        <nav style={{ display: "flex", justifyContent: "start" }}>
          <div className="link-btn">
            <Link to="/add/form" className="buttons">
              Add a New Word
            </Link>
          </div>
          <div className="link-btn">
            <Link to="/Review" className="buttons">
              Review Your Words
            </Link>
          </div>
          <div className="link-btn">
            <Link to="/Play" className="buttons">
              Play!
            </Link>
          </div>
        </nav>
      </div>
      {/* <div>
        <RegistrationForm />
      </div> */}
      <Routes>
        <Route path="/add/form" element={<Form />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Play" element={<Play />} />
      </Routes>
      </div>
          // </AuthContext.Provider>

  );
}

export default App;
