import React, { useEffect, useState } from 'react';

const NoteAddForm = ({ onClose, onAddEdit, initialData }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setNoteTitle(initialData.title);
      setNoteDescription(initialData.Description); // Fixed key
      setCreatedDate(initialData.date);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: noteTitle,
      Description: noteDescription, // Ensure key matches
      date: createdDate,
    };
    onAddEdit(newNote);
    onClose();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">
        {initialData ? 'Edit Note' : 'Create Note'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block font-medium mb-1" htmlFor="noteTitle">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="noteTitle"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Enter Note Title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1" htmlFor="noteDescription">
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            id="noteDescription"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            placeholder="Enter Note Description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium mb-1" htmlFor="createdDate">
            Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="createdDate"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>
        <div className="flex justify-between mt-6 gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] h-[40px] rounded-md w-6/12"
          >
            {initialData ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteAddForm;
