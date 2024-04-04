import logo from '../../public/images/logo.svg'
//../assets/logo.svg
const Logo = () => {
    return <div className="drop-shadow-xl min-[700px]:h-20 min-[700px]:w-20 md:ml-0 min-[1104px]:ml-8 ml-8 mr-2  | xl:h-16 xl:w-16 xl:mt-0 | h-14 w-14 ">
        <img  src={logo} alt="" />
    </div>
}

export default Logo;