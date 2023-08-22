import React from 'react'

const Task = ({task}) => {
  return (
    <div className='bg-gray-800 shadow-lg mt-2 rounded-md'>
        <div className="p-5">
            <h1 className="text-2xl font-semibold">{task.title}</h1>
            <p className='font-normal'>{task.content}</p>
            <p className='text-left mt-3'>
                Status: <span className='font-bold'>{task.status}</span>
            </p>
        </div>
    </div>
  )
}

export default Task;