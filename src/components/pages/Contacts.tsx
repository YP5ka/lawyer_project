import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Contacts = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-center w-full' >
      <div className=' pt-9 px-9 '>
        <div className='flex flex-col items-start  xl:mr-24'>
            <h1 className=' text-4xl font-semibold text-blue-900 '>Свяжитесь со мной</h1>
            <h3 className='text-2xl  mt-10 '>пр. Героев Североморцев 39, Мурманск.</h3>
            <h3 className='text-2xl mt-8 text-blue-900 font-semibold '>+7 921 042-47-82</h3>
            <h3 className='text-2xl text-blue-900 '>info@murmansk.ru</h3>
            <p className='text-lg  mt-10 '>Офис работает с понедельника по пятницу, с 10:00 до 19:00.</p>
            <p className='text-lg  mt-2 '> В целях удобства просьба согласовывать свой приезд заранее.</p>
            <button className=" bg-blue-900 hover:bg-blue-500 text-white font-bold border border-blue-500 rounded-2xl cursor-pointer min-[1104px]:h-14 h-10 mb-6 mt-6 min-[1104px]:mb-0 min-[1104px]:mt-3 min-[1280px]:mt-10 w-56">Начать сотрудничество</button>
        </div>
      </div> 
        <div className='flex items-center mt-10'>
        <YMaps>
          <Map className=' w-dvw xl:w-[600px] md:w-[400px] h-[600px]' defaultState={{ center: [69.004001, 33.097933], zoom: 16 }}>
          <Placemark geometry={[69.004001, 33.097933]} />
          </Map>
        </YMaps>
        </div>
    </div>
  )
}

export default Contacts