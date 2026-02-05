import logo from "../assets/Laura Loves Plants Logo_Draft_1.png"
import {logo as logoClass} from "./Banner.module.css"

const subtitleSytle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "green",
};

const Banner = ({children}) => {
    return (
        <header className="row mb-3">
            <div className="col-5">
                <img src={logo} className={logoClass} alt="logo" />
            </div>
            <div className="col-7 mt-5" style={subtitleSytle}>
                {children}
            </div>
        </header>
    )
}

export default Banner;
