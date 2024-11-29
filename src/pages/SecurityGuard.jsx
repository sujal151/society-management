import React, { useState } from 'react';
import { FaSun, FaMoon, FaMale, FaFemale } from 'react-icons/fa';
import DeleteButton from '../components/buttons/DeleteButton';
import AddButton from '../components/buttons/AddButton';
import EditButton from '../components/buttons/EditButton';
import ViewButton from '../components/buttons/ViewButton';
import SecurityGuardAddForm from '../components/Forms/SecurityGuardAddForm';
import DeleteForm from '../components/Forms/DeleteForm';
import SecurityGuardViewForm from '../components/Forms/SecurityGuardViewForm';
// import SecurityViewForm from '../components/Forms/SecurityViewForm';

const SecurityGuard = () => {
  const [guards, setGuards] = useState([
    { id: 1, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Day', date: '2024-10-02', time: '14:45', gender: 'Male' },
    { id: 2, name: 'Brooklyn Simmons', phone: '94564 96321', shift: 'Night', date: '2024-10-02', time: '14:45', gender: 'Female' },
    // Add more security guards here
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editGuard, setEditGuard] = useState(null);
  const [viewGuard, setViewGuard] = useState(null);
  const [deleteGuard, setDeleteGuard] = useState(null);

  const handleAddEditGuard = (newGuard) => {
    console.log('New Guard:', newGuard);  // Debugging line
    setGuards((prevGuards) => {
        if (editGuard) {
            return prevGuards.map(guard => guard.id === newGuard.id ? newGuard : guard);
        } else {
            return [...prevGuards, { ...newGuard }];
        }
    });
    setIsFormOpen(false);
    setEditGuard(null);
  };

  const openForm = (guard = null) => {
    setEditGuard(guard);
    setIsFormOpen(true);
  };

  const handleDeleteGuard = () => {
    setGuards(guards.filter(guard => guard.id !== deleteGuard.id));
    setDeleteGuard(null);
  };

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(":");
    const period = +hours >= 12 ? "PM" : "AM";
    const hours12 = (+hours % 12) || 12;
    return `${hours12}:${minutes} ${period}`;
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 w-full h-[799px] overflow-auto">
      <div className="flex sm:justify-between justify-center gap-3 flex-wrap items-center mb-4">
        <h4 className="text-xl font-bold">Security Guard Details</h4>
        <AddButton Addbuttontitle="Add Security" onClick={() => openForm()} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <SecurityGuardAddForm
              onClose={() => setIsFormOpen(false)}
              onAddEdit={handleAddEditGuard}
              initialData={editGuard}
              nameLabel="Security Guard Name"
              phoneLabel="Phone Number"
              FormTitle={editGuard ? "Edit Security Guard" : "Add Security Guard"}
            />
          </div>
        </div>
      )}

      {viewGuard && (
        <SecurityGuardViewForm
          guard={viewGuard}
          onCancel={() => setViewGuard(null)}
        />
      )}

      {deleteGuard && (
        <DeleteForm
          onCancel={() => setDeleteGuard(null)}
          onDelete={handleDeleteGuard}
          deltitle="Security Guard"
          deletepages="Security Guard"
        />
      )}

      <div className="overflow-auto w-full">
        <table className="min-w-full w-[700px] text-left border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-2">Security Guard Name</th>
              <th className="py-3 px-2 text-start">Phone Number</th>
              <th className="py-3 px-2 text-center">Select Shift</th>
              <th className="py-3 px-2 text-center">Shift Date</th>
              <th className="py-3 px-2 text-center">Shift Time</th>
              <th className="py-3 px-2 text-center">Gender</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {guards.map((guard) => (
              <tr key={guard.id} className="border-t h-16">
                <td className="px-2 h-full">
                  <div className='flex items-center'>
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                    />
                    {guard.name}
                  </div>
                </td>
                <td className="px-2 h-full">{guard.phone}</td>
                <td className="px-2 h-full text-center">
                  <span
                    className={`inline-flex items-center justify-center w-28 px-3 py-1 rounded-full ${
                      guard.shift === 'Day'
                        ? 'bg-gray-100 text-amber-500'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    {guard.shift === 'Day' ? <FaSun className="mr-1" /> : <FaMoon className="mr-1" />}
                    {guard.shift}
                  </span>
                </td>
                <td className="px-2 h-full text-center">{formatDate(guard.date)}</td>
                <td className="px-2 h-full text-center">{formatTime(guard.time)}</td>
                <td className="px-2 h-full text-center">
                  <span
                    className={`inline-flex items-center justify-center w-28 px-3 py-1 rounded-full ${
                      guard.gender === 'Male'
                        ? 'bg-blue-100 text-blue-500'
                        : 'bg-pink-100 text-pink-500'
                    }`}
                  >
                    {guard.gender === 'Male' ? <FaMale className="mr-1" /> : <FaFemale className="mr-1" />}
                    {guard.gender}
                  </span>
                </td>
                <td className="px-2 h-full">
                  <div className='flex items-center justify-center space-x-2'>
                    <EditButton onClick={() => openForm(guard)} />
                    <ViewButton onClick={() => setViewGuard(guard)} />
                    <DeleteButton onClick={() => setDeleteGuard(guard)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecurityGuard;
