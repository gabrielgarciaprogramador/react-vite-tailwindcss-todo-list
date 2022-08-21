import { useState } from 'React';
import Checkbox from './Checkbox';
import { 
  Trash2 as TrashIcon,
  Edit2 as EditIcon,
  X as CancelIcon
} from 'react-feather';

interface TaskProps {
  task: {
    id: number;
    categoryId: number;
    title: string;
    finished: boolean;
  }
}

function ItemTask(props: TaskProps) {

  const { task } = props;

  const [activeEditingTask, setActiveEditingTask] = useState(false);

  const initEditTask = () => {
    setActiveEditingTask(true)
  }

  const cancelEditTask = () => {
    setActiveEditingTask(false)
  }

  return (
    <div className={`flex justify-between pl-2 pr-3 py-1.5 ${activeEditingTask && "shadow-md"}`}>
      <div className="w-full flex items-center gap-2.5">
        <Checkbox value={task.finished} />
        <div className={`flex ${"w-min-32"} gap-1`}>
          {activeEditingTask ? (
            <input className="text-lg outline-none" value={task.title} type="text" />
          ) : (
            <>
              <span className={`text-lg text-neutral-700 ${task.finished && "line-through"}`}>{task.title}</span>
              <button onClick={initEditTask} className="text-neutral-300 hover:text-neutral-600 transition-colors">
                <EditIcon size={11} />
              </button>
            </>
          )}
        </div>
        {activeEditingTask ? (
          <></>
        ) : (
          <span className="bg-red text-white text-xs py-0.5 px-2 rounded-sm ml-1">{task.categoryId}</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {activeEditingTask ? (
          <button className="text-red-700 hover:opacity-70">
            <CancelIcon onClick={cancelEditTask} size={14} />
          </button>
        ) : (
          <button className="text-red-700 hover:opacity-70">
            <TrashIcon size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

export default ItemTask