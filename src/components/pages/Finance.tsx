import RequestModal from "../modals/RequestModal"

const Finance = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col items-center justify-center w-full' >
        <div className=' pt-9 px-6 lg:w-2/5 w-full'>
            <div className='flex flex-col items-start  xl:mr-24'>
                <h1 className=' text-4xl font-bold text-blue-900 '>Финансы</h1>
                <h3 className='text-2xl font-bold  mt-10 '>Все вопросы, касающиеся наличных и безналичных денег. Если вы:</h3>
                <br/>
                <p>- Impedit numquam id eaque itaque ipsa? Aliquid eaque, commodi excepturi sunt:</p>
                <p>- labore accusamus quidem sequi ratione mollitia error, nisi reiciendis minima tenetur.</p>
                <br/>
                <p>- labore accusamus quidem sequi ratione mollitia error, nisi reiciendis minima tenetur:</p>
                <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <br/>
                <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit;</p>
                <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit -</p>
                <br/>
                <p className="text-blue-900 font-semibold">Вы можете обратиться ко мне за консультацией и решением вопроса.</p>
                <br/>
                <h3 className='text-2xl font-bold'>При этом мы не занимаемся:</h3>
                <br/>
                <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit;</p>
            </div>
        </div> 
        <div className="px-6 mt-6">
            <img className=" w-[400px] h-[400px]" src="/images/finance.jpg"  alt="" />
        </div>
  </div>
  <div className="flex justify-center mt-12">
    <RequestModal />
  </div>
  </>
  )
}

export default Finance