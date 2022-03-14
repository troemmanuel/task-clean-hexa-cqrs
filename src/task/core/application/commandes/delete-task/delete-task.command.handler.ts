import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskCommand } from './delete-task.command';
import { TaskRepositoryPort } from '../../../domain/port/task.repository.port';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskCommandHandler
  implements ICommandHandler<DeleteTaskCommand>
{
  constructor(private readonly repository: TaskRepositoryPort) {}
  async execute(command: DeleteTaskCommand): Promise<any> {
    const { id } = command;
    return await this.repository.deleteTask(id);
  }
}
