import { useContext } from 'React'
import { TasksContext } from '../contexts/TasksContext'

import ItemTask from './ItemTask'

function ListTasks() {

  const { categorySelected } = useContext(TasksContext);

  const listTasks = [
    {
      id: 1,
      categoryId: 1,
      title: 'Nome da Task 01',
      finished: false,
    },
    {
      id: 2,
      categoryId: 2,
      title: 'Nome da Task 02',
      finished: true,
    },
    {
      id: 3,
      categoryId: 2,
      title: 'Nome da Task 03',
      finished: true,
    },
    {
      id: 4,
      categoryId: 1,
      title: 'Nome da Task 04',
      finished: true,
    },
    {
      id: 5,
      categoryId: 1,
      title: 'Nome da Task 05',
      finished: false,
    }
  ];

  return (
    <div className="flex flex-col gap-y-2">
      {listTasks.map((task, index) => 
        (categorySelected == null || categorySelected === task.categoryId) && (
          <ItemTask key={index} task={task} />
        )
      )}
    </div>
  )
}

export default ListTasks