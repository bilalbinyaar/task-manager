import React from 'react';
import './Components.css';

const TaskDetails = ({ taskObj }) => {

  return (
    <div className='create-task-modal'>
        <h4>Task Name</h4>
        <p>{taskObj.Name}</p>
        <br/>
        <h4>Description</h4>
        <p>{taskObj.Description}</p>
        <br/>
        <h4>Created At</h4>
        <p>{taskObj.Time}</p>
        <br/>
    </div>
  )
}

export default TaskDetails