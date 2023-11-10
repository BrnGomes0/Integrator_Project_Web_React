import Logo from "../Logo/Logo";
import ContextNavbar from "../ContextNavbar/ContexNavbar";
import LoginIcone from "../LoginIcone/LoginIcone";

const  Navbar = () => {
    return(
        <div className="bg-[#252525] flex justify-between items-center w-full h-12 p-8 fixed z-10">
            <Logo/>
            <ContextNavbar/>
            <LoginIcone/>
        </div>
    );
}

export default Navbar;