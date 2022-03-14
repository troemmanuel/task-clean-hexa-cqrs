import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddTaskCommand } from './add-task.command';
import { TaskRepositoryPort } from '../../../domain/port/task.repository.port';

@CommandHandler(AddTaskCommand)
export class AddTaskCommandHandler implements ICommandHandler<AddTaskCommand> {
  constructor(private readonly repository: TaskRepositoryPort) {}
  async execute(command: AddTaskCommand): Promise<any> {
    const { payload } = command;
    return await this.repository.addTasks(payload);
  }
}
