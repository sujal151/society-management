import React, { useState } from 'react';
import AddButton from '../../components/buttons/AddButton';
import EditButton from '../../components/buttons/EditButton';
import ViewButton from '../../components/buttons/ViewButton';
import DeleteButton from '../../components/buttons/DeleteButton';
import DeleteForm from '../../components/Forms/DeleteForm';
import { TbPhoto } from 'react-icons/tb';
import { FaRegFileLines } from 'react-icons/fa6';
import ExpanceAddForm from '../../components/Forms/ExpanceAddForm';
import { AiFillFileImage } from 'react-icons/ai';
import ExpanceViewForm from '../../components/Forms/ExpanceViewForm'; 
const Expense = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Rent or Mortgage', description: 'A visual representation of your spending categories...', date: '2024-02-10', amount: 1000, format: 'JPG' },
    { id: 2, title: 'Housing Costs', description: 'Track the fluctuations in your spending over time...', date: '2024-02-11', amount: 1000, format: 'PDF' },
    { id: 3, title: 'Property Taxes', description: 'Easily compare your planned budget against...', date: '2024-02-12', amount: 1000, format: 'JPG' },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const [deleteExpense, setDeleteExpense] = useState(null);
  const [viewExpense, setViewExpense] = useState(null); 

  const handleAddEditExpense = (newExpense) => {
    if (editExpense) {
      setExpenses(expenses.map(expense => (expense.id === editExpense.id ? { ...editExpense, ...newExpense } : expense)));
    } else {
      setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    }
    setIsFormOpen(false);
    setEditExpense(null);
  };

  const openForm = (expense = null) => {
    setEditExpense(expense);
    setIsFormOpen(true);
  };

  const handleDeleteExpense = () => {
    setExpenses(expenses.filter(expense => expense.id !== deleteExpense.id));
    setDeleteExpense(null);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 w-full h-[799px] overflow-auto">
      <div className="flex sm:justify-between justify-center gap-3 flex-wrap items-center mb-4">
        <h4 className="text-xl font-bold">Add Expenses Details</h4>
        <AddButton Addbuttontitle="Add New Expenses Details" onClick={() => openForm()} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <ExpanceAddForm
            expense={editExpense}  // Pass the editExpense data here
            onSave={handleAddEditExpense}
            onClose={() => setIsFormOpen(false)}
          />
        </div>
      )}

      {deleteExpense && (
        <DeleteForm
          onCancel={() => setDeleteExpense(null)}
          onDelete={handleDeleteExpense}
          deltitle="Expense"
          deletepages="Expense"
        />
      )}

      {viewExpense && ( 
        <ExpanceViewForm
          expense={viewExpense}
          onCancel={() => setViewExpense(null)} 
        />
      )}

      <div className="overflow-auto w-full">
        <table className="min-w-full w-[800px] text-left border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-2">Title</th>
              <th className="py-3 px-2 text-start">Description</th>
              <th className="py-3 px-2 text-center">Date</th>
              <th className="py-3 px-2 text-center">Amount</th>
              <th className="py-3 px-2 text-center">Bill Format</th>
              <th className="py-3 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-t h-16">
                <td className="h-full px-2">{expense.title}</td>
                <td className="h-full px-2 text-start max-w-56">{expense.description}</td>
                <td className="h-full px-2 text-center">{formatDate(expense.date)}</td>
                <td className="h-full px-2 text-center text-green-700">₹ {expense.amount}</td>
                <td className="h-full px-2 text-center">
                  {expense.format === 'JPG' ? (
                    <TbPhoto className="text-blue-500 inline-block" />
                  ) : expense.format === 'PDF' ? (
                    <FaRegFileLines className="text-red-500 inline-block" />
                  ) : expense.format === 'PNG' ? (
                    <AiFillFileImage className="text-green-500 inline-block" />
                  ) : (
                    <span>Unknown</span>
                  )}
                  <span className="ml-1">{expense.format}</span>
                </td>

                <td className="h-full px-2">
                  <div className="flex items-center justify-center space-x-2">
                    <EditButton onClick={() => openForm(expense)} />
                    <ViewButton onClick={() => setViewExpense(expense)} />  {/* Set expense to view */}
                    <DeleteButton onClick={() => setDeleteExpense(expense)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expense;
