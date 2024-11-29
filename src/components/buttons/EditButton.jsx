import React from 'react'
import { FaPen } from 'react-icons/fa'

const EditButton = ({onClick}) => {
    return (
        <div>
            <button className="bg-green-100 text-green-600 p-2 rounded ">
                <FaPen onClick={onClick}/>
            </button>
        </div>
    )
}

export default EditButton
