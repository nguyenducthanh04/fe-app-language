// src/App.js
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Users/UserContext.js";
import DefaultLayout from "./defaultLayout/defaultLayout.js";
import LoginLayout from "./LayoutLoginDefault/LayoutLoginDefault.js";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js";
import ChineseLanguage from "./pages/learn-chinese-language/ChineseLanguage.js";
import KoreaLanguage from "./pages/learn-korea-language/KoreaLanguage.js";
const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="app" style={{background: "#fffbf4"}}>
                    {/* <Header /> */}
                    <div>
                        <Routes>
                            <Route path="/" element={
                                <DefaultLayout>
                                <Home />
                                </DefaultLayout>
                                } />
                            <Route path="/dang-nhap" element={
                                <LoginLayout>
                                <Login />
                                </LoginLayout>
                                } />
                                <Route path="/hoc-tieng-trung" element={
                                    <DefaultLayout>
                                    <ChineseLanguage />
                                    </DefaultLayout>
                                    } />
                                    <Route path="/hoc-tieng-han-quoc" element={
                                    <DefaultLayout>
                                    <KoreaLanguage />
                                    </DefaultLayout>
                                    } />
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
                    {/* <Footer/> */}
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;