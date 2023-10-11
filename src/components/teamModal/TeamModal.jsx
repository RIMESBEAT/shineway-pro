import React from 'react';

const TeamModal = ({ item, closeModal }) => {
  return (
    <div className="fixed z-10 left-0 top-14 justify-center w-full h-full overflow-auto bg-black bg-opacity-40 p-4 md:p-16 " onClick={closeModal}>
      <div className="bg-white text-black  p-5 md:p-10 border border-gray-300">
        {/* <span className="text-gray-600 float-right text-2xl font-bold cursor-pointer hover:text-red-500 focus:text-black" onClick={closeModal}>&times;</span> */}
        <p>{item.qualification}</p>
      </div>
    </div>
  );
};

export default TeamModal;
