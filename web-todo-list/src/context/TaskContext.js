import React, { createContext, useState, useEffect } from 'react'
import api from '../../services/api'
import Task from '../components/Task'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
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
    <TaskContext.Provider 
      value={{
        tasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider


