import React, { useState, useEffect, useRef } from 'react';
import AddButton from '../components/buttons/AddButton';
import AnnouncementAddForm from '../components/Forms/AnnouncementAddForm'; 
import { HiDotsVertical } from 'react-icons/hi';
import DeleteForm from '../components/Forms/DeleteForm';
import AnnouncementViewForm from '../components/Forms/AnnouncementViewForm';

const Announcement = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editFacility, setEditFacility] = useState(null);
  const [popupOpen, setPopupOpen] = useState(null);
  const [deleteAnnouncement, setDeleteAnnouncement] = useState(null);
  const [viewAnnouncement, setViewAnnouncement] = useState(null); 
  const [facilities, setFacilities] = useState([
    { id: 1, name: "Parking Facilities", date: "2024-07-01", time: "14:30", description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in." },
    { id: 2, name: "Community Center", date: "2024-07-01", time: "09:00", description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in." },
  ]);

  const handleDeleteAnnouncement = () => {
    setFacilities(facilities.filter(facility => facility.id !== deleteAnnouncement.id));
    setDeleteAnnouncement(null);
  };

  const popupRef = useRef(null);

  const openForm = (facility = null) => {
    setEditFacility(facility);
    setIsFormOpen(true);
    setPopupOpen(null);
  };

  const handleAddEditFacility = (newFacility) => {
    if (editFacility) {
      setFacilities((prev) => prev.map((f) => (f.id === editFacility.id ? { ...newFacility, id: editFacility.id } : f)));
    } else {
      setFacilities((prev) => [...prev, { ...newFacility, id: facilities.length + 1 }]);
    }
    setIsFormOpen(false);
    setEditFacility(null);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB');
  };

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(":");
    const period = +hours >= 12 ? "PM" : "AM";
    const hours12 = (+hours % 12) || 12;
    return `${hours12}:${minutes} ${period}`;
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-6 w-full h-[799px] overflow-auto">
      <div className="flex justify-center items-center mb-3 flex-wrap sm:justify-between gap-3">
        <h4 className="text-2xl font-semibold">Announcement</h4>
        <AddButton Addbuttontitle="Create Announcement" onClick={() => openForm()} className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg font-bold" />
      </div>

      <div className="flex flex-wrap gap-4 rounded-lg">
        {facilities.map((facility) => (
          <div key={facility.id} className="py-3 w-[370px] shadow-md rounded-lg relative text-sm">
            <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
              <h5>{facility.name}</h5>
              <button onClick={() => setPopupOpen(facility.id === popupOpen ? null : facility.id)}>
                <HiDotsVertical />
              </button>
              {popupOpen === facility.id && (
                <div ref={popupRef} className="absolute right-5 top-12 mt-2 bg-white border text-black rounded-lg shadow-lg z-10 text-sm">
                  <button className="pe-5 ps-2 py-1 pt-2 text-left" onClick={() => openForm(facility)}>
                    Edit
                  </button><br />
                  <button className="pe-5 ps-2 py-1 text-left" onClick={() => setViewAnnouncement(facility)}>View</button><br />
                  <button className='pe-5 ps-2 py-1 pb-2 text-left' onClick={() => setDeleteAnnouncement(facility)}>Delete</button>
                </div>
              )}
            </div>
            <div className='flex px-3 mt-2 justify-between'>
              <p className='text-gray-500'>Announcement Date</p>
              <p>{formatDate(facility.date)}</p>
            </div>
            <div className='flex px-3 mt-2 justify-between'>
              <p className='text-gray-500'>Announcement Time</p>
              <p>{formatTime(facility.time)}</p>
            </div>
            <h1 className='px-3 mt-2 text-gray-400'>Description</h1>
            <p className="px-3 pt-1">{facility.description}</p>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <AnnouncementAddForm
              onClose={() => setIsFormOpen(false)}
              onAddEdit={handleAddEditFacility}
              initialData={editFacility}
            />
          </div>
        </div>
      )}
      {deleteAnnouncement && (
        <DeleteForm
          onCancel={() => setDeleteAnnouncement(null)}
          onDelete={handleDeleteAnnouncement}
          deltitle="Announcement"
          deletepages="Announcement "
        />
      )}
      {viewAnnouncement && (
        <AnnouncementViewForm
          announcement={viewAnnouncement} 
          onCancel={() => setViewAnnouncement(null)} 
        />
      )}
    </div>
  );
};

export default Announcement;
