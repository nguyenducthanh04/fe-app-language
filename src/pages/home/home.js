import {FaCheck} from "react-icons/fa"
import { useState } from "react"
import { Form, Link } from "react-router-dom"
import emiu from "../../images/emiu.jpg"
import iphone12 from "../../images/ip12.webp"
import reason1 from "../../images/reason1.svg"
import reason2 from "../../images/reason2.svg"
import reason3 from "../../images/reason3.svg"
import reason4 from "../../images/reason4.svg"
import phongbuoi from "../../images/phongbuoi.jpg"
import ngaohap from "../../images/ngaohap.jpg"
import longkhoahoc from "../../images/longkhoahoc.jpg"
import chinaFlag from "../../images/china-flag.png"
import koreaFlag from "../../images/kra.jpg"
import anhFlag from "../../images/anh.webp"
import "./home.css"
function Home (){
    const [isVisible, setIsVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Chọn ngôn ngữ của bạn")
    const displayList = () => {
        setIsVisible(!isVisible);
    }
    const selectLanguage = (language) => {
        setSelectedLanguage(language); 
        setIsVisible(false); 
      };
    console.log("click", isVisible)
     return (
       <div className="home">
        <div className="banner">
            <div className="banner-left">
                <div className="text">
                    <h1>Học một ngoại ngữ để sử dụng trong đời thực</h1>
                    <img className="lazy" data-original="https://f.hubspotusercontent20.net/hubfs/6968579/Memrise%20July%202020/Images/blue-flash.svg" alt="blue underline" src="https://f.hubspotusercontent20.net/hubfs/6968579/Memrise%20July%202020/Images/blue-flash.svg"></img>
                    <p>
                     Những mẫu câu hữu ích trong cuộc sống hàng ngày.<br></br>
                     Được dạy với những video clip của người bản ngữ thực sự.
                    </p>
                </div>
                <div className="click-language">
                <div className="language-box" onClick={displayList}>
                    <div className="language-title">
                        <span>{selectedLanguage}</span>
                        <FaCheck className="icon-language-title"/>
                    </div>
                </div>
                {
                    isVisible && (
                <div className="list-language">
                    <div className="language">
                        <ul>
                            <Link to={""} className="link-language" onClick={() => selectLanguage("Tiếng Trung Quốc")}>
                                <div className="name-language">
                                <img src={chinaFlag}></img>
                                  <p>
                                   Tiếng Trung Quốc
                                  </p>
                                </div>
                            </Link>
                            <Link to={""} className="link-language" onClick={() => selectLanguage("Tiếng Hàn Quốc")}>
                                <div className="name-language">
                                <img src={koreaFlag}></img>
                                  <p>
                                   Tiếng Hàn Quốc
                                  </p>
                                </div>
                            </Link>
                            <Link to={""} className="link-language" onClick={() => selectLanguage("Tiếng Anh Quốc")}>
                                <div className="name-language">
                                <img src={anhFlag}></img>
                                  <p>
                                   Tiếng Anh Quốc
                                  </p>
                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>
                    )
                }
                </div>
                <div className="btn-start">
                    <button>Bắt đầu</button>
                </div>
            </div>
            <div className="image-banner">
                <div className="image">
                    <img src={emiu}></img>
                </div>
            </div>
        </div>
        <div className="how-work">
            <div className="how-work-title">
                <h1>Phương thức hoạt động</h1>
            </div>
            <div className="list-work">
                <div className="image-work">
                    <img src={iphone12}></img>
                </div>
               <div className="text-work">
               <ul>
                    <li>
                        <span>
                        Hàng nghìn video ví dụ các ngôn ngữ được sử dụng trong đời thực
                        </span>
                    </li>
                    <li>
                        <span>
                        Những mẫu câu hữu ích được dạy trong các khoá học thiết kế bởi những người bản ngữ
                        </span>
                    </li>
                    <li>
                        <span>
                        Những bài kiểm tra được trò chơi hoá sẽ luyện cho bạn các kỹ năng ngoại ngữ cần thiết
                        </span>
                    </li>
                    <li>
                        <span>
                        Phương pháp học đắm mình trong ngôn ngữ cho bạn cảm giác đang thực sự nói chuyện cùng những người bản địa
                        </span>
                    </li>
                </ul>
               </div>
            </div>
            <div className="btn-click-course">
                <button>Chọn một khóa học để bắt đầu</button>
            </div>
        </div>
        <div className="reason">
            <div className="reason-title">
                <h1>Tại sao nên sử dụng App ?</h1>
            </div>
            <div className="reason-list">
                <div className="reason-item">
                    <div className="reason-image">
                        <img src={reason1}></img>
                    </div>
                    <div className="reason-text">
                        <span>
                        Các kỹ thuật ghi nhớ được khoa học chứng minh
                        </span>
                    </div>
                </div>
                <div className="space"></div>
                <div className="reason-item">
                    <div className="reason-image">
                        <img src={reason2}></img>
                    </div>
                    <div className="reason-text">
                        <span>
                        Học nhanh hơn gấp hai lần so với trên lớp
                        </span>
                    </div>
                </div>
                <div className="space"></div>
                <div className="reason-item">
                    <div className="reason-image">
                        <img src={reason3}></img>
                    </div>
                    <div className="reason-text">
                        <span>
                        Học bằng cách đắm mình trong ngôn ngữ, như thế bạn đang sống ở đó vậy.
                        </span>
                    </div>
                </div>
                <div className="space"></div>
                <div className="reason-item">
                    <div className="reason-image">
                        <img src={reason4}></img>
                    </div>
                    <div className="reason-text">
                        <span>
                        Bao quát mọi thứ từ những kiến thức thiết yếu cho những chuyến du lịch của bạn tới những mục tiêu dài hạn hơn
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="feedback">
            <div className="feedback-title">
                <div className="feeback-title-left">
                    <h1>Chia sẻ từ các học viên</h1>
                </div>
                <div className="feedback-title-right">
                    <h3>Từ những chiến thắng nho nhỏ cho tới các thành tựu to lớn, đây là cách mà từng từ mới một đã giúp họ mở mang các thế giới của mình</h3>
                </div>
            </div>
            <div className="feedback-list">
                <div className="feedback-item">
                    <div className="avt">
                        <img src={phongbuoi}></img>
                    </div>
                    <div className="feedback-text">
                        <span>App rất bổ ích cho người mới bắt đầu</span>
                    </div>
                    <div className="name-user">
                        <h4>Đào Hải Phong</h4>
                    </div>
                </div>
                <div className="space"></div>
                <div className="feedback-item">
                    <div className="avt">
                        <img src={ngaohap}></img>
                    </div>
                    <div className="feedback-text">
                        <span>Ứng dụng hay và học tiếng Trung rất tốt</span>
                    </div>
                    <div className="name-user">
                        <h4>Phạm Thắng</h4>
                    </div>
                </div>
                <div className="space"></div>
                <div className="feedback-item">
                    <div className="avt">
                        <img src={longkhoahoc}></img>
                    </div>
                    <div className="feedback-text">
                        <span>Rất tiện ích, phù hợp với mọi người</span>
                    </div>
                    <div className="name-user">
                        <h4>Anh Long</h4>
                    </div>
                </div>
            </div>
        </div>
       </div>
     )
} 
export default Home;