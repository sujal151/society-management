import React, { useState } from 'react';
import AddButton from './buttons/AddButton';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import NumberAddForm from './Forms/NumberAddForm';
import DeleteForm from './Forms/DeleteForm';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', work: 'Developer' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', work: 'Designer' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);

  const addOrUpdateContact = (newContact) => {
    let updatedContacts;
    if (newContact.id) {
      updatedContacts = contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      );
    } else {
      const newId = Date.now(); 
      updatedContacts = [...contacts, { ...newContact, id: newId }];
    }

    setContacts(updatedContacts);
    setIsModalOpen(false);
  };

  const openDeleteModal = (contact) => {
    setContactToDelete(contact);
    setIsDeleteModalOpen(true);
  };

  const deleteContact = () => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactToDelete.id);
    setContacts(updatedContacts);
    setIsDeleteModalOpen(false);
  };

  const openEditModal = (contact) => {
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 overflow-y-auto w-full 2xl:w-[380px] h-[398px]">
      <div className='flex justify-between items-center'>
        <h4 className="text-[20px] font-bold ">Important Numbers</h4>
        <AddButton Addbuttontitle={"Add"} onClick={() => {
          setCurrentContact(null);
          setIsModalOpen(true);
        }} />
      </div>
      <ul className="space-y-3">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex justify-between items-center border-b py-2">
            <div className="flex flex-col">
              <div className="text-[13px] text-gray-600"><span className='text-black'>Name:</span> {contact.name}</div>
              <div className="text-[13px] text-gray-600"><span className='text-black'>Ph Number:</span> {contact.phone}</div>
              <div className="text-[13px] text-gray-600"><span className='text-black'>Work:</span> {contact.work}</div>
            </div>
            <div className="flex gap-3">
              <DeleteButton onClick={() => openDeleteModal(contact)} />
              <EditButton onClick={() => openEditModal(contact)} />
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <NumberAddForm
          onClose={() => setIsModalOpen(false)}
          onAddEdit={addOrUpdateContact}
          contact={currentContact}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteForm
          onCancel={() => setIsDeleteModalOpen(false)}
          onDelete={deleteContact}
          deltitle='Number'
          deletepages="Number "
        />
      )}
    </div>
  );
};

export default ContactList;
