import InputSearch from './InputSearch'
import ListTasks from './ListTasks'

function PanelTasks() {

  return (
    <div className="pl-11 pr-9 pb-1 h-full flex-auto">
      <div className="h-full flex flex-col justify-between">
        <div className="py-7 h-auto">
          <h1 className="font-bold text-2xl text-gray-800 mb-4">Todas as Tasks</h1>
          <InputSearch />
        </div>
        <div className="pl-2 pb-3 h-full overflow-y-scroll">
            <ListTasks />
        </div>
      </div>
    </div>
  )
}

export default PanelTasks