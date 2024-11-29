import React, { useState } from 'react';
import DropDown from './DropDown';

const getDateRange = (timePeriod) => {
  const now = new Date();
  let startDate, endDate;

  if (timePeriod === 'lastWeek') {
    startDate = new Date(now);
    startDate.setDate(now.getDate() - 7);
    endDate = now;
  } else if (timePeriod === 'lastMonth') {
    startDate = new Date(now);
    startDate.setMonth(now.getMonth() - 1);
    endDate = now;
  } else if (timePeriod === 'lastYear') {
    startDate = new Date(now);
    startDate.setFullYear(now.getFullYear() - 1);
    endDate = now;
  }

  return { start: startDate, end: endDate };
};

const ActivityList = () => {
  const [timePeriod, setTimePeriod] = useState('lastYear');
  const { start, end } = getDateRange(timePeriod);

  const activities = [
    { title: 'Society Meeting', time: '8:00 PM to 10:00 PM', date: '2024-10-24' },
    { title: 'Holi Festival', time: '8:00 PM to 10:00 PM', date: '2024-09-24' },
    { title: 'Ganesh Chaturthi', time: '8:00 PM to 10:00 PM', date: '2024-09-24' },
    { title: 'Navratri Festival', time: '8:00 PM to 10:00 PM', date: '2024-09-24' },
  ];

  const filteredActivities = activities.filter((activity) => {
    const activityDate = new Date(activity.date);
    return activityDate >= start && activityDate <= end;
  });

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 w-full 2xl:w-[380px] h-[361px] overflow-y-auto mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-bold">Upcoming Activity</h4>
        <DropDown timePeriod={timePeriod} setTimePeriod={setTimePeriod}  />
      </div>
      <ul className="space-y-2">
        {filteredActivities.map((activity, index) => (
          <li key={index} className="flex items-center justify-between border-t pt-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold">
                {activity.title.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
