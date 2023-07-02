import React, {useEffect, useState} from 'react';
import './Components.css';

const EditTask = ({ updateTask, taskObj}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const {name, value} = e.target;
        if (name === "taskName") {
            setTaskName(value);
        }
        else {
            setDescription(value);
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj['Name'] = taskName;
        tempObj["Description"] = description;
        updateTask(tempObj);
    }


  return (
    <div className='create-task-modal'>
        <form>
            <div className='form-group'>
                <input type='text' placeholder='Task Name' value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <div className='form-group'>
                <textarea rows="5" type='text-area' placeholder='Description' value={description} onChange={handleChange} name="description"></textarea>
            </div>
        </form>
        <div className='modal-btn'>
            <button className='buttons-styles' onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}

export default EditTask