import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetTasksQuery } from '../../core/application/queries/all-tasks/get.tasks.query';
import { AddTaskCommand } from '../../core/application/commandes/add-task/add-task.command';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GetTaskQuery } from '../../core/application/queries/get-task/get.tasks.query';
import { DeleteTaskCommand } from '../../core/application/commandes/delete-task/delete-task.command';
import { UpdateTaskCommand } from '../../core/application/commandes/update-task/update-task.command';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async getTasks() {
    return await this.queryBus.execute(new GetTasksQuery());
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getTask(@Param('id') id: number) {
    return await this.queryBus.execute(new GetTaskQuery(id));
  }

  @Post('/add')
  @HttpCode(HttpStatus.CREATED)
  async addTask(@Body() task: any) {
    return await this.commandBus.execute(new AddTaskCommand(task));
  }

  @Patch('/update/:id')
  @HttpCode(HttpStatus.OK)
  updateTask(@Param('id') id: number, @Body() partialTask) {
    return this.commandBus.execute(new UpdateTaskCommand(id, partialTask));
  }

  @Delete('/delete/:id')
  @HttpCode(HttpStatus.OK)
  deleteTask(@Param('id') id: number) {
    return this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
