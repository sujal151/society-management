import React from 'react';
import { FaEye } from 'react-icons/fa';

const ViewButton = ({ onClick }) => { 
    return (
        <div>
            <button className="bg-blue-100 text-blue-600 p-2 rounded " onClick={onClick}>
                <FaEye />
            </button>
        </div>
    );
}

export default ViewButton;
