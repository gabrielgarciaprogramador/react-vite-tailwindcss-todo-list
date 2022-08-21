import Checkbox from './Checkbox';

function ListTasks() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between">
        <div className="w-full flex items-center gap-3">
          <Checkbox />
          <span className="text-lg text-neutral-700">Nome da task</span>
          <span className="bg-red text-white text-xs py-0.5 px-2 rounded-sm relative top-0.5">Categoria 01</span>
        </div>
        <div className="">excluir</div>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex items-center gap-3">
          <Checkbox />
          <span className="text-lg text-neutral-700">Nome da task</span>
        </div>
        <div className="">excluir</div>
      </div>
    </div>
  )
}

export default ListTasks