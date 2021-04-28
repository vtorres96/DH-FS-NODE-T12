import './styles.css';

import Check from '@material-ui/icons/Check'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

function Task({ task }){
  const deleteTask = (id) => {console.log(id)}
  const editTask = (id) => {console.log(id)}
  const doneTask = (id) => {console.log(id)}

  return (
    <li className="list-item" key={task.id}>
      <span>{task.description}</span>
      <div>
        <Delete className="btn-icons" onClick={() => deleteTask(task.id)} />
        <Edit className="btn-icons" onClick={() => editTask(task.id)} />
        <Check className="btn-icons" onClick={() => doneTask(task.id)} />
      </div>
    </li>
  );
}

export default Task;