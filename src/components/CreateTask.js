import React, {useState} from 'react';
import './Components.css';

const CreateTask = ({save}) => {

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

    // const handleSave = () => {
    //     let taskObj = {}
    //     taskObj["Name"] = taskName;
    //     taskObj["Description"] = description;
    //     save(taskObj);        
    // }

    const handleSave = () => {
        const taskObj = {
            Name: taskName,
            Description: description,
            Time: new Date().toLocaleTimeString()
        };
        save(taskObj);       
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
            <button className='buttons-styles' onClick={handleSave}>Create</button>
        </div>
    </div>
  )
}

export default CreateTask