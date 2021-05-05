import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

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

  const findTaskById = async (id) => {
    try {
      const { data } = await api.get('/api/task/get-by-id/' + id)
      console.log(data)
    } catch (error) {
      console.log('Ocorreu um erro ao obter o registro ' + error)
    }
  }

  const deleteTask = (id) => {console.log(id)}

  const doneTask = (id) => {console.log(id)}

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        deleteTask,
        findTaskById,
        doneTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider


