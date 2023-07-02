import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiFillEye } from 'react-icons/ai'
import EditTask from './EditTask';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TaskDetails from './TaskDetails';

const TaskCards = ({taskObj, index, deleteTask, updateListArray}) => {

    const handleDelete = () => {
        deleteTask(index);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

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

    const [view, setView] = useState(false);
    const handleView = () => setView(true);
    const handleCloseView = () => setView(false);

  return (
    <div className='task-cards-main'>
        <div className='task-cards' >
            <div className='card-top'>
                <h4 id='for-status'>{taskObj.Name}</h4>
            </div>
            <div className='task-holder'>
                <div className='task-header'>
                    <p>{taskObj.Description}</p>
                </div>

                <div className='task-footer'>
                    <AiFillEye className='task-icons' onClick={handleView}/>
                    {/* <AiOutlineCheck className='task-icons'/> */}
                    <AiFillEdit className='task-icons' onClick={handleOpen}/>
                    <AiFillDelete className='task-icons' onClick={handleDelete}/>
                </div>
            </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <EditTask updateTask={updateTask} taskObj={taskObj}/>
            </Box>
        </Modal>

        <Modal
            open={view}
            onClose={handleCloseView}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TaskDetails taskObj={taskObj}/>
            </Box>
        </Modal>
    </div>
  )
}

export default TaskCards