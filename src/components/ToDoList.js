import React, { useEffect, useState } from 'react';
import './Components.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateTask from './CreateTask';
import TaskCards from './TaskCards';


const ToDoList = () => {
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList);
        window.location.reload();
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        handleClose();
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }



  return (
    <div className='todo-main'>
        

        <div className='todo'>
            <h2>Todo List</h2>
            <button className='buttons-styles' onClick={handleOpen}>Create Task</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateTask save={saveTask}/>
                </Box>
            </Modal>
        </div>

        <div className='tasks-wrapper'>
            <div className='tasks-wrapper-inner'>
                <h3>All Tasks</h3>
                {taskList.map((obj, index) => <TaskCards taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
        </div>
    </div>
  )
}

export default ToDoList