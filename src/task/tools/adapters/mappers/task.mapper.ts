import { TaskModel } from '../models/TaskModel';
import { Task } from '../../../core/domain/entities/task';

export class TaskMapper {
  public static toDomain(taskModel: TaskModel): Task {
    const task = new Task(taskModel.id, taskModel.title, taskModel.content);
    return task;
  }

  public static toDomains(taskModel: TaskModel[]): Task[] {
    const tasks: Task[] = taskModel.map((taskModel) =>
      this.toDomain(taskModel),
    );
    return tasks;
  }
}
