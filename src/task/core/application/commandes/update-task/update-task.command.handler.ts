import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TaskRepositoryPort } from '../../../domain/port/task.repository.port';
import { UpdateTaskCommand } from './update-task.command';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskCommandHandler
  implements ICommandHandler<UpdateTaskCommand>
{
  constructor(private readonly repository: TaskRepositoryPort) {}
  async execute(command: UpdateTaskCommand): Promise<any> {
    const { id, payload } = command;
    return await this.repository.updateTask(id, payload);
  }
}
