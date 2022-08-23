import { useContext } from 'React'
import { TasksContext } from '../contexts/TasksContext'

import ItemTask from './ItemTask'

function ListTasks() {

  const { categorySelected, searchTask, listTasks } = useContext(TasksContext);

  return (
    <div className="flex flex-col gap-y-2">
      {listTasks.map((task, index) => 
        ((categorySelected == null || categorySelected === task.categoryId)
        && (searchTask == '' || task.title.toLowerCase().includes(searchTask.toLowerCase()))) && (
          <ItemTask key={index} task={task} />
        )
      )}
    </div>
  )
}

export default ListTasks