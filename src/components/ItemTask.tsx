import { useState, useContext } from 'React';
import { TasksContext } from "../contexts/TasksContext"

import Select from './Select';
import Checkbox from './Checkbox';
import { 
  Trash2 as TrashIcon,
  Edit2 as EditIcon,
  X as CancelIcon
} from 'react-feather';
import { IPropsItemTask } from '../interfaces/TasksInterfaces'

function ItemTask(props: IPropsItemTask) {

  const { task } = props;
  const { identifyCategory, deleteTask, handleFinishedTask, editTask, listCategory } = useContext(TasksContext);

  const [activeEditingTask, setActiveEditingTask] = useState(false);

  const listOptionsCategory = listCategory.map((category) => {
    return {
      id: category.id,
      name: category.title
    }
  })

  const initEditTask = () => {
    setActiveEditingTask(true)
  }

  const cancelEditTask = () => {
    setActiveEditingTask(false)
  }

  const editCategoryTask = (categoryId: number) => {
    editTask(task.id, {
      titleTask: task.title,
      categoryIdTask: categoryId,
    });
  }

  const editTitleTask = (title: string) => {
    editTask(task.id, {
      titleTask: title,
      categoryIdTask: task.categoryId,
    });
  }

  return (
    <div className={`flex justify-between pl-2 pr-3 py-1.5 ${activeEditingTask && "shadow-md"}`}>
      <div className="w-full flex items-center gap-2.5">
        <Checkbox value={task.finished} handleCheckbox={() => handleFinishedTask(task.id)} />
        <div className={`flex ${activeEditingTask && "min-w-[300px]"} gap-1`}>
          {activeEditingTask ? (
            <>
              <input className="text-lg w-full outline-none" value={task.title} onChange={(e) => editTitleTask(e.target.value)} type="text" />
              <Select value={task.categoryId} options={listOptionsCategory} onChange={(value) => { editCategoryTask(value) }} placeholder="Selecione uma categoria" />
            </>
          ) : (
            <>
              <span className={`text-lg text-neutral-700 cursor-default ${task.finished && "line-through"}`}>{task.title}</span>
              <button onClick={initEditTask} className="text-neutral-300 hover:text-neutral-600 transition-colors">
                <EditIcon size={11} />
              </button>
            </>
          )}
        </div>
        {activeEditingTask ? (
          <></>
        ) : (
          <span className="bg-red text-white text-xs py-0.5 px-2 rounded-sm ml-1">{identifyCategory(task.categoryId)}</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {activeEditingTask ? (
          <button onClick={cancelEditTask} className="text-red-700 hover:opacity-70">
            <CancelIcon size={14} />
          </button>
        ) : (
          <button onClick={() => deleteTask(task.id)} className="text-red-700 hover:opacity-70">
            <TrashIcon size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

export default ItemTask