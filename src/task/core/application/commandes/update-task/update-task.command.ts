import { ICommand } from '@nestjs/cqrs';

export class UpdateTaskCommand implements ICommand {
  constructor(public id: number, public payload) {}
}
