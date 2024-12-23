import Logo from "../../../images/logo.png"
import "./HeaderLogin.css"
function HeaderLogin () {
    return (
        <div className="nav-bottom">
        <div className="logo">
            <img src={Logo}></img>
        </div>
    </div>
    )
}
export default HeaderLogin;