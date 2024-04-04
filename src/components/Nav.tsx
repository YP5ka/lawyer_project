import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";
import CallModal from "./modals/CallModal";


const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') ||'');

  const handleClick = (link: string) => {
    setActiveLink(link)
    localStorage.setItem('activeLink', link);
  }

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  return (
    <>
          <NavLink onClick={() => handleClick('/')}  className= {`text-lg font-bold ${activeLink === '/' ? 'text-blue-800' : 'text-black'} cursor-pointer md:mt-7 min-[1104px]:mt-0`} to="/">Обо мне</NavLink>
          <NavLink onClick={() => handleClick('/finance')} className={`m-1 btn-base-100 text-lg font-bold cursor-pointer  ${activeLink === '/finance' ? 'text-blue-800' : 'text-black'}`} to ="/finance" >Услуги</NavLink>
          <NavLink onClick={() => handleClick('/projects')} className={`text-lg font-bold ${activeLink === '/projects' ? 'text-blue-800' : 'text-black'} cursor-pointe md:mt-2 min-[1104px]:mt-0 `} to="/projects">Мои дела</NavLink>
          <NavLink onClick={() => handleClick('/contacts')} className={` text-lg font-bold ${activeLink === '/contacts' ? 'text-blue-800' : 'text-black'} cursor-pointer md:mt-2 min-[1104px]:mt-0`} to="/contacts">Контакты</NavLink>
          <div className="flex flex-col xl:flex-row items-center ">
            <div className="xl:mr-6 flex flex-col items-center">
              <h1 className=" text-blue-900  cursor-pointer min-[1104px]:text-3xl text-3xl md:mt-10 min-[1104px]:mt-0">+7 921 042-47-82</h1>
              <p className=" text-sm  ">пр. Героев Североморцев 39, Мурманск</p>
            </div>
            <CallModal/>
          </div>
    </>
  )
}

const  Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <nav className="w-1/6 md:w-3/4 flex ">
        <div className="hidden md:flex  items-center justify-evenly w-full flex-col min-[1104px]:flex-row md:mt-6 min-[1104px]:mt-0 ">
          <NavLinks/>
        </div>

        <div className="md:hidden flex">
          <button onClick={toggleNavbar}>
            {isOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks/>
        </div>
      )}
    </>
  )
}

export default Nav;