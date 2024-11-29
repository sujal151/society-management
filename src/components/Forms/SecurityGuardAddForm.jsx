import React, { useState } from 'react';

const SecurityGuardAddForm = ({ initialData, onAddEdit, onClose }) => {
    const [fullName, setFullName] = useState(initialData?.name || '');
    const [phoneNumber, setPhoneNumber] = useState(initialData?.phone || '');
    const [gender, setGender] = useState(initialData?.gender || '');
    const [shift, setShift] = useState(initialData?.shift || '');
    const [shiftDate, setShiftDate] = useState(initialData?.date || '');
    const [shiftTime, setShiftTime] = useState(initialData?.time || '');
    const [aadharCard, setAadharCard] = useState(null);
    const [photo, setPhoto] = useState(null); // State to store the selected photo

    const handleFileChange = (e) => {
        setAadharCard(e.target.files[0]);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result); // Set the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSecurityGuard = {
            id: initialData?.id || Date.now(),
            name: fullName,
            phone: phoneNumber,
            gender,
            shift,
            date: shiftDate,
            time: shiftTime,
            aadharCard,
            photo, // Add the selected photo to the data
        };
        onAddEdit(newSecurityGuard);
        onClose();
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-6 text-center">{initialData ? "Edit" : "Add"} Security</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-2">
                        {/* Show the image preview if selected */}
                        {photo ? (
                            <img src={photo} alt="Preview" className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <span>🔒</span>
                        )}
                    </div>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        onChange={handlePhotoChange}
                        className="hidden"
                    />
                    <label htmlFor="photo" className="text-blue-500 underline cursor-pointer">Add Photo</label>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="fullName">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter Full Name"
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
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+91"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="gender">
                            Gender<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="shift">
                            Shift<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="shift"
                            name="shift"
                            value={shift}
                            onChange={(e) => setShift(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        >
                            <option value="">Select Shift</option>
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="shiftDate">
                            Shift Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="shiftDate"
                            name="shiftDate"
                            value={shiftDate}
                            onChange={(e) => setShiftDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block font-medium mb-1" htmlFor="shiftTime">
                            Shift Time<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="time"
                            id="shiftTime"
                            name="shiftTime"
                            value={shiftTime}
                            onChange={(e) => setShiftTime(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1" htmlFor="aadharCard">
                        Upload Aadhar Card<span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <input
                            type="file"
                            id="aadharCard"
                            name="aadharCard"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                        />
                        <label htmlFor="aadharCard" className="cursor-pointer text-blue-500 underline">
                            Upload a file or drag and drop
                        </label>
                        <p className="text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>

                <div className="flex justify-between mt-6 gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300 py-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-6/12 flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-red-500 to-yellow-400 py-2 rounded-lg"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SecurityGuardAddForm;
