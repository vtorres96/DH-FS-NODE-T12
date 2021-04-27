import './styles.css'

import Check from '@material-ui/icons/Check'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

function TaskList(){

  let tasks = [
    {"id": 1, "description": "descricao 1"},
    {"id": 2, "description": "descricao 2"},
    {"id": 3, "description": "descricao 3"},
    {"id": 4, "description": "descricao 4"},
    {"id": 5, "description": "descricao 5"},
  ]

  const deleteTask = (id) => {console.log(id)}
  const editTask = (id) => {console.log(id)}
  const doneTask = (id) => {console.log(id)}

  return (
    <div>
      {tasks.length ? (
        <ul className="list-tasks">
          {tasks.map(task => {        
            return <li className="list-item" key={task.id}>
              <span>{task.description}</span>
              <div>
                <Delete className="btn-icons" onClick={() => deleteTask(task.id)} />
                <Edit className="btn-icons" onClick={() => editTask(task.id)} />
                <Check className="btn-icons" onClick={() => doneTask(task.id)} />
              </div>
            </li>
          })}
        </ul>
      ) : (
        <div className="no-tasks">Não existem tarefas</div>
      )}
    </div>
  )
}

export default TaskList
