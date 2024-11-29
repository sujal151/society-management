import React, { useEffect, useState } from 'react';

const FacilityAddForm = ({ onClose, onAddEdit, initialData }) => {
  const [facilityName, setFacilityName] = useState('');
  const [description, setDescription] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [remindBefore, setRemindBefore] = useState('1-day'); 

  useEffect(() => {
    if (initialData) {
      setFacilityName(initialData.name);
      setDescription(initialData.description);
      setScheduleDate(initialData.date);
      setRemindBefore(initialData.remindBefore || '4-day');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFacility = {
      name: facilityName,
      description,
      date: scheduleDate,
      remindBefore,
    };
    onAddEdit(newFacility);
    onClose();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">Create Facility</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="facilityName">
            Facility Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="facilityName"
            value={facilityName}
            onChange={(e) => setFacilityName(e.target.value)}
            placeholder="Enter Facility Name"
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
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="scheduleDate">
            Schedule Service Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="scheduleDate"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="remindBefore">
            Remind Before<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="remindBefore"
              value={remindBefore}
              onChange={(e) => setRemindBefore(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none"
              required
            >
              <option value="1-day">1-day</option>
              <option value="2-day">2-day</option>
              <option value="3-day">3-day</option>
              <option value="4-day">4-day</option>
              <option value="5-day">5-day</option>
            </select>
            {/* Icon for dropdown (if needed) */}
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-6 gap-4">
          <button type="button" onClick={onClose} className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300">
            Cancel
          </button>
          <button type="submit" className="flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#E74C3C] to-[#FFD351] h-[40px] rounded-md w-6/12">
            {initialData ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacilityAddForm;
