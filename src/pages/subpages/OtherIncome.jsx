import React, { useState, useRef, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import AddButton from "../../components/buttons/AddButton";
import { Link, useLocation } from "react-router-dom";
import OtherIncomeAddForm from "../../components/Forms/OtherIncomeAddForm";
import DeleteForm from "../../components/Forms/DeleteForm";

const OtherIncome = () => {
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [popupOpen, setPopupOpen] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedIncome, setSelectedIncome] = useState(null);
    const [incomes, setIncomes] = useState([
        {
            id: 1,
            name: "Ganesh Chaturthi",
            amount: 1500,
            totalMembers: 12,
            date: "2024-07-01",
            dueDate: "2024-07-10",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.",
        },
        {
            id: 2,
            name: "Navratri",
            amount: 1500,
            totalMembers: 12,
            date: "2024-07-01",
            dueDate: "2024-07-10",
            description: "The celebration of Navratri involves installation of clay idols of Durga in Resident.",
        },
        {
            id: 3,
            name: "Diwali",
            amount: 1500,
            totalMembers: 12,
            date: "2024-07-01",
            dueDate: "2024-07-10",
            description: "The celebration of Diwali involves the installation of clay idols of Lakshmi in homes.",
        },
    ]);

    const location = useLocation();
    const popupRef = useRef(null);

    // Helper function to format dates
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPopupOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleAddIncome = (newIncome) => {
        if (isEditing) {
            setIncomes((prevIncomes) =>
                prevIncomes.map((income) =>
                    income.id === newIncome.id ? newIncome : income
                )
            );
        } else {
            setIncomes((prevIncomes) => [
                ...prevIncomes,
                { id: prevIncomes.length + 1, ...newIncome },
            ]);
        }
        setShowAddForm(false);
        setIsEditing(false);
        setSelectedIncome(null);
    };

    const handleEditIncome = (income) => {
        setSelectedIncome(income);
        setIsEditing(true);
        setShowAddForm(true);
    };

    const handleDeleteIncome = () => {
        setIncomes((prevIncomes) =>
            prevIncomes.filter((income) => income.id !== selectedIncome.id)
        );
        setShowDeleteForm(false);
        setSelectedIncome(null);
    };

    return (
        <div>
            <div className="shadow-md rounded-t-lg mt-6 w-64 border-b-2 border-b-[#fc6d25] flex justify-between">
                <Link
                    to="/financial-management/income"
                    className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === "/financial-management/income" ? "bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white" : "bg-white"}`}
                >
                    Maintenance
                </Link>
                <Link
                    to="/financial-management/other-income"
                    className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === "/financial-management/other-income" ? "bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white" : "bg-white"}`}
                >
                    Other Income
                </Link>
            </div>

            <div className="bg-white p-4 shadow-md rounded-b-lg w-full h-[799px] overflow-auto">
                <div className="flex justify-center items-center mb-6 flex-wrap sm:justify-between gap-3">
                    <h4 className="text-2xl font-semibold">Other Income</h4>
                    <AddButton
                        Addbuttontitle="Create Other Income"
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg font-bold"
                        onClick={() => setShowAddForm(true)}
                    />
                </div>

                {showAddForm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <OtherIncomeAddForm
                            onClose={() => {
                                setShowAddForm(false);
                                setIsEditing(false);
                                setSelectedIncome(null);
                            }}
                            onSave={handleAddIncome}
                            initialData={isEditing ? selectedIncome : null}
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-4 rounded-lg">
                    {incomes.map((income) => (
                        <div key={income.id} className="py-3 w-[370px] shadow-md rounded-lg relative text-sm bg-white">
                            <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
                                <h5>{income.name}</h5>
                                <button onClick={() => setPopupOpen(income.id === popupOpen ? null : income.id)}>
                                    <HiDotsVertical />
                                </button>
                                {popupOpen === income.id && (
                                    <div ref={popupRef} className="absolute right-5 top-12 mt-2 bg-white border text-black rounded-lg shadow-lg z-10 text-sm">
                                        <button className="pe-5 ps-2 py-1 pt-2 text-left" onClick={() => handleEditIncome(income)}>
                                            Edit
                                        </button><br />
                                        <Link to="/financial-management/other-income/maintenance-details">
                                            <button className="pe-5 ps-2 py-1 text-left">View</button><br />
                                        </Link>
                                        <button className="pe-5 ps-2 py-1 pb-2 text-left" onClick={() => {
                                            setSelectedIncome(income);
                                            setShowDeleteForm(true);
                                            setPopupOpen(null);
                                        }}>
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="px-3">
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-500">Amount</p>
                                    <p className="bg-blue-100 text-blue-600 p-1 rounded-full px-2">₹ {income.amount}</p>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-500">Total Members</p>
                                    <p>{income.totalMembers}</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-500">Date</p>
                                    <p>{formatDate(income.date)}</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-500">Due Date</p>
                                    <p>{formatDate(income.dueDate)}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-gray-500">Description</p>
                                    <p className="pt-1">{income.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showDeleteForm && selectedIncome && (
                <DeleteForm
                    onCancel={() => setShowDeleteForm(false)}
                    onDelete={handleDeleteIncome}
                    deltitle={selectedIncome.name}
                    deletepages="income"
                />
            )}
        </div>
    );
};

export default OtherIncome;
