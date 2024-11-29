import React, { useState, useEffect, useRef } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import AddButton from '../../components/buttons/AddButton';
import NoteAddForm from '../../components/Forms/NoteAddForm';

const Note = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [popupOpen, setPopupOpen] = useState(null);
  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Notes", Description: "Discussed project milestones and team assignments." },
    { id: 2, title: "Reminder", Description: "Prepare presentation slides for the upcoming meeting." },
  ]);

  const popupRef = useRef(null);

  const openForm = (note = null) => {
    setEditNote(note);
    setIsFormOpen(true);
    setPopupOpen(null);
  };

  const handleAddEditNote = (newNote) => {
    if (editNote) {
      setNotes((prev) => prev.map((n) => (n.id === editNote.id ? { ...newNote, id: editNote.id } : n)));
    } else {
      setNotes((prev) => [...prev, { ...newNote, id: notes.length + 1 }]);
    }
    setIsFormOpen(false);
    setEditNote(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-6 w-full h-[799px] overflow-auto">
      <div className="flex justify-center items-center mb-3 flex-wrap sm:justify-between gap-3">
        <h4 className="text-2xl font-semibold">Note Management</h4>
        <AddButton
          Addbuttontitle="Create Note"
          onClick={() => openForm()}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg font-bold"
        />
      </div>

      <div className="flex flex-wrap gap-4 rounded-lg">
        {notes.map((note) => (
          <div key={note.id} className="py-3 w-[370px] shadow-md rounded-lg relative">
            <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
              <h5>{note.title}</h5>
              <button onClick={() => setPopupOpen(note.id === popupOpen ? null : note.id)}>
                <HiDotsVertical />
              </button>
              {popupOpen === note.id && (
                <div
                  ref={popupRef}
                  className="absolute right-5 top-12 mt-2 bg-white border text-black text-sm rounded-lg shadow-lg z-10"
                >
                  <button
                    className="px-4 py-2 text-left w-full"
                    onClick={() => openForm(note)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <h1 className="px-3 mt-2 text-gray-400">Description</h1>
            <p className="text-sm px-3">{note.Description}</p> {/* Fixed key */}
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <NoteAddForm
              onClose={() => setIsFormOpen(false)}
              onAddEdit={handleAddEditNote}
              initialData={editNote}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
