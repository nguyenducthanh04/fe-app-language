// src/App.js
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Users/UserContext.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./pages/home/home.js";
const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="app" style={{background: "#fffbf4"}}>
                    <Header />
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/* <Route path="/education" element={<Education />} />
                            <Route path="/interest" element={<Interest />} />
                            <Route path="/send-mail" element={<SendMail />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route
                                path="/blog-detail/:title"
                                element={<BlogDetail />}
                            />
                            <Route
                                path="/profile-user/:name"
                                element={<ProfileUser />}
                            /> */}
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;