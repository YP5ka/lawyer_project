import Logo from "./Logo";

const Footer = () => {
    return(
        <footer>
             <div  className=" flex-col  bg-[url('/images/bg_bot.jpg')] min-[640px]:h-[30rem] xl:h-[35rem] h-[40rem] w-full bg-no-repeat bg-cover bg-bottom mt-10 flex items-center" >
                <div className="flex flex-col items-center min-[1010px]:mt-28 mt-10">
                    <div className="flex flex-col text-center">
                        <h1 className="text-white min-[1010px]:text-5xl text-4xl mb-10 font-semibold flex">Запишитесь на консультацию сейчас!</h1>
                    </div>    
                    <form className="mt-10 xl:mt-32  flex flex-col items-center min-[1010px]:flex-row">    
                        <input className=" outline-none h-14 min-[1010px]:w-64 min-[1010px]:mr-6 px-5 mb-4 min-[1010px]:mb-0 min-[768px]:w-[600px] min-[425px]:w-[370px] w-[300px]" placeholder="Имя" type="text" />
                        <input className=" outline-none h-14 min-[1010px]:w-64 min-[1010px]:mr-6 px-5 mb-4 min-[1010px]:mb-0 min-[768px]:w-[600px] min-[425px]:w-[370px] w-[300px]" placeholder="E-mail" type="text" />
                        <input className=" outline-none h-14 min-[1010px]:w-64 min-[1010px]:mr-6 px-5 mb-4 min-[1010px]:mb-0 min-[768px]:w-[600px] min-[425px]:w-[370px] w-[300px]" placeholder="+7 (999) 999-99-99" type="text" />
                        <button className=" bg-blue-900 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl min-[768px]:w-[600px] min-[1010px]:w-40 min-[425px]:w-[370px] w-[300px]" >Отправить</button>
                    </form>
                </div>
             </div>

             <div className="flex min-[600px]:flex-row flex-col items-center justify-around  mt-6 mb-4 ">
                <div className="mr-10 flex items-center  cursor-pointer">
                    <Logo />
                    <h1 className="ml-2 text-2xl text-blue-900 font-bold ">Праvовая zащита</h1>
                </div>
                <div className="flex flex-col justify-center max-[600px]:mt-6">
                    <h1 className="flex text-2xl  justify-center  text-blue-900 font-semibold cursor-pointer"><img className="w-5 mr-2 " src="../../public/images/telephone_icon.svg" alt="" />+7 921 042-47-82</h1>
                    <p className=" text-xs">пр. Героев Североморцев 39, Мурманск</p>
                </div>
             </div>
        </footer>
    )
}

export default Footer;