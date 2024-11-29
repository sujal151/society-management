import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaSun, FaMoon, FaFemale, FaMale } from 'react-icons/fa';

const SecurityGuardViewForm = ({ guard, onCancel }) => {
    if (!guard) return null;

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = new Date(`1970-01-01T${guard.time}`).toLocaleTimeString('en-US', timeOptions);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-[350px]">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <h2 className="text-lg font-bold">View Security Guard Details</h2>
                    <RxCross2 onClick={onCancel} className="font-bold text-xl cursor-pointer" />
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="https://via.placeholder.com/60"
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <p className="text-md font-semibold">{guard.name}</p>
                        <p className="text-gray-500">{new Date(guard.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Select Shift</p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full ${guard.shift === 'Day' ? 'bg-gray-100 text-amber-500' : 'bg-gray-700 text-white'}`}>
                            {guard.shift === 'Day' ? <FaSun className="mr-1" /> : <FaMoon className="mr-1" />}
                            {guard.shift}
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Shift Time</p>
                        <p className=" bg-gray-200 rounded-full px-3 flex items-center justify-center py-1">
                            {formattedTime.replace(/ (AM|PM)$/, '')}
                            <span className="ml-1">{formattedTime.match(/(AM|PM)$/)[0]}</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Gender</p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full ${guard.gender === 'Male' ? 'bg-blue-100 text-blue-500' : 'bg-pink-100 text-pink-500'}`}>
                            {guard.gender === 'Male' ? <FaMale className="mr-1" /> : <FaFemale className="mr-1" />}
                            {guard.gender}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityGuardViewForm;
