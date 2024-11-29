import React, { useEffect, useState } from 'react';

const VisitorAddForm = ({ onClose, onAddEdit, initialData }) => {
    const [visitorName, setVisitorName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [amPm, setAmPm] = useState('AM');
    const [wing, setWing] = useState('');
    const [unit, setUnit] = useState('');
    useEffect(() => {
        if (initialData) {
            setVisitorName(initialData.name);
            setPhoneNumber(initialData.phone);
            setDate(initialData.date);
            setWing(initialData.wing);
            setUnit(initialData.unit);
            setTime(initialData.time);
            setAmPm(initialData.amPm || 'AM'); 
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVisitor = {
            name: visitorName,
            phone: phoneNumber,
            date,
            wing,
            unit,
            time,
            amPm,
        };
        onAddEdit(newVisitor);
        onClose();
    };

    return (
        <div>
            <h2 className="text-xl font-semibold border-b-1 border-b pb-2 mb-4">Create Visitor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="visitorName">
                        Visitor Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="visitorName"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="Enter Visitor Name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="phoneNumber">
                        Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Phone Number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="date">
                        Date<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="wing">
                            Wing<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="wing"
                            value={wing}
                            onChange={(e) => setWing(e.target.value)}
                            placeholder="Enter Wing"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="unit">
                            Unit Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            placeholder="Enter Unit Number"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="time">
                        Time<span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                        <select
                            value={amPm}
                            onChange={(e) => setAmPm(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
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

export default VisitorAddForm;
