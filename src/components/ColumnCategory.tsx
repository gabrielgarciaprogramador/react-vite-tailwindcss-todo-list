import { useContext } from 'React'
import { TasksContext } from '../contexts/TasksContext'

function ColumnCategory() {

  const { listCategory, categorySelected } = useContext(TasksContext);
  
  return (
    <div className="px-10 py-5 pt-36 border-r border-slate-200 h-full flex flex-col gap-y-3 w-48">
      <LinkCategory
        active={categorySelected === null}
        title="Todas"
      />
      {listCategory?.map((category, index) => (
        <LinkCategory
          key={index}
          id={category.id}
          active={categorySelected === category.id}
          title={category.title}
        />
      ))}
    </div>
  )
}

function LinkCategory({id = null, title, active = false}: any) {

  const { selectCategory } = useContext(TasksContext);

  return (
    <span
      onClick={() => selectCategory(id)}
      className={
        `text-md ${active ? "text-red-500 font-bold cursor-default" : "text-neutral-800 font-light cursor-pointer hover:opacity-50"}`
      }>{title}</span>
  )
}

export default ColumnCategory