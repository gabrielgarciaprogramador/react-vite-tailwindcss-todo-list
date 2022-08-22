import { useContext } from 'React'
import { TasksContext } from '../contexts/TasksContext'

import { ICategory } from '../interfaces/TasksInterfaces';

function ColumnCategory() {

  const { listCategory, selectCategory } = useContext(TasksContext);
  
  return (
    <div className="px-10 py-5 pt-36 border-r border-slate-200 h-full flex flex-col gap-y-3 w-48">
      <span onClick={() => selectCategory(null)} className="text-md text-red-500 font-bold">Todas</span>
      {listCategory?.map((category, index) => (
        <span key={index} onClick={() => selectCategory(category.id)} className="text-md text-neutral-800 font-light hover:opacity-50">{category.title}</span>
      ))}  
    </div>
  )
}

export default ColumnCategory