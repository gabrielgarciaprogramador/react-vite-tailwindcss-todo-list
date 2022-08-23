
export interface ITasksProvider {
  children: JSX.Element | JSX.Element[]
}

export interface ITasksContext {
  listCategory: ICategory[];
  categorySelected: number | null;
  selectCategory: (idCategory:number | null) => void;
  searchTask: string,
  setSearchTask: (value:string) => void;
  identifyCategory: (idCategory:number) => string | null;
  deleteTask: (idTask:number) => void;
  handleFinishedTask: (idTask: number) => void;
  listTasks: ITask[];
}

export interface ICategory {
  id: number;
  title: string;
}

export interface ITask {
  id: number;
  categoryId: number;
  title: string;
  finished: boolean;
  delete?: string | null;
  finishedDate?: string | null;
}

export interface IPropsItemTask {
  task: ITask
}
