import RequestModal from "../modals/RequestModal";

const MainPage = () => {
    return(
        <>
        
            <div className="bg-[url('/images/bg-top.jpg')] h-[40rem] bg-no-repeat bg-cover bg-center mt-2 flex items-center" >
                <div className='flex flex-col min-[1600px]:ml-80 min-[1400px]:ml-20 px-4 max-w-4xl items-start ml-8 '>
                    <h1 className=' text-white min-[1200px]:text-6xl mb-10 font-bold text-4xl max-w-lg min-[1600px]:max-w-2xl'>Жолнерович Валентина - услуги юриста и адвоката в Мурманске</h1>
                    <h3 className=' text-white mb-16 text-lg max-w-lg min-[1600px]:max-w-2xl'>Моя постоянная работа - это решение проблем, с которыми вы столкнулись впервые. Более 20 лет опыта в рамках юридической специальности.</h3>
                    <RequestModal/>
                </div>
            </div>

        <div className="flex flex-col items-center">
            <div className='flex flex-col items-start mt-8 px-3'>
                <h1 className='text-4xl font-semibold mb-8  '>Обо мне</h1>
                <p className='max-w-4xl mb-8 text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam similique asperiores
                </p>
                <p className='max-w-4xl mb-10 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, adipisci ex reprehenderit dicta tempora animi, odio porro magnam fugit repellat cumque unde sint ipsa distinctio itaque quam eos error dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore 
                doloremque eaque corporis in assumenda at maiores? Mollitia, exercitationem nam itaque odio aut libero nihil? Veritatis, ipsum. Nulla, ipsa cupiditate. Eum.</p>
                <h3 className='max-w-4xl mb-10 text-xl font-medium flex '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam.</h3>
                <p className='max-w-4xl text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit velit, 
                nobis incidunt consequuntur iste illo esse natus error hic? Saepe, labore. Aliquid culpa molestias asperiores aperiam natus, sapiente fuga cum.</p>
            </div>
        </div>

        <div className="flex flex-col items-center mt-32 px-2">
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