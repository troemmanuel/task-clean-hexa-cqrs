import { ICommand } from '@nestjs/cqrs';

export class DeleteTaskCommand implements ICommand {
  constructor(public id: number) {}
}
