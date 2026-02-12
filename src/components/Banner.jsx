import { useContext } from "react";
import logo from "../assets/Laura_Loves_Hoyas_Logo1.png"
import {logo as logoClass} from "./Banner.module.css"
import navigationContext from "../navigation/navigationContext";
import navValues from "../navigation/navValues";

const subtitleSytle = {
    fontStyle: "italic",
    fontSize: "xxx-large",
    color: "green",
};

const Banner = ({children}) => {
    const { navigate } = useContext(navigationContext);

    return (
        <header className="row mb-3">
            <div className="col-5">
                <img src={logo} className={logoClass} alt="logo" 
                onClick={() => navigate(navValues.home)}/>
            </div>
            <div className="col-7 mt-5" style={subtitleSytle}>
                {children}
            </div>
        </header>
    )
}

export default Banner;
