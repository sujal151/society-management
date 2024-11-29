import React, { useState } from 'react';
const ExpanceAddForm = ({ onClose, onSave, expense = null }) => {
    const [title, setTitle] = useState(expense ? expense.title : '');
    const [description, setDescription] = useState(expense ? expense.description : '');
    const [date, setDate] = useState(expense ? expense.date : '');
    const [amount, setAmount] = useState(expense ? expense.amount : '');
    const [file, setFile] = useState(null);
    const [fileFormat, setFileFormat] = useState('');
    
    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
      setFileFormat(uploadedFile?.name.split('.').pop().toUpperCase() || '');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const expenseData = {
        title,
        description,
        date,
        amount,
        format: fileFormat,
      };
      onSave(expenseData);
      onClose();
    };
  
    return (
      <div className="w-[410px] max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Add Expenses Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="title">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="description">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>
  
          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label className="block font-medium mb-1" htmlFor="date">
                Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="block font-medium mb-1" htmlFor="amount">
                Amount<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₹ 0000"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="file">
              Upload Bill<span className="text-red-500">*</span>
            </label>
            <div className="border border-dashed border-gray-400 rounded-lg p-4 text-center">
              <input
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg, .gif, .pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label htmlFor="file" className="cursor-pointer text-[14px] font-semibold">
                <span className="text-blue-600">Upload a file</span> or drag and drop<br />
                <span className="text-sm text-gray-500 font-normal text-[12px]">
                  PNG, JPG, GIF, PDF up to 10MB
                </span>
              </label>
            </div>
            {fileFormat && (
              <p className="text-sm text-gray-600 mt-2">
                Selected File Format: <span className="font-semibold">{fileFormat}</span>
              </p>
            )}
          </div>
  
          <div className="flex justify-between mt-6 gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-6/12 bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white font-semibold rounded-lg py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ExpanceAddForm;
  