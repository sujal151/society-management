import { CgAdd } from 'react-icons/cg';
import React, { useState } from 'react'

const AddButton = ({ onClick, Addbuttontitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContact = () => {
    setIsModalOpen(true);
  };



  return (
    <div>
      <button
        className="flex items-center justify-center gap-1 font-bold text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] h-[40px] px-3 rounded-md"
        onClick={()=>{
          onClick(),
          handleAddContact()
        }}
      >
        <CgAdd size={20} /> {Addbuttontitle}
      </button>
    </div>
  )
}

export default AddButton
