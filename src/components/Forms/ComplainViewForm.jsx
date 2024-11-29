import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const ViewForm = ({ complaint, onCancel, viewtitle }) => {
  if (!complaint) return null;

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-[410px]">
        <div className="flex items-center justify-between mb-2 border-b pb-3">
          <h2 className="text-xl font-bold">{viewtitle}</h2>
          <RxCross2 onClick={onCancel} className="font-bold text-xl" />
        </div>
        <div className="py-2">
          <p className="text-lg font-semibold">{complaint.name}</p>
          <p className="text-gray-500 text-sm">{complaint.date}</p>
        </div>
        <div className="py-2">
          <p className="text-gray-500">Request Name</p>
          <p>{complaint.complaint}</p>
        </div>
        <div className="py-2">
          <p className="text-gray-500">Description</p>
          <p>{complaint.description}</p>
        </div>

        <div className="flex justify-between py-2">
          <div className="flex justify-center flex-col items-center gap-1">
            <p className="text-gray-500">Wing</p>
            <p>
              <span className="bg-blue-100 rounded-full p-[5px] px-[7px] text-blue-500 font-semibold mx-1">
                {complaint.wing}
              </span>
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <p className="text-gray-500">Unit</p>
            <p className="font-medium">{complaint.unit}</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <p className="text-gray-500">Priority</p>
            <p className={`w-20 inline-block px-3 py-1 text-center rounded-full text-sm font-medium ${priorityBadgeColors[complaint.priority]}`}>
              {complaint.priority}
            </p>
          </div>
          <div className="flex justify-center flex-col items-center gap-1">
            <p className="text-gray-500">Status</p>
            <p className={`w-20 inline-block px-3 py-1 text-center rounded-full text-sm font-medium ${statusBadgeColors[complaint.status]}`}>
              {complaint.status}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewForm;
