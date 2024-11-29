import React, { useState } from 'react';

const ProtocolsAddForm = ({ onAddEdit, initialData, FormTitle,onClose  }) => {
    const [title, setTitle] = useState(initialData ? initialData.name : '');
    const [description, setDescription] = useState(initialData ? initialData.Description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const formattedTime = currentDate.toTimeString().slice(0, 5);

        onAddEdit({
            name: title,
            Description: description,
            date: formattedDate,
            time: formattedTime
        });
    };

    return (
        <div>
            <h3 className="text-lg font-bold mb-4 border-b pb-2">{FormTitle}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1 " htmlFor="title">
                        Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="description">
                        Description<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
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

export default ProtocolsAddForm;
