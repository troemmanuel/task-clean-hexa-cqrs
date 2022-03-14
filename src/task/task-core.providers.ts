import { GetTasksQueryHandler } from './core/application/queries/all-tasks/get.tasks.query.handler';
import { TaskRepositoryPort } from './core/domain/port/task.repository.port';
import { DatabaseRepository } from './tools/adapters/repositories/DatabaseRepository';
import { AddTaskCommandHandler } from './core/application/commandes/add-task/add-task.command.handler';
import { GetTaskQueryHandler } from './core/application/queries/get-task/get.task.query.handler';
import { DeleteTaskCommandHandler } from './core/application/commandes/delete-task/delete-task.command.handler';
import { UpdateTaskCommandHandler } from './core/application/commandes/update-task/update-task.command.handler';

export const getTasksQueryProvider = {
  provide: GetTasksQueryHandler,
  useFactory: (repository: TaskRepositoryPort) =>
    new GetTasksQueryHandler(repository),
  inject: [DatabaseRepository],
};

export const getTaskQueryProvider = {
  provide: GetTaskQueryHandler,
  useFactory: (repository: TaskRepositoryPort) =>
    new GetTaskQueryHandler(repository),
  inject: [DatabaseRepository],
};

export const addTaskCommandProvider = {
  provide: AddTaskCommandHandler,
  useFactory: (repository: TaskRepositoryPort) =>
    new AddTaskCommandHandler(repository),
  inject: [DatabaseRepository],
};

export const deleteTaskCommandProvider = {
  provide: DeleteTaskCommandHandler,
  useFactory: (repository: TaskRepositoryPort) =>
    new DeleteTaskCommandHandler(repository),
  inject: [DatabaseRepository],
};

export const updateTaskCommandProvider = {
  provide: UpdateTaskCommandHandler,
  useFactory: (repository: TaskRepositoryPort) =>
    new UpdateTaskCommandHandler(repository),
  inject: [DatabaseRepository],
};
