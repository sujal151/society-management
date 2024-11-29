import React from 'react';
import ComplaintList from '../../components/ComplaintList';

const CreateComplaint = () => {

  return (
    <div className='bg-white p-4 shadow-md rounded-lg mt-6 w-full h-[799px] overflow-auto'>
      <ComplaintList
        title="Create Complaint"
        showDropdown={false}
        complaintbtn="Create Complaint"
        cn="Complaint Name"
        un="Complainer Name"
        FormTitle="Create Complaint"
        deltitle="Complaint"
        viewtitle="View Complaint"
        peoplename="Complainer Name"
        peoplercname="Complaint Name"
        deletepages="Complaint "
        complainedit="Edit Complaint"
        fields={['complainerName', 'complaintName', 'description', 'unitNumber', 'priority', 'status', 'action']}
      />
    </div>
  );
};

export default CreateComplaint;
