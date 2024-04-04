import RequestModal from "../RequestModal";

const MainPage = () => {
    return(
        <>
        
            <div className="bg-[url('../../public/images/bg-top.jpg')] h-[40rem] bg-no-repeat bg-cover bg-center mt-2 flex items-center" >
                <div className='flex flex-col min-[1600px]:ml-80 min-[1400px]:ml-20 px-4 max-w-4xl items-start ml-8 '>
                    <h1 className=' text-white min-[1200px]:text-6xl mb-10 font-bold text-4xl max-w-lg min-[1600px]:max-w-2xl'>Жолнерович Валентина - услуги юриста и адвоката в Мурманске</h1>
                    <h3 className=' text-white mb-16 text-lg max-w-lg min-[1600px]:max-w-2xl'>Моя постоянная работа - это решение проблем, с которыми вы столкнулись впервые. Более 20 лет опыта в рамках юридической специальности.</h3>
                    <RequestModal/>
                </div>
            </div>

        <div className="flex flex-col items-center">
            <div className='flex flex-col items-start mt-8 px-3'>
                <h1 className='text-4xl font-semibold mb-8  '>Обо мне</h1>
                <p className='max-w-4xl mb-8 text-xl '>Patrial.ru - это сайт юристов-единомышленников, которые постоянно находятся в г. Люберцы Московской области. За деньги мы предоставляем своим клиентам помощь в урегулировании различных вопросов, 
                    будь то подготовка документов, защита в судах или работа с органами охраны правопорядка, etc.
                </p>
                <p className='max-w-4xl mb-10 text-xl'>Целевая аудитория сайта и нашей организации - это простые граждане, для которых суд по взысканию долгов, 
                    покупка квартиры или развод являются непонятными либо неприятными процессами. Впрочем, как показывает опыт, мы в принципе можем помочь
                    с большинством вопросов, которые возникают в повседневной жизни. Звоните.</p>
                <h3 className='max-w-4xl mb-10 text-xl font-medium flex '>То, что для вас - стресс, для нас - поле профессиональной деятельности.</h3>
                <p className='max-w-4xl text-xl'>Раздел "Нестандарт" предназначен для иных лиц и содержит в себе предложения услуг по банкротству юридических лиц (при максимальном учете интересов клиента), адвокатской защите при тяжких преступлениях экономической направленности, работе частного детектива и иным вопросам, требующим нестандартных методов решения,
                    с максимальной безопасностью для обратившегося. Анонимность гарантируется.</p>
            </div>
        </div>

        <div className="flex flex-col items-center mt-32 px-6">
            <h1 className="sm:text-5xl text-3xl font-semibold  text-center">Мои юридические услуги</h1>
                <div className="flex min-[1240px]:flex-row mt-20 flex-col">
                    <div className="sm:mr-8 cursor-pointer mb-12">
                        <img className=" max-w-sm rounded-md px-6" src="../../public/images/house_1.jpg"/>
                        <figcaption className="mt-2 max-w-sm text-start text-2xl font-bold px-6">Решение имущественных вопросов</figcaption>
                    </div>
                    <div className="sm:mr-8 cursor-pointer mb-12">
                        <img  className=" max-w-sm rounded-md px-6 " src="../../public/images/family_2.jpg"/>
                        <figcaption className="max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение семейных вопросов</figcaption>
                    </div>
                    <div className="cursor-pointer mb-12">
                        <img  className=" max-w-sm rounded-md px-6" src="../../public/images/molot_3.jpg"/>
                        <figcaption className=" max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение земельных вопросов</figcaption>
                    </div>
                </div>
                
                <div className="flex  min-[1240px]:flex-row min-[1240px]:mt-12 flex-col">
                    <div className="sm:mr-8 cursor-pointe mb-12">
                        <img className=" max-w-sm rounded-md px-6" src="../../public/images/key_4.jpg"/>
                        <figcaption className="mt-2 max-w-xs text-start text-2xl font-bold px-6">Решение квартирных вопросов</figcaption>
                    </div>
                    <div className="sm:mr-8 cursor-pointer mb-12">
                        <img  className=" max-w-sm rounded-md px-6" src="../../public/images/write_5.jpeg"/>
                        <figcaption className="max-w-xs mt-2 text-2xl font-bold text-start px-6">Решение банкротных вопросов</figcaption>
                    </div>
                    <div className="cursor-pointer mb-12">
                        <img  className=" max-w-sm rounded-md px-6" src="../../public/images/balance_6.jpeg"/>
                        <figcaption className="max-w-sm mt-2 text-2xl font-bold text-start px-6">Решение особых юридических вопросов</figcaption>
                    </div>
                </div>
        </div>
        </>
    )   
}

export default MainPage;