import ColumnCategory from '../components/ColumnCategory';
import PanelTasks from '../components/PanelTasks';

function Home() {

  return (
    <div className="h-screen w-screen flex items-center bg-red">
        <div className="w-full max-w-[1000px] h-[70vh] flex mx-auto overflow-hidden shadow-lg shadow-rose-900 bg-white rounded-lg">
          <ColumnCategory />
          <PanelTasks />
        </div>
    </div>
  )
}

export default Home