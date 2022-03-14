import { ICommand } from '@nestjs/cqrs';

export class AddTaskCommand implements ICommand {
  constructor(public readonly payload) {}
}
