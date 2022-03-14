import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTaskQuery } from './get.tasks.query';
import { TaskRepositoryPort } from '../../../domain/port/task.repository.port';

@QueryHandler(GetTaskQuery)
export class GetTaskQueryHandler implements IQueryHandler<GetTaskQuery> {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(query: any): Promise<any> {
    const { id } = query;
    return await this.repository.getTask(id);
  }
}
