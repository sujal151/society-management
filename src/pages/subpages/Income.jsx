import React, { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import ViewButton from '../../components/buttons/ViewButton';
import { FaUserAlt, FaWallet } from 'react-icons/fa';
import { BiSolidUserPin } from 'react-icons/bi';
import { MdTimer } from 'react-icons/md';
import { HiBadgeCheck } from 'react-icons/hi';
import { FaMoneyBills } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import MaintenancePassword from '../../components/Forms/MaintenancePassword';
import MaintenanceViewForm from '../../components/Forms/MaintenanceViewForm ';

const IncomeDetails = ({ data }) => {
  const [records, setRecords] = useState([
    {
      id: 1,
      name: 'Cody Fisher',
      unitNumber: '1001',
      date: '2024-02-10',
      status: 'Tenant',
      phone: '92524 34522',
      amount: 1000,
      penalty: '--',
      paymentStatus: 'Pending',
      paymentMode: 'Online',
      wing: "A",
      unit: "1002",
    },
    {
      id: 2,
      name: 'Esther Howard',
      unitNumber: '1002',
      date: '2024-02-11',
      status: 'Owner',
      phone: '92524 12365',
      amount: 1000,
      penalty: 250,
      paymentStatus: 'Done',
      paymentMode: 'Cash',
      wing: "A",
      unit: "1002",
    },
  ]);

  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleViewClick = (record) => {
    console.log("Selected Record:", record);
    setSelectedRecord(record);
  };

  const closeViewForm = () => {
    setSelectedRecord(null);
  };

  return (
    <div>
     <div className="mt-6 p-5 rounded-lg shadow-md flex flex-wrap justify-between items-center bg-white">
  <div className="w-full md:w-auto order-1 md:order-2 mb-4 md:mb-0 flex justify-start md:justify-end">
    <AddButton
      Addbuttontitle="Set Maintenance"
      onClick={() => setShowMaintenanceModal(true)}
    />
  </div>

  <div className="flex flex-wrap gap-3 w-full md:w-auto order-2 md:order-1">
    <div className="p-6 rounded-lg shadow-md border-r-2 border-r-orange-500 flex justify-between items-center w-full md:w-[236px] h-[105px]">
      <div>
        <h4 className="text-[16px] font-semibold text-black">Maintenance Amount</h4>
        <p className="text-[26px] font-semibold mt-2 text-green-600">₹ 0</p>
      </div>
    </div>
    <div className="p-6 rounded-lg shadow-md border-r-2 border-r-orange-500 flex justify-between items-center w-full md:w-[236px] h-[105px]">
      <div>
        <h4 className="text-[16px] font-semibold text-black">Penalty Amount</h4>
        <p className="text-[26px] font-semibold mt-2 text-red-600">₹ 0</p>
      </div>
    </div>
  </div>
</div>


      <div>
        <div className=" shadow-md rounded-t-lg mt-6 w-64 border-b-2 border-b-[#fc6d25] flex justify-between">
          <Link
            to="/financial-management/income"
            className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg  ${location.pathname === '/financial-management/income' ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'bg-white'
              }`}
          >
            Maintenance
          </Link>
          <Link
            to="/financial-management/other-income"
            className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg  ${location.pathname === '/financial-management/other-income' ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'bg-white'
              }`}
          >
            Other Income
          </Link>
        </div>

        <div className="bg-white p-4 shadow-md rounded-b-lg w-full h-[799px] overflow-auto">
          <h4 className="text-xl font-bold mb-4">Maintenance Details</h4>
          <table className="min-w-full w-[1100px] text-left border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2 text-center">Unit Number</th>
                <th className="py-3 px-2 text-center">Date</th>
                <th className="py-3 px-2 text-center">Status</th>
                <th className="py-3 px-2 text-center">Phone Number</th>
                <th className="py-3 px-2 text-center">Amount</th>
                <th className="py-3 px-2 text-center">Penalty</th>
                <th className="py-3 px-2 text-center">Status</th>
                <th className="py-3 px-2 text-center">Payment</th>
                <th className="py-3 px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-t h-16">
                  <td>
                    <div className='flex items-center'>
                      <img
                        className="w-10 h-10 rounded-full mr-3"
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                      />
                      {record.name}
                    </div>
                  </td>
                  <td className=" text-center">
                    <span className="bg-blue-100 rounded-full p-[5px] px-[7px] text-blue-500 font-semibold mx-1">
                      {record.wing}
                    </span>
                    <span className="mx-1 font-medium">
                      {record.unit}
                    </span>
                  </td>
                  <td className=" text-center">{formatDate(record.date)}</td>
                  <td className=" text-center">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full w-28 items-center gap-2 justify-center ${record.status === 'Tenant' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
                        }`}
                    >
                      {record.status === 'Tenant' ? <FaUserAlt className='text-sm' /> : <BiSolidUserPin className='text-lg' />}
                      {record.status}
                    </span>
                  </td>
                  <td className=" text-center">{record.phone}</td>
                  <td className=" text-green-600 font-semibold text-center">₹ {record.amount}</td>
                  <td className=" text-center">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full w-20 items-center gap-2 justify-center ${record.penalty === '--' ? 'bg-gray-100 text-black' : 'bg-red-500 text-white'
                        }`}
                    >
                      {record.penalty === '--' ? <div>--</div> : <span>{record.penalty}</span>}
                    </span>
                  </td>
                  <td className=" text-center">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full w-28 items-center gap-1 justify-center ${record.paymentStatus === 'Pending'
                        ? 'bg-yellow-100 text-yellow-500'
                        : 'bg-green-100 text-green-600'
                        }`}
                    >
                      {record.paymentStatus === 'Pending' ? <MdTimer /> : <HiBadgeCheck className='text-lg' />}
                      {record.paymentStatus}
                    </span>
                  </td>
                  <td className=" text-center">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full w-28 items-center gap-2 justify-center ${record.paymentMode === 'Online'
                        ? 'bg-blue-100 text-blue-500'
                        : 'bg-gray-100 text-black'
                        }`}
                    >
                      {record.paymentMode === 'Online' ? <FaWallet /> : <FaMoneyBills />}
                      {record.paymentMode}
                    </span>
                  </td>
                  <td className=" ">
                    <div className='flex justify-center space-x-2'>
                      <ViewButton onClick={() => handleViewClick(record)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showMaintenanceModal && (
        <MaintenancePassword
          isOpen={showMaintenanceModal}
          onClose={() => setShowMaintenanceModal(false)}
        />
      )}

      {selectedRecord && (
        <MaintenanceViewForm
          maintenance={selectedRecord}
          onCancel={closeViewForm}
        />

      )}
    </div>
  );
};

export default IncomeDetails;
