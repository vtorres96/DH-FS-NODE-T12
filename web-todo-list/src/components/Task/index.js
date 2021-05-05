import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

import './styles.css';

import Check from '@material-ui/icons/Check'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

function Task({ task }){
  const { deleteTask, findTaskById, doneTask } = useContext(TaskContext)

  return (
    <li className="list-item" key={task.id}>
      <span>{task.description}</span>
      <div>
        <Delete className="btn-icons" onClick={() => deleteTask(task.id)} />
        <Edit className="btn-icons" onClick={() => findTaskById(task.id)} />
        <Check className="btn-icons" onClick={() => doneTask(task.id)} />
      </div>
    </li>
  );
}

export default Task;