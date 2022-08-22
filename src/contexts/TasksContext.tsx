import { useState, createContext } from 'React';
import { ITasksContext, ITasksProvider, ICategory } from '../interfaces/TasksInterfaces';

export const TasksContext = createContext<ITasksContext>({});

function TasksProvider({ children }:ITasksProvider) {

  const [categorySelected, setCategorySelected] = useState<number | null>(null);
  const [listCategory, setListCategory] = useState<ICategory[]>([
    {
      id: 1,
      title: 'Categoria 1'
    },
    {
      id: 2,
      title: 'Categoria 2'
    }
  ]);

  const selectCategory = (idCategory: number | null) => {
    setCategorySelected(idCategory);
  }

  return (
    <TasksContext.Provider
      value={{
        listCategory,
        categorySelected,
        selectCategory,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;