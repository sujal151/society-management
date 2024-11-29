import React from 'react';
import ComplaintList from '../../components/ComplaintList';

const RequestTracking = () => {
  return (
    <div className='bg-white p-4 shadow-md rounded-lg mt-6 w-full h-[799px] overflow-auto'>
      <ComplaintList
        title="Create Complaint"
        showDropdown={false}
        cn="Request Name"
        un="Requester Name"
        FormTitle="Create Request"
        complaintbtn="Create Request"
        deltitle="Request"
        viewtitle="View Request"
        deletepages="Request "
        peoplename="Requester Name"
        peoplercname="Request Name"
        complainedit="Edit Request"
        fields={['complainerName', 'complaintName', 'description', 'date', 'unitNumber', 'priority', 'status', 'action']}
      />
    </div>
  );
};

export default RequestTracking;
