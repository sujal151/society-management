import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const DeleteButton = ({onClick}) => {
    return (
        <div>
            <button className="bg-red-100 text-red-600 p-2 rounded ">
                <FaTrashAlt onClick={onClick}/>
            </button>
        </div>
    )
}

export default DeleteButton
