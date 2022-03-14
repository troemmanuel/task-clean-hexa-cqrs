import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTasksQuery } from './get.tasks.query';
import { TaskRepositoryPort } from '../../../domain/port/task.repository.port';

@QueryHandler(GetTasksQuery)
export class GetTasksQueryHandler implements IQueryHandler<GetTasksQuery> {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(query: GetTasksQuery): Promise<any> {
    return await this.repository.getTasks();
  }
}
