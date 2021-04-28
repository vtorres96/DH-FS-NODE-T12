import React, { useState, useEffect } from 'react'
import Task from '../Task'
import api from '../../services/api'
import './styles.css'

function TaskList(){
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function getTasks(){
      try {
        const { data } = await api.get('/api/task/list')
        setTasks(data)
      } catch (error) {
        console.log('Ocorreu um erro ao efetuar requisição' + error)
      }
    }
    getTasks()
  }, [])

  return (
    <div>
      {tasks.length ? (
        <ul className="list-tasks">
          {tasks.map(task => {        
            return <Task key={task.id} task={task}/>
          })}
        </ul>
      ) : (
        <div className="no-tasks">Não existem tarefas</div>
      )}
    </div>
  )
}

export default TaskList
