import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DropDown from './DropDown';

const Graph = () => {
  const [timePeriod, setTimePeriod] = useState('lastYear');

  const dataSets = {
    lastWeek: [
      { day: 'Mon', sales: 2000 },
      { day: 'Tue', sales: 3000 },
      { day: 'Wed', sales: 4000 },
      { day: 'Thu', sales: 5000 },
      { day: 'Fri', sales: 2500 },
      { day: 'Sat', sales: 4200 },
      { day: 'Sun', sales: 3000 },
    ],
    lastMonth: [
      { week: 'Week 1', sales: 15000 },
      { week: 'Week 2', sales: 17000 },
      { week: 'Week 3', sales: 14000 },
      { week: 'Week 4', sales: 19000 },
    ],
    lastYear: [
      { month: 'Jan', sales: 30000 },
      { month: 'Feb', sales: 25000 },
      { month: 'Mar', sales: 32000 },
      { month: 'Apr', sales: 27000 },
      { month: 'May', sales: 29000 },
      { month: 'Jun', sales: 31000 },
      { month: 'Jul', sales: 33000 },
      { month: 'Aug', sales: 34000 },
      { month: 'Sep', sales: 32000 },
      { month: 'Oct', sales: 35000 },
      { month: 'Nov', sales: 36000 },
      { month: 'Dec', sales: 39000 },
    ],
  };

  const labelMap = {
    lastWeek: 'day',
    lastMonth: 'week',
    lastYear: 'month',
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 w-full 2xl:w-[780px] h-[398px]">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-bold">Total Balance</h4>

        <DropDown timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={dataSets[timePeriod]}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={labelMap[timePeriod]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
