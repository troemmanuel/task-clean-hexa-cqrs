import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModel } from './tools/adapters/models/TaskModel';
import { TaskController } from './interfaces/controllers/task.controller';
import { DatabaseRepository } from './tools/adapters/repositories/DatabaseRepository';
import {
  addTaskCommandProvider,
  getTaskQueryProvider,
  getTasksQueryProvider,
  deleteTaskCommandProvider,
  updateTaskCommandProvider,
} from './task-core.providers';

const queryProviders = [
  getTasksQueryProvider,
  getTaskQueryProvider,
  deleteTaskCommandProvider,
  updateTaskCommandProvider,
];
const commandProviders = [addTaskCommandProvider];
@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([TaskModel])],
  controllers: [TaskController],
  providers: [DatabaseRepository, ...queryProviders, ...commandProviders],
})
export class TaskModule {}
