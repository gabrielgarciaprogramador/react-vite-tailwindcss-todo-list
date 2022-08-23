import { useState, createContext } from 'React';
import { ITasksContext, ITasksProvider, ICategory } from '../interfaces/TasksInterfaces';

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

function TasksProvider({ children }:ITasksProvider) {

  const [categorySelected, setCategorySelected] = useState<number | null>(null);
  const [searchTask, setSearchTask] = useState<string>('');
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

  const identifyCategory  = (idCategory: number) => {
    
    let category = listCategory.find(category => category.id === idCategory);

    return category?.title || null;
  }

  return (
    <TasksContext.Provider
      value={{
        listCategory,
        categorySelected,
        selectCategory,
        searchTask,
        setSearchTask,
        identifyCategory
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;