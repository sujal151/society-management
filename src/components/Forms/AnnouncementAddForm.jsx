import React, { useEffect, useState } from 'react';

const AnnouncementAddForm = ({ onClose, onAddEdit, initialData }) => {
    const [facilityName, setFacilityName] = useState('');
    const [description, setDescription] = useState('');
    const [scheduleDate, setScheduleDate] = useState('');
    const [remindBefore, setRemindBefore] = useState('1-day'); 
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (initialData) {
            setFacilityName(initialData.name);
            setDescription(initialData.description);
            setScheduleDate(initialData.date);
            setRemindBefore(initialData.remindBefore || '4-day');
            setDate(initialData.date);
            setTime(initialData.time);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFacility = {
            name: facilityName,
            description,
            date,
            remindBefore,
            time,
        };
        onAddEdit(newFacility);
        onClose();
    };

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                {initialData ? 'Edit Announcement' : 'Add Announcement'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="facilityName">
                        Announcement Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={facilityName}
                        onChange={(e) => setFacilityName(e.target.value)}
                        placeholder="Enter Name"
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
               <div className='flex gap-2'>
               <div className="mb-4 w-1/2">
                    <label className="block font-medium mb-1" htmlFor="date">
                        Date<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="date"
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4 w-1/2">
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
                    </div>
                </div>
               </div>
                <div className="flex justify-between mt-6 gap-4">
                    <button type="button" onClick={onClose} className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300">
                        Cancel
                    </button>
                    <button type="submit" className="flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] h-[40px] rounded-md w-6/12">
                        {initialData ? 'Update' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AnnouncementAddForm;
