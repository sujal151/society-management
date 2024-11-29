import React, { useState } from "react";

const OtherIncomeAddForm = ({ onClose, onSave, initialData }) => {
    const [title, setTitle] = useState(initialData?.name || "");
    const [amountPerMember, setAmountPerMember] = useState(initialData?.amountPerMember || "");
    const [totalMembers, setTotalMembers] = useState(initialData?.totalMembers || "");
    const [date, setDate] = useState(initialData?.date || "");
    const [dueDate, setDueDate] = useState(initialData?.dueDate || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [amount, setAmount] = useState(initialData?.amount || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIncome = {
            id: initialData?.id || Date.now(), // Use existing ID when editing or create a new one
            name: title,
            amountPerMember: parseFloat(amountPerMember), // Ensure this is a number
            totalMembers: parseInt(totalMembers, 10),
            date,
            dueDate,
            description,
            amount: parseFloat(amount), // Include amount correctly
        };
        onSave(newIncome); // Call the onSave handler to add or update income
    };
    return (
        <div className="w-[410px] max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
                {initialData ? "Edit Income" : "Create Income"}
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="title">
                        Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                {/* Dates */}
                <div className="flex gap-4">
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium mb-1" htmlFor="date">
                            Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                    <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium mb-1" htmlFor="dueDate">
                            Due Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="description">
                        Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                {/* Amount */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="amount">
                        Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="₹ 0000"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6 gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300 py-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="w-6/12 text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] rounded-lg py-2 font-semibold"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OtherIncomeAddForm;




