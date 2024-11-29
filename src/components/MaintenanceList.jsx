import React from 'react';

const MaintenanceList = () => {
  const maintenances = [
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
    { name: 'Roger Lubin', amount: '₹5,000', pendingMonths: '2 Month Pending', imgSrc: '/path-to-image.jpg' },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 overflow-y-auto w-full 2xl:w-[380px] h-[398px]">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-bold">Pending Maintenances</h4>
        <a href="#" className="text-blue-500 text-sm">View all</a>
      </div>
      <ul className="space-y-2">
        {maintenances.map((item, index) => (
          <li key={index} className="flex items-center justify-between border-t pt-2">
            <div className="flex items-center space-x-3">
              <img src={item.imgSrc} alt="profile" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">{item.pendingMonths}</p>
              </div>
            </div>
            <span className="text-red-500 font-bold text-sm">{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceList;
