import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return(
       <header className='flex flex-row flex-wrap items-center justify-between md:justify-evenly mt-2'>

          <NavLink className="flex items-center cursor-pointer xl:mt-0 min-[1104px]:mt-0 md:mt-6 w-[276px]" to="/">
            <Logo />
            <h1 className=" text-lg  text-blue-900 font-bold lg:mt-0 xl:mt-0 drop-shadow-lg">Праvовая zащита</h1>
          </NavLink>
            <Nav />
 
      </header>
    );
}

export default Header;