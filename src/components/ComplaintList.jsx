import React, { useState } from 'react';
import DropDown from './DropDown';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import ViewButton from './buttons/ViewButton';
import AddButton from './buttons/AddButton';
import ComplainAddForm from './Forms/ComplainAddForm';
import DeleteForm from './Forms/DeleteForm';
import ViewForm from './Forms/ComplainViewForm';

const getDateRange = (timePeriod) => {
  const now = new Date();
  let startDate, endDate;

  if (timePeriod === 'lastWeek') {
    startDate = new Date(now);
    startDate.setDate(now.getDate() - 7);
    endDate = now;
  } else if (timePeriod === 'lastMonth') {
    startDate = new Date(now);
    startDate.setMonth(now.getMonth() - 1);
    endDate = now;
  } else if (timePeriod === 'lastYear') {
    startDate = new Date(now);
    startDate.setFullYear(now.getFullYear() - 1);
    endDate = now;
  }

  return {
    start: startDate,
    end: endDate,
  };
};


const ComplaintList = ({ title, showDropdown, fields, complaintbtn, cn, un, FormTitle, deltitle, viewtitle, deletepages, peoplename, peoplercname, complainedit }) => {
  const [timePeriod, setTimePeriod] = useState('lastYear');
  const { start, end } = getDateRange(timePeriod);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaintToDelete, setComplaintToDelete] = useState(null);
  const [complaintToView, setComplaintToView] = useState(null);

  const [complaints, setComplaints] = useState([
    { id: 1, name: 'Evelyn Harper', complaint: 'Unethical Behavior', description: "this is a description", date: '10/20/2024', wing: "A", unit: "1002", priority: 'High', status: 'Open' },
    { id: 2, name: 'Evelyn Harper', complaint: 'Unethical Behavior', description: "this is a description", date: '10/20/2024', wing: "A", unit: "1001", priority: 'Low', status: 'Pending' },
    { id: 3, name: 'Evelyn Harper', complaint: 'Unethical Behavior', description: "this is a description", date: '10/20/2024', wing: "A", unit: "1001", priority: 'Medium', status: 'Solve' },
  ]);

  const filteredComplaints = complaints.filter((complaint) => {
    const complaintDate = new Date(complaint.date);
    return complaintDate >= start && complaintDate <= end;
  });

  const priorityBadgeColors = {
    Medium: 'bg-blue-600 text-white',
    Low: 'bg-green-600 text-white',
    High: 'bg-red-600 text-white',
  };

  const statusBadgeColors = {
    Open: 'bg-blue-100 text-blue-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Solve: 'bg-green-100 text-green-700',
  };

  const addOrUpdateComplaint = (newComplaint) => {
    if (selectedComplaint) {
      setComplaints(
        complaints.map((complaint) =>
          complaint.id === selectedComplaint.id ? { ...complaint, ...newComplaint } : complaint
        )
      );
    } else {
      setComplaints([...complaints, { ...newComplaint, id: complaints.length + 1, date: new Date().toLocaleDateString() }]);
    }
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

  const deleteComplaint = () => {
    setComplaints(complaints.filter((complaint) => complaint.id !== complaintToDelete.id));
    setIsDeleteModalOpen(false);
    setComplaintToDelete(null);
  };

  return (
    <div>
      <div className="flex sm:justify-between gap-3 flex-wrap items-center mb-4 justify-center">
        <h4 className="text-xl font-bold">{title}</h4>
        {showDropdown ? (
          <DropDown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        ) : (
          <AddButton
            Addbuttontitle={complaintbtn}
            onClick={() => {
              setIsModalOpen(true);
              setSelectedComplaint(null);
            }}
          />
        )}
      </div>

      <div className="overflow-auto w-full">
        <table className="min-w-full w-[900px] text-left border-collapse">
          <thead className="bg-blue-50 rounded-xl">
            <tr>
              {fields.includes('complainerName') && <th className="p-3">{peoplename}</th>}
              {fields.includes('complaintName') && <th className="p-3">{peoplercname}</th>}
              {fields.includes('description') && <th className="p-3 text-center">Description</th>}
              {fields.includes('date') && <th className="p-3 text-center">Date</th>}
              {fields.includes('unitNumber') && <th className="p-3 text-center">Unit Number</th>}
              {fields.includes('priority') && <th className="p-3 text-center">Priority</th>}
              {fields.includes('status') && <th className="p-3 text-center"> Status</th>}
              {fields.includes('action') && <th className="p-3 text-center">Action</th>}
            </tr>
          </thead>
          <tbody>
            {filteredComplaints.length > 0 ? (
              filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="border-t h-16">
                  {fields.includes('complainerName') && (
                    <td className="h-full ">
                      <div className='flex items-center'>
                        <img
                          className="w-10 h-10 rounded-full mr-3"
                          src="https://via.placeholder.com/40"
                          alt="Profile"
                        />
                        {complaint.name}
                      </div>
                    </td>
                  )}
                  {fields.includes('complaintName') && <td className="h-full">{complaint.complaint}</td>}
                  {fields.includes('description') && <td className="h-full text-center max-w-56">{complaint.description}</td>}
                  {fields.includes('date') && <td className="h-full text-center">{complaint.date}</td>}
                  {fields.includes('unitNumber') && (
                    <td className="h-full text-center">
                      <span className="bg-blue-100 rounded-full p-[5px] px-[7px] text-blue-500 font-semibold mx-1">
                        {complaint.wing}
                      </span>
                      <span className="mx-1 font-medium">
                        {complaint.unit}
                      </span>
                    </td>
                  )}
                  {fields.includes('priority') && (
                    <td className="h-full text-center">
                      <span
                        className={`w-20 inline-block px-3 py-1 rounded-full text-sm font-medium ${priorityBadgeColors[complaint.priority]}`}
                      >
                        {complaint.priority}
                      </span>
                    </td>
                  )}
                  {fields.includes('status') && (
                    <td className="h-full text-center">
                      <span
                        className={`w-20 inline-block px-3 py-1 rounded-full text-sm font-medium ${statusBadgeColors[complaint.status]}`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                  )}
                  {fields.includes('action') && (
                    <td className="h-full ">
                      <div className='flex justify-center space-x-2'>
                        <EditButton onClick={() => { setIsModalOpen(true); setSelectedComplaint(complaint); }} />
                        <ViewButton onClick={() => { setIsViewModalOpen(true); setComplaintToView(complaint); }} />
                        <DeleteButton onClick={() => { setIsDeleteModalOpen(true); setComplaintToDelete(complaint); }} />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={fields.length} className="p-3 text-center text-gray-500">
                  No complaints found for the selected time period.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-[410px]">
            <ComplainAddForm
              cn={cn}
              un={un}
              FormTitle={selectedComplaint ? complainedit : FormTitle}
              onClose={() => { setIsModalOpen(false); setSelectedComplaint(null); }}
              onAddEdit={addOrUpdateComplaint}
              initialData={selectedComplaint}
            />
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <DeleteForm
          onCancel={() => setIsDeleteModalOpen(false)}
          onDelete={deleteComplaint}
          deltitle={deltitle}
          deletepages={deletepages}
        />
      )}

      {isViewModalOpen && (
        <ViewForm
          complaint={complaintToView}
          onCancel={() => setIsViewModalOpen(false)}
          viewtitle={viewtitle}
        />
      )}
    </div>
  );
};

export default ComplaintList;
