
export interface ITasksProvider {
  children: JSX.Element | JSX.Element[]
}

export interface ITasksContext {
  listCategory: ICategory[];
  selectCategory: (idCategory:number | null) => void;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface ITasks {
  task: {
    id: number;
    categoryId: number;
    title: string;
    finished: boolean;
  }
}