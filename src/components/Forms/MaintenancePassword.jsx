import React, { useState } from "react";
import MaintenanceAddForm from "./MaintenanceAddForm";

const MaintenancePassword = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showMaintenanceView, setShowMaintenanceView] = useState(false); // State to toggle MaintenanceViewForm

    const handleContinue = () => {
        setShowMaintenanceView(true); // Open the MaintenanceViewForm
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Maintenance Password Modal */}
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
                    {/* Modal Header */}
                    <h2 className="text-xl font-semibold mb-4">Set Maintenance</h2>

                    {/* Password Input */}
                    <label className="block text-sm font-medium mb-2">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <div className="relative mb-6">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"} {/* Use icons for better visuals */}
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 text-gray-700 w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleContinue} // Handle Continue button click
                            className="px-6 py-2 text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] rounded-lg w-6/12"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            {/* Maintenance View Form */}
            {showMaintenanceView && (
                <MaintenanceAddForm
                    maintenanceDetail={{
                        maintenanceAmount: "0000",
                        penaltyAmount: "0000",
                        dueDate: "Select Due Date",
                        penaltyAppliedAfter: "Select Penalty Applied After Day Selection",
                    }}
                    onCancel={() => setShowMaintenanceView(false)} // Close MaintenanceViewForm
                />
            )}
        </>
    );
};

export default MaintenancePassword;
