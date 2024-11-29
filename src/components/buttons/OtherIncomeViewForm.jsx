import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BiSolidUserPin } from 'react-icons/bi';
import { FaWallet, FaMoneyBills } from 'react-icons/fa6';

const OtherIncomeViewForm = () => {
  const [records] = useState([
    {
      id: 1,
      unitNumber: '1001',
      date: '2024-07-10',
      status: 'Owner',
      phone: '92524 12365',
      amount: 1000,
      paymentMode: 'Cash',
      wing: 'A',
    },
    {
      id: 2,
      unitNumber: '1002',
      date: '2024-07-11',
      status: 'Tenant',
      phone: '92458 12865',
      amount: 1000,
      paymentMode: 'Online',
      wing: 'B',
    },
    // Add more records as needed
  ]);

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full h-[799px] overflow-auto mt-6">
      <h4 className="text-xl font-bold mb-4">
        Ganesh Chaturthi Participator Member List
      </h4>
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-blue-50">
          <tr>
            <th className="py-3 px-4">Unit Number</th>
            <th className="py-3 px-4 text-center">Payment Date</th>
            <th className="py-3 px-4 text-center">Tenant/Owner Status</th>
            <th className="py-3 px-4 text-center">Phone Number</th>
            <th className="py-3 px-4 text-center">Amount</th>
            <th className="py-3 px-4 text-center">Payment</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-t">
              <td className="py-4 px-4 flex items-center">
                <span className="bg-blue-100 text-blue-500 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {record.wing}
                </span>
                {record.unitNumber}
              </td>
              <td className="py-4 px-4 text-center">{formatDate(record.date)}</td>
              <td className="py-4 px-4 text-center">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full w-24 justify-center ${
                    record.status === 'Tenant'
                      ? 'bg-pink-100 text-pink-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {record.status === 'Tenant' ? (
                    <FaUserAlt className="mr-2 text-sm" />
                  ) : (
                    <BiSolidUserPin className="mr-2 text-lg" />
                  )}
                  {record.status}
                </span>
              </td>
              <td className="py-4 px-4 text-center">{record.phone}</td>
              <td className="py-4 px-4 text-green-600 font-semibold text-center">
                ₹ {record.amount}
              </td>
              <td className="py-4 px-4 text-center">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full w-24 justify-center  ${
                    record.paymentMode === 'Online'
                      ? 'bg-blue-100 text-blue-500'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {record.paymentMode === 'Online' ? (
                    <FaWallet className="mr-2" />
                  ) : (
                    <FaMoneyBills className="mr-2" />
                  )}
                  {record.paymentMode}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OtherIncomeViewForm;
