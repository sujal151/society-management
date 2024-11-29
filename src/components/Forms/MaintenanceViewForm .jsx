import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { MdTimer } from 'react-icons/md';
import { HiBadgeCheck } from 'react-icons/hi';
import { FaWallet } from 'react-icons/fa';
import { FaMoneyBills } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa'; // Icon for owner
import { FaHome } from 'react-icons/fa'; // Icon for tenant

const MaintenanceViewForm = ({ maintenance, onCancel }) => {
    if (!maintenance) return null;

    // Helper functions for icons and classes
    const getPaymentStatusIcon = (status) => {
        return status === 'Pending' ? <MdTimer /> : <HiBadgeCheck />;
    };

    const getPaymentModeIcon = (mode) => {
        return mode === 'Online' ? <FaWallet /> : <FaMoneyBills />;
    };

    const getStatusIcon = (status) => {
        return status === 'Owner' ? <FaUserTie /> : <FaHome />;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <h2 className="text-lg font-bold">View Maintenance Details</h2>
                    <RxCross2 onClick={onCancel} className="font-bold text-xl cursor-pointer" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={maintenance.profilePicture || "https://via.placeholder.com/60"}
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                    />
                    <div>
                        <p className="text-md font-semibold">{maintenance.name}</p>
                        <p className="text-gray-500 text-sm">
                            {new Date(maintenance.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between gap-y-4 gap-x-2 mb-4 text-center text-sm">
                    <div>
                        <p className="text-sm text-gray-500">Wing</p>
                        <p className="text-black font-medium bg-blue-100  rounded-full py-1 my-1 ">
                            {maintenance.wing || '--'}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Unit</p>
                        <p className="text-black font-medium py-1 my-1">
                            {maintenance.unit || '--'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p
                            className={`inline-flex items-center gap-2 justify-center font-medium rounded-full px-3 py-1 my-1 ${maintenance.status === 'Owner'
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-pink-100 text-pink-600'
                                }`}
                        >
                            {getStatusIcon(maintenance.status)}
                            {maintenance.status || '--'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p className="text-green-600 font-medium  rounded-full py-1 my-1">
                            ₹ {maintenance.amount || '0'}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between gap-y-4 text-center text-sm">
                    <div>
                        <p className="text-sm text-gray-500">Penalty</p>
                        <p className="text-black font-medium bg-gray-100 rounded-full py-1 my-1">
                            {maintenance.penalty || '--'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Payment Status</p>
                        <p
                            className={`inline-flex items-center gap-2 justify-center font-medium rounded-full px-3  my-1 py-1 ${maintenance.paymentStatus === 'Pending'
                                    ? 'bg-yellow-100 text-yellow-600'
                                    : 'bg-green-100 text-green-600'
                                }`}
                        >
                            {getPaymentStatusIcon(maintenance.paymentStatus)}
                            {maintenance.paymentStatus || '--'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Payment Mode</p>
                        <p
                            className={`inline-flex items-center gap-2 justify-center font-medium rounded-full px-3 my-1 py-1 ${maintenance.paymentMode === 'Online'
                                    ? 'bg-blue-100 text-blue-500'
                                    : 'bg-gray-100 text-black'
                                }`}
                        >
                            {getPaymentModeIcon(maintenance.paymentMode)}
                            {maintenance.paymentMode || 'Cash'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceViewForm;
