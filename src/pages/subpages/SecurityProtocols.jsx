import React, { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import EditButton from '../../components/buttons/EditButton';
import ViewButton from '../../components/buttons/ViewButton';
import DeleteButton from '../../components/buttons/DeleteButton';
import DeleteForm from '../../components/Forms/DeleteForm';
import ProtocolsAddForm from '../../components/Forms/ProtocolsAddForm';
import ProtocolsViewForm from '../../components/Forms/ProtocolsViewForm';

const SecurityProtocols = () => {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'Evelyn Harper', Description: 'This is a description', date: '2024-01-10', time: '15:45' },
    { id: 2, name: 'Wade Warren', Description: 'This is a description', date: '2024-01-11', time: '02:45' },
    { id: 3, name: 'Guy Hawkins', Description: 'This is a description', date: '2024-01-12', time: '15:00' },
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
      <div className="flex  sm:justify-between justify-center gap-3 flex-wrap items-center mb-4">
        <h4 className="text-xl font-bold">Security Protocols</h4>
        <AddButton Addbuttontitle="Create Protocol" onClick={() => openForm()} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <ProtocolsAddForm
              onAddEdit={handleAddEditVisitor}
              initialData={editVisitor}
              FormTitle={editVisitor ? "Edit Protocol" : "Add Protocol"}
              onClose={() => setIsFormOpen(false)} 
            />
          </div>
        </div>
      )}

      {viewVisitor && (
        <ProtocolsViewForm
          visitor={viewVisitor} 
          onCancel={() => setViewVisitor(null)} 
        />
      )}

      {deleteVisitor && (
        <DeleteForm
          onCancel={() => setDeleteVisitor(null)}
          onDelete={handleDeleteVisitor}
          deltitle="Protocol"
          deletepages="Protocols "
        />
      )}

      <div className="overflow-auto w-full">
        <table className="min-w-full w-[700px] text-left border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-2">Title</th>
              <th className="py-3 px-2 text-start">Description</th>
              <th className="py-3 px-2 text-center">Date</th>
              <th className="py-3 px-2 text-center">Time</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => (
              <tr key={visitor.id} className="border-t h-16">
                <td className="h-full px-2">
                  <div className='flex items-center'>
                    {visitor.name}
                  </div>
                </td>
                <td className="h-full px-2 text-start max-w-56">{visitor.Description}</td>
                <td className="h-full px-2 text-center">{formatDate(visitor.date)}</td>
                <td className="h-full px-2 text-center">{formatTime(visitor.time)}</td>
                <td className="h-full px-2">
                  <div className='flex items-center justify-center space-x-2'>
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

export default SecurityProtocols;
