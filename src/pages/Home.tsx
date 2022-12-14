import TasksProvider from '../contexts/TasksContext';

import ColumnCategory from '../components/ColumnCategory';
import PanelTasks from '../components/PanelTasks';

function Home() {

  return (
    <div className="h-screen w-screen flex items-center p-5 bg-red">
        <div className="w-full max-w-[1000px] h-[70vh] flex mx-auto overflow-hidden shadow-lg shadow-rose-900 bg-white rounded-lg">
          <TasksProvider>
            <ColumnCategory />
            <PanelTasks />
          </TasksProvider>
        </div>
    </div>
  )
}

export default Home