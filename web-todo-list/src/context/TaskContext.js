import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const [editItem, setEditItem] = useState(null)

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

  const addTask = async (title, description) => {
    try {
      const { data } = await api.post('/api/task/create', {
        title,
        description
      })
      setTasks([...tasks, data])
    } catch (error) {
      console.log('Ocorreu um erro ao adicionar a tarefa: ' + error)
    }
  }

  const editTask = async (id, title, description) => {
    await api.put('/api/task/update/' + id, {
      title, description
    })
    setEditItem(null)
  }

  const deleteTask = async (id) => {
    try {
      await api.delete('/api/task/delete/' + id)
      const newTasks = tasks.filter(task => task.id !== id)
      setTasks(newTasks)
    } catch (error) {
      console.log('Ocorreu um erro ao excluir a tarefa: ' + error)
    }
  }

  const doneTask = async (id) => {
    try {
      await api.put('/api/task/update/' + id, { 
        done: true
      })
      const newTasks = tasks.filter(task => task.id !== id)
      setTasks(newTasks)
    } catch (error) {
      console.log('Ocorreu um erro ao concluir a tarefa: ' + error)
    }
  }

  const findTaskById = async (id) => {
    try {
      const { data } = await api.get('/api/task/get-by-id/' + id)
      setEditItem(data)
    } catch (error) {
      console.log('Ocorreu um erro ao obter o registro ' + error)
    }
  }

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        deleteTask,
        findTaskById,
        doneTask,
        addTask,
        editItem,
        editTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider


