import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const formatTime = (time24) => {
    const [hours, minutes] = time24.split(":");
    const period = +hours >= 12 ? "PM" : "AM";
    const hours12 = (+hours % 12) || 12;
    return `${hours12}:${minutes} ${period}`;
};

const VisitorViewForm = ({ visitor, onCancel }) => {
    if (!visitor) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-[410px]">
                <div className="flex items-center justify-between mb-2 border-b pb-3">
                    <h2 className="text-xl font-bold">View Visitor</h2>
                    <RxCross2 onClick={onCancel} className="font-bold text-xl cursor-pointer" />
                </div>
                <div className="py-2">
                    <p className="text-lg font-semibold">{visitor.name}</p>
                    <p className="text-gray-500 text-sm">{visitor.date}</p>
                </div>
                <div className="py-2">
                    <p className="text-gray-500">Phone Number</p>
                    <p>{visitor.phone}</p>
                </div>
                <div className="py-2">
                    <p className="text-gray-500">Unit Number</p>
                    <div className='flex items-center gap-2'>
                        <p className="bg-blue-100 rounded-full p-[0.5px] px-[5px]  text-md text-blue-500 font-semibold ">{visitor.wing}</p>
                        <p className="font-medium">{visitor.unit}</p>
                    </div>
                </div>
                <div className="py-2">
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium">{formatTime(visitor.time)}</p>
                </div>
            </div>
        </div>
    );
};

export default VisitorViewForm;
