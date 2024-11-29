import React, { useState } from 'react';

const DropDown = ({ timePeriod, setTimePeriod }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timePeriodOptions = [
    { value: 'lastWeek', label: 'Last week' },
    { value: 'lastMonth', label: 'Last month' },
    { value: 'lastYear', label: 'Last year' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white border px-4 py-2 rounded-md shadow-sm flex items-center gap-2"
      >
        {timePeriodOptions.find(option => option.value === timePeriod)?.label}
        <span className="ml-2">&#9660;</span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          {timePeriodOptions.map(option => (
            <label
              key={option.value}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="radio"
                name="timePeriod"
                value={option.value}
                checked={timePeriod === option.value}
                onChange={() => {
                  setTimePeriod(option.value);
                  setDropdownOpen(false);
                }}
                className="form-radio text-orange-500"
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
