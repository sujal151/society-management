import React, { useEffect, useState } from 'react';

const ComplainAddForm = ({ onClose, onAddEdit, initialData, cn, un, FormTitle }) => {
    const [complainerName, setComplainerName] = useState('');
    const [complaintName, setComplaintName] = useState('');
    const [description, setDescription] = useState('');
    const [wing, setWing] = useState('');
    const [unit, setUnit] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [status, setStatus] = useState('Open');

    useEffect(() => {
        if (initialData) {
            setComplainerName(initialData.name);
            setComplaintName(initialData.complaint);
            setDescription(initialData.description);
            setWing(initialData.wing);
            setUnit(initialData.unit);
            setPriority(initialData.priority);
            setStatus(initialData.status);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComplaint = {
            name: complainerName,
            complaint: complaintName,
            description,
            wing,
            unit,
            priority,
            status,
        };
        onAddEdit(newComplaint);
        onClose();
    };

    return (
        <div >
            <h2 className="text-xl font-semibold border-b-1 border-b pb-2 mb-4">{FormTitle}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block  font-medium mb-1" htmlFor="complainerName">
                        {un}<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="complainerName"
                        value={complainerName}
                        onChange={(e) => setComplainerName(e.target.value)}
                        placeholder="Enter Name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block  font-medium mb-1" htmlFor="complaintName">
                        {cn}<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="complaintName"
                        value={complaintName}
                        onChange={(e) => setComplaintName(e.target.value)}
                        placeholder="Enter Name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block  font-medium mb-1" htmlFor="description">
                        Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block  font-medium mb-1" htmlFor="wing">
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
                        <label className="block  font-medium mb-1" htmlFor="unit">
                            Unit<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            placeholder="Enter Unit"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Priority<span className="text-red-500">*</span></label>
                    <div className="flex gap-4">
                        {['High', 'Medium', 'Low'].map((p) => (
                            <label key={p} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer w-4/12 ${priority === p ? 'border-orange-500 ' : 'border-gray-300 text-gray-600'}`}>
                                <input
                                    type="radio"
                                    name="priority"
                                    value={p}
                                    checked={priority === p}
                                    onChange={() => setPriority(p)}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${priority === p ? 'border-orange-500' : 'border-gray-300'}`}>
                                    {priority === p && <span className="w-2 h-2 bg-orange-500 rounded-full"></span>}
                                </span>
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Status<span className="text-red-500">*</span></label>
                    <div className="flex gap-4 ">
                        {['Open', 'Pending', 'Solve'].map((s) => (
                            <label key={s} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition cursor-pointer w-4/12 ${status === s ? 'border-orange-500 ' : 'border-gray-300 text-gray-600'}`}>
                                <input
                                    type="radio"
                                    name="status"
                                    value={s}
                                    checked={status === s}
                                    onChange={() => setStatus(s)}
                                    className="hidden"
                                />
                                <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${status === s ? 'border-orange-500' : 'border-gray-300'}`}>
                                    {status === s && <span className="w-2 h-2 bg-orange-500 rounded-full"></span>}
                                </span>
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-6 gap-4">
                    <button type="button" onClick={onClose} className="w-6/12  bg-gray-200 rounded-lg hover:bg-gray-300">
                        Cancel
                    </button>
                    <button type="submit" className=" flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#E74C3C] to-[#FFD351] h-[40px] rounded-md w-6/12">
                        {initialData ? 'Update' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ComplainAddForm;
