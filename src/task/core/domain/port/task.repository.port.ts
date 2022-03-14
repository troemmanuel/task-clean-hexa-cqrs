import { Task } from '../entities/task';

type AddTask = {
  title: string;
  content: string;
};

type TaskResource = {
  id: number;
  title: string;
  content: string;
};

type PartialTask = {
  title?: string;
  content?: string;
};

export interface TaskRepositoryPort {
  getTask(id: number): Promise<Task>;
  getTasks(): Promise<Task[]>;
  addTasks(task: AddTask): Promise<Task>;
  updateTask(id: number, partialTask: PartialTask): Promise<Task>;
  deleteTask(id: number): Promise<Task>;
}
