import React from 'react';

const DeleteForm = ({ onCancel, onDelete ,deltitle,deletepages}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-lg p-6 w-[410px] shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Delete {deltitle}?</h2>
        <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this {deletepages}?</p>
        <div className="flex justify-between gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 w-6/12 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 w-6/12 text-white rounded-lg font-medium hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
