import { ChangeEvent } from 'react'
import { Icon } from '@mdi/react'
import { mdiTrashCan } from '@mdi/js'
import React from 'react'
interface Props {
    filterTask: (filter : string) => void,
    pendingTask: number,
    deleteCompleteTask: () => void,
    numberCompletedTask: number
}
export const Footer : React.FC<Props> = ({ filterTask, pendingTask, deleteCompleteTask, numberCompletedTask }) => {
  const handleFilter = (event:ChangeEvent<HTMLSelectElement>) => {
    filterTask(event.target.value)
  }
  const handleDelete = () => {
    deleteCompleteTask()
  }
  return (
    <footer className='footer'>
      <div className='footer-elements'>
        <div className='footer-actions'>
          <select name='select' onChange={handleFilter} defaultValue='1'>
            <option value='1'>All</option>
            <option value='2'>Pending</option>
            <option value='3'>Finish</option>
          </select>
          {
        numberCompletedTask > 0 && (
          <button type='button' title='Completed task' onClick={handleDelete}> <Icon path={mdiTrashCan} size={1} /></button>
        )
      }
        </div>
        <div className='footer-count'>
          <p> <strong>{pendingTask}</strong> Tareas por completar</p>
        </div>
      </div>
    </footer>
  )
}
