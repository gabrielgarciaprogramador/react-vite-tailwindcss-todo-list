import { useContext, useEffect } from 'React'
import { TasksContext } from '../contexts/TasksContext'

import InputSearch from './InputSearch'
import ListTasks from './ListTasks'

function PanelTasks() {

  const { searchTask, setSearchTask } = useContext(TasksContext);

  return (
    <div className="pl-11 pr-5 pb-1 h-full flex-auto">
      <div className="h-full flex flex-col justify-between">
        <div className="py-6 pr-4 h-auto">
          <h1 className="font-bold text-2xl text-gray-800 mb-5">TODO LIST</h1>
          <InputSearch value={searchTask} onChange={setSearchTask} />
        </div>
        <div className="pl-1 pb-3 pr-4 h-full overflow-y-scroll">
            <ListTasks />
        </div>
      </div>
    </div>
  )
}

export default PanelTasks