import { useState, useEffect, createContext } from 'React';
import { ITasksContext, ITasksProvider, ITask, ICategory } from '../interfaces/TasksInterfaces';

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

function TasksProvider({ children }:ITasksProvider) {

  const [categorySelected, setCategorySelected] = useState<number | null>(null);
  const [searchTask, setSearchTask] = useState<string>('');
  const [editingTask, setEditingTask] = useState<number | null>(null);
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

  const [listTasks, setListTasks ] = useState<ITask[]>([
    {
      id: 1,
      categoryId: 1,
      title: 'Nome da Task 01',
      finished: false,
    },
    {
      id: 2,
      categoryId: 2,
      title: 'Nome da Task 02',
      finished: true,
    },
    {
      id: 3,
      categoryId: 2,
      title: 'Nome da Task 03',
      finished: true,
    },
    {
      id: 4,
      categoryId: 1,
      title: 'Nome da Task 04',
      finished: true,
    },
    {
      id: 5,
      categoryId: 1,
      title: 'Nome da Task 05',
      finished: false,
    }
  ])

  useEffect(() => {
    setEditingTask(null);
  }, [searchTask])

  const selectCategory = (idCategory: number | null) => {
    setCategorySelected(idCategory);
  }

  const identifyCategory  = (idCategory: number) => {
    let category = listCategory.find(category => category.id === idCategory);
    return category?.title || null;
  }

  const deleteTask = (idTask: number) => {
    let listTaskTemp = listTasks.map((task) => {
      return {
        ...task,
        delete: task.id === idTask ? "2022-08-23" : task?.delete
      }
    });
    setListTasks(listTaskTemp);
  }

  const handleFinishedTask = (idTask: number) => {
    let listTaskTemp = listTasks.map((task) => {
      return {
        ...task,
        finished: task.id === idTask ? !task?.finished : task?.finished,
        finishedDate: task.id === idTask ? (!task?.finished ? "2022-08-23" : null) : task?.finishedDate
      }
    });
    setListTasks(listTaskTemp);
  }

  const editTask = (idTask: number, {titleTask, categoryIdTask}:any) => {
    let listTaskTemp = listTasks.map((task) => {
      return task.id == idTask ? {...task, title: titleTask, categoryId: categoryIdTask} : task;
    })

    setListTasks(listTaskTemp);
  }

  return (
    <TasksContext.Provider
      value={{
        listCategory,
        categorySelected,
        selectCategory,
        searchTask,
        setSearchTask,
        identifyCategory,
        listTasks,
        deleteTask,
        editTask,
        editingTask,
        setEditingTask,
        handleFinishedTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;