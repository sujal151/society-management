import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const MaintenanceAddForm = ({ initialDetails, onCancel, onSave }) => {
    const [formDetails, setFormDetails] = useState(initialDetails || {
        maintenanceAmount: "",
        penaltyAmount: "",
        dueDate: "",
        penaltyAppliedAfter: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    // Handle form submission
    const handleSave = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (onSave) {
            onSave(formDetails); // Pass updated details back to parent
        }
        onCancel(); // Close the form after saving
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-[410px]">
                <div className="flex items-center justify-between mb-2 border-b pb-3">
                    <h2 className="text-xl font-bold">Add Maintenance Detail</h2>
                    <RxCross2
                        onClick={onCancel}
                        className="font-bold text-xl cursor-pointer"
                    />
                </div>

                {/* Form */}
                <form onSubmit={handleSave}>
                    {/* Maintenance Amount */}
                    <div className="flex gap-2">
                        <div className="py-2 w-1/2">
                            <p className="text-gray-900 text-[14px]">Maintenance Amount</p>
                            <input
                                required
                                type="number"
                                name="maintenanceAmount"
                                value={formDetails.maintenanceAmount}
                                onChange={handleChange}
                                placeholder=" ₹ 0000"
                                className="w-full px-3 py-2 border rounded-md mt-1"
                            />
                        </div>

                        {/* Penalty Amount */}
                        <div className="py-2 w-1/2">
                            <p className="text-gray-900 text-[14px]">Penalty Amount</p>
                            <input
                                required
                                type="number"
                                name="penaltyAmount"
                                value={formDetails.penaltyAmount}
                                onChange={handleChange}
                                placeholder=" ₹ 0000"
                                className="w-full px-3 py-2 border rounded-md mt-1"
                            />
                        </div>
                    </div>

                    {/* Maintenance Due Date */}
                    <div className="py-2">
                        <p className="text-gray-900 text-[14px]">Maintenance Due Date</p>
                        <div className="relative">
                            <input
                                required
                                type="date"
                                name="dueDate"
                                value={formDetails.dueDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md mt-1"
                            />
                        </div>
                    </div>

                    {/* Penalty Applied After */}
                    <div className="py-2">
                        <p className="text-gray-900 text-[14px]">
                            Penalty Applied After Day Selection
                        </p>
                        <select
                            required
                            name="penaltyAppliedAfter"
                            value={formDetails.penaltyAppliedAfter}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md mt-1"
                        >
                            <option value="" disabled>
                                Select Penalty Days
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-4 mt-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-6 py-2 border border-gray-300 text-gray-700 w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] rounded-lg w-6/12"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MaintenanceAddForm;
