import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const RequestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <>
      {/* Кнопка, которая открывает модальное окно */}
      <button onClick={openModal} className=' text-white bg-blue-900 hover:bg-blue-500 font-bold min-[390px]:w-80 w-[300px] px-14 h-14 mt-2 cursor-pointer '>Начать сотрудничество</button>
      {/* Модальное окно */}
      {isOpen && (
        <>
        <animated.div style={modalAnimation} className="fixed top-0 left-0 w-full h-full bg-black/60 opacity-10 z-40"></animated.div>
        <animated.dialog id="my_modal_2" open={isOpen} className="modal" >
          <div className="modal-box">
            <h3 className="font-bold text-4xl text-center mt-8">Закажите обратный звонок</h3>
            <p className="py-4 text-lg text-center mb-4 ">Перезвоню вам в ближайшее время</p>
            <div className='flex flex-col'>
                <input className=" outline outline-2 outline-neutral-300   h-12 mb-8 px-5" placeholder="Имя" type="text" />
                <input className=" outline outline-2 outline-neutral-300  h-12 mb-8 px-5" placeholder="Телефон" type="text" />
                <input className=" outline outline-2 outline-neutral-300  h-12 mb-8 px-5" placeholder="E-mail" type="text" />
                <textarea className='outline outline-2 outline-neutral-300  h-24 mb-8 px-5 py-3' placeholder='Сообщение'></textarea>
                <button className=" bg-blue-900 hover:bg-blue-500 text-white font-bold py-4 px-8 mb-8 rounded-2xl " >Отправить</button>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>close</button>
        </form>
        </animated.dialog>
        </>
      )}
    </>
  );
};

export default RequestModal;