import React, { useEffect, useState } from 'react';

const NumberAddForm = ({ onClose, onAddEdit, contact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name || '');
      setPhone(contact.phone || '');
      setWork(contact.work || '');
    } else {
      setName('');
      setPhone('');
      setWork('');
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntry = { ...contact, name, phone, work };
    onAddEdit(updatedEntry);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">{contact ? 'Edit Important Number' : 'Add Important Number'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Full Name<span className='text-red-600'>*</span></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-1 w-full rounded-lg"
              placeholder='Enter Full Name'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Phone Number<span className='text-red-600'>*</span></label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-1 w-full rounded-lg"
              placeholder='+91'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Work<span className='text-red-600'>*</span></label>
            <input
              type="text"
              value={work}
              onChange={(e) => setWork(e.target.value)}
              className="border p-1 w-full rounded-lg"
              placeholder='Enter Work'
              required
            />
          </div>
          <div className="flex justify-between mt-6 gap-4">
            <button type="button" onClick={onClose} className="w-6/12  bg-gray-200 rounded-lg hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" className=" flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#E74C3C] to-[#FFD351] h-[40px] rounded-md w-6/12">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NumberAddForm;
