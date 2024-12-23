import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Logo from "../../images/logo.png"
import chinaFlag from "../../images/china-flag.png"
import koreaFlag from "../../images/kra.jpg"
import anhFlag from "../../images/anh.webp"
import Tippy from '@tippyjs/react/headless';
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
function Header() {
    const [isVisibleLanguage, setIsVisibleLanguage] = useState(false);
    const [isVisibleCourse, setIsVisibleCourse] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisibleLanguageMobile, setIsVisibleLanguageMobile] = useState(false);
    const [isVisibleCourseMobile, setIsVisibleCourseMobile] = useState(false);
    const [isVisibleNoteMobile, setIsVisibleNoteMobile] = useState(false);

    const showLanguage = () => setIsVisibleLanguage(true);
    const hideLanguage = () => setIsVisibleLanguage(false);
    const showCourse = () => setIsVisibleCourse(true);
    const hideCourse = () => setIsVisibleCourse(false);

    const disPlayLanguageMobile = () => {
        setIsVisibleLanguageMobile(!isVisibleLanguageMobile)
    }
    const disPlayCourseMobile = () => {
        setIsVisibleCourseMobile(!isVisibleCourseMobile)
    }
    const disPlayNoteMobile = () => {
        setIsVisibleNoteMobile(!isVisibleNoteMobile)
    }
    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
     <div className="header">
        <div className="nav">
            <div className="nav-child">
                <div className="select-language">
                <h4>Chọn một loại ngôn ngữ</h4>
                </div>  
                <div className="btn-login">
                    <button>
                        <Link to={"/dang-nhap"} className="btn-login-redirect">
                        Đăng nhập
                        </Link>
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
                                  <Link to={"/hoc-tieng-trung"} className="link-learn-language">
                                   Học Tiếng Trung 
                                  </Link>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={koreaFlag}></img>
                           <Link to={"/hoc-tieng-han-quoc"} className="link-learn-language">
                                   Học Tiếng Hàn 
                                  </Link>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={anhFlag}></img>
                           <Link to={"/hoc-tieng-trung"} className="link-learn-language">
                                   Học Tiếng Trung 
                                  </Link>
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
                           <Link to={"/hoc-tieng-trung"} className="link-learn-language">
                                   Học Tiếng Trung 
                                  </Link>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={koreaFlag}></img>
                           <Link to={"/hoc-tieng-trung"} className="link-learn-language">
                                   Học Tiếng Trung 
                                  </Link>
                           </div>
                            </div>
                            <div className="language-stack-item">
                           <div className="language-item-child">
                           <img src={anhFlag}></img>
                           <Link to={"/hoc-tieng-trung"} className="link-learn-language">
                                   Học Tiếng Trung 
                                  </Link>
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
            <div className="menu-icon" onClick={openMenu}>
                        {isMenuOpen ? <FaTimes className="icon-time"/> : <FaBars className="icon-bar"/>}
            </div>
        </div>
        {isMenuOpen && (
                <div className="mobile-menu">
                  <div className="option-mobile">
                    <ul>
                        <li><p onClick={disPlayLanguageMobile}>Ngôn ngữ</p></li>
                        {isVisibleLanguageMobile && (
                             <div className="language-stack-mobile">
                             <div className="list-language-stack-mobile">
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={chinaFlag}></img>
                                       <p>
                                        Học Tiếng Trung 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={koreaFlag}></img>
                                       <p>
                                        Học Tiếng Hàn 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={anhFlag}></img>
                                       <p>
                                        Học Tiếng Anh 
                                       </p>
                                </div>
                                 </div>
                             </div>
                         </div>
                        )}
                        <li><p onClick={disPlayCourseMobile}>Khóa học</p></li>
                        {isVisibleCourseMobile && (
                             <div className="language-stack-mobile">
                             <div className="list-language-stack-mobile">
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={chinaFlag}></img>
                                       <p>
                                         Tiếng Trung 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={koreaFlag}></img>
                                       <p>
                                         Tiếng Hàn 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={anhFlag}></img>
                                       <p>
                                         Tiếng Anh 
                                       </p>
                                </div>
                                 </div>
                             </div>
                         </div>
                        )}
                        <li><p onClick={disPlayNoteMobile}>Sổ tay mẫu câu</p></li>
                        {isVisibleNoteMobile && (
                             <div className="language-stack-mobile">
                             <div className="list-language-stack-mobile">
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={chinaFlag}></img>
                                       <p>
                                         Tiếng Trung 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={koreaFlag}></img>
                                       <p>
                                         Tiếng Hàn 
                                       </p>
                                </div>
                                 </div>
                                 <div className="language-stack-item-mobile">
                                <div className="language-item-child-mobile">
                                <img src={anhFlag}></img>
                                       <p>
                                         Tiếng Anh 
                                       </p>
                                </div>
                                 </div>
                             </div>
                         </div>
                        )}
                        <li><p>Đăng nhập</p></li>
                    </ul>
                  </div>
                </div>
            )}
     </div>
    );
}

export default Header;