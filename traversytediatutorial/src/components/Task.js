import { FaTimes } from 'react-icons/fa'

const Task = ({key, task, onDelete, onToggle}) => {
  return (
    <div key={key} onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor:'pointer' }}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
