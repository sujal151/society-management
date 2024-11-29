import React, { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import EditButton from '../../components/buttons/EditButton';
import ViewButton from '../../components/buttons/ViewButton';
import DeleteButton from '../../components/buttons/DeleteButton';
import VisitorAddForm from '../../components/Forms/VisitorAddForm';
import VisitorViewForm from '../../components/Forms/VisitorViewForm'; 
import DeleteForm from '../../components/Forms/DeleteForm';

const VisitorLogs = () => {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'Evelyn Harper', phone: '97852 12369', date: '2024-01-10', wing: 'A', unit: '1001', time: '15:45' },
    { id: 2, name: 'Wade Warren', phone: '97852 25893', date: '2024-01-11', wing: 'B', unit: '1002', time: '02:45' },
    { id: 3, name: 'Guy Hawkins', phone: '97589 55563', date: '2024-01-12', wing: 'C', unit: '1003', time: '15:00' },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editVisitor, setEditVisitor] = useState(null);
  const [viewVisitor, setViewVisitor] = useState(null); 
  const [deleteVisitor, setDeleteVisitor] = useState(null);

  const handleAddEditVisitor = (newVisitor) => {
    if (editVisitor) {
      setVisitors(visitors.map(visitor => visitor.id === editVisitor.id ? newVisitor : visitor));
    } else {
      setVisitors([...visitors, { ...newVisitor, id: visitors.length + 1 }]);
    }
    setIsFormOpen(false);
    setEditVisitor(null);
  };

  const openForm = (visitor = null) => {
    setEditVisitor(visitor);
    setIsFormOpen(true);
  };

  const handleDeleteVisitor = () => {
    setVisitors(visitors.filter(visitor => visitor.id !== deleteVisitor.id));
    setDeleteVisitor(null);
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
        <h4 className="text-xl font-bold">Visitor Logs</h4>
        <AddButton Addbuttontitle="Add Visitor" onClick={() => openForm()} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <VisitorAddForm
              onClose={() => setIsFormOpen(false)}
              onAddEdit={handleAddEditVisitor}
              initialData={editVisitor}
              vn="Visitor Name"
              pn="Phone Number"
              FormTitle={editVisitor ? "Edit Visitor" : "Add Visitor"}
            />
          </div>
        </div>
      )}

      {viewVisitor && (
        <VisitorViewForm
          visitor={viewVisitor} 
          onCancel={() => setViewVisitor(null)} 
        />
      )}

      {deleteVisitor && (
        <DeleteForm
          onCancel={() => setDeleteVisitor(null)}
          onDelete={handleDeleteVisitor}
          deltitle=" Visitor"
          deletepages="Visitor "
        />
      )}

      <div className="overflow-auto w-full">
        <table className="min-w-full w-[700px] text-left border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-2">Visitor Name</th>
              <th className="py-3 px-2 text-start">Phone Number</th>
              <th className="py-3 px-2 text-center">Date</th>
              <th className="py-3 px-2 text-center">Unit Number</th>
              <th className="py-3 px-2 text-center">Time</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id} className="border-t h-16">
                <td className="px-2 h-full">
                  <div className=' flex items-center'>
                    <img
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                    />
                    {visitor.name}
                  </div>
                </td>
                <td className="px-2 h-full">{visitor.phone}</td>
                <td className="px-2 h-full text-center">{formatDate(visitor.date)}</td>
                <td className="px-2 h-full text-center">
                  <span className="bg-blue-100 rounded-full px-2 py-1 text-blue-500 font-semibold">
                    {visitor.wing}
                  </span>
                  <span className="font-medium ml-2">{visitor.unit}</span>
                </td>
                <td className="px-2 h-full text-center">{formatTime(visitor.time)}</td>
                <td className="px-2 h-full ">
                  <div className=' flex items-center justify-center space-x-2'>
                    <EditButton onClick={() => openForm(visitor)} />
                    <ViewButton onClick={() => setViewVisitor(visitor)} />  
                    <DeleteButton onClick={() => setDeleteVisitor(visitor)} />
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

export default VisitorLogs;
