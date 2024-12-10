import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Logo from "../../images/logo.png"
import chinaFlag from "../../images/china-flag.png"
import koreaFlag from "../../images/kra.jpg"
import anhFlag from "../../images/anh.webp"
import Tippy from '@tippyjs/react/headless';
import "./header.css";
function Header() {
    const [isVisibleLanguage, setIsVisibleLanguage] = useState(true);
    const [isVisibleCourse, setIsVisibleCourse] = useState(true);
    const showLanguage = () => setIsVisibleLanguage(true);
    const hideLanguage = () => setIsVisibleLanguage(false);
    const showCourse = () => setIsVisibleCourse(true);
    const hideCourse = () => setIsVisibleCourse(false);
    return (
     <div className="header">
        <div className="nav">
            <div className="nav-child">
                <div className="select-language">
                <h4>Chọn một loại ngôn ngữ</h4>
                </div>  
                <div className="btn-login">
                    <button>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
        <div className="nav-bottom">
            <div className="logo">
                <img src={Logo}></img>
            </div>
            <div className="option">
                <Tippy render={(attrs) => (
                    <div className="language-stack" tabIndex="-1" {...attrs}>
                        <div className="list-language-stack">
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={chinaFlag}></img>
                                  <p>
                                   Học Tiếng Trung 
                                  </p>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={koreaFlag}></img>
                                  <p>
                                   Học Tiếng Hàn 
                                  </p>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={anhFlag}></img>
                                  <p>
                                   Học Tiếng Anh 
                                  </p>
                           </div>
                            </div>
                        </div>
                    </div>
                )} placement="bottom" interactive visible={isVisibleLanguage} onClickOutside={hideLanguage}>  
                <Link className="option-link" to={""}  onClick={isVisibleLanguage ? hideLanguage : showLanguage}>
                    <h4>Ngôn ngữ</h4>
                </Link>
                </Tippy>
                <Tippy render={(attrs) => (
                    <div className="language-stack" tabIndex="-1" {...attrs}>
                        <div className="list-language-stack">
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={chinaFlag}></img>
                                  <p>
                                    Tiếng Trung 
                                  </p>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={koreaFlag}></img>
                                  <p>
                                    Tiếng Hàn 
                                  </p>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={anhFlag}></img>
                                  <p>
                                    Tiếng Anh 
                                  </p>
                           </div>
                            </div>
                        </div>
                    </div>
                )} placement="bottom" interactive visible={isVisibleCourse} onClickOutside={hideCourse}>  
                <Link className="option-link" to={""}  onClick={isVisibleCourse ? hideCourse : showCourse}>
                    <h4>Khoá học</h4>
                </Link>
                </Tippy>
                 <Link className="option-link" to={""}>
                    <h4>Sổ tay mẫu câu</h4>
                </Link>
            </div>
            <div className="btn-start-learn">
                <button>
                    Bắt đầu học
                </button>
            </div>
        </div>
     </div>
    );
}

export default Header;