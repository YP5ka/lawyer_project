import RequestModal from "../modals/RequestModal";

const MainPage = () => {
    return(
        <>
        
           

        <div className="flex flex-col items-center mt-32 px-6">
            <h1 className="sm:text-5xl text-3xl font-semibold  text-center">Мои юридические услуги</h1>
                <div className="flex min-[1240px]:flex-row mt-20 flex-col">
                    <div className="sm:mr-8 cursor-pointer mb-12 ">
                        <img className="  rounded-md px-6" src="/images/house_1.jpg"/>
                        <figcaption className="mt-2  text-start text-2xl font-bold px-6">Решение имущественных вопросов</figcaption>
                    </div>
                    <div className="sm:mr-8 cursor-pointer mb-12">
                        <img  className="  rounded-md px-6 " src="/images/family_2.jpg"/>
                        <figcaption className="max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение семейных вопросов</figcaption>
                    </div>
                    <div className="cursor-pointer mb-12">
                        <img  className=" rounded-md px-6" src="/images/molot_3.jpg"/>
                        <figcaption className=" max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение земельных вопросов</figcaption>
                    </div>
                </div>
                
                <div className="flex  min-[1240px]:flex-row min-[1240px]:mt-12 flex-col">
                    <div className="sm:mr-8 cursor-pointe mb-12">
                        <img className="  rounded-md px-6" src="/images/key_4.jpg"/>
                        <figcaption className="mt-2 max-w-xs text-start text-2xl font-bold px-6">Решение квартирных вопросов</figcaption>
                    </div>
                    <div className="sm:mr-8 cursor-pointer mb-12">
                        <img  className="  rounded-md px-6" src="/images/write_5.jpeg"/>
                        <figcaption className="max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение банкротных вопросов</figcaption>
                    </div>
                    <div className="cursor-pointer mb-12">
                        <img  className=" rounded-md px-6" src="/images/balance_6.jpeg"/>
                        <figcaption className=" mt-2 text-2xl font-bold text-start px-6">Решение особых юридических вопросов</figcaption>
                    </div>
                </div>
        </div>
        </>
    )   
}

export default MainPage;