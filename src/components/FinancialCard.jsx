import React from 'react';

const FinancialCard = ({ title, amount, bordercolor,icon,textcolor,bgcolor }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md border-r-2 ${bordercolor}   flex justify-between items-center w-[380px] h-[105px]`}>
      <div>
        <h4 className="text-[16px] font-semibold text-black">{title}</h4>
        <p className="text-[26px] font-semibold mt-2">{amount}</p>
      </div>
      <div className={` ${bgcolor}  rounded-lg p-3 shadow-md`}>
        <span className={`${textcolor} text-xl`}>{icon}</span>
      </div>
    </div>
  );
};

export default FinancialCard;
