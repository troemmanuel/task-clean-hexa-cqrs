import { TaskRepositoryPort } from '../../../core/domain/port/task.repository.port';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskModel } from '../models/TaskModel';
import { Task } from 'src/task/core/domain/entities/task';
import { Repository } from 'typeorm';
import { TaskMapper } from '../mappers/task.mapper';

@Injectable()
export class DatabaseRepository implements TaskRepositoryPort {
  constructor(
    @InjectRepository(TaskModel)
    private readonly repository: Repository<TaskModel>,
  ) {}

  async getTask(id: number): Promise<Task> {
    const task = await this.repository.findOne(id);
    return TaskMapper.toDomain(task);
  }
  async getTasks(): Promise<Task[]> {
    const tasks = await this.repository.find();
    return TaskMapper.toDomains(tasks);
  }
  async addTasks(task: { title: string; content: string }): Promise<Task> {
    const taskCreated = await this.repository.save(task);
    return TaskMapper.toDomain(taskCreated);
  }
  async updateTask(
    id: number,
    partialTask: { title?: string; content?: string },
  ): Promise<Task> {
    /*
    const preloadTask = await this.repository.preload({ id, ...partialTask });
    if (!preloadTask) throw new Error('Task not found');
    const taskUpdated = await this.repository.save(preloadTask);
     */
    await this.repository.update(id, partialTask);
    const updatedTask = await this.repository.findOne(id);
    return TaskMapper.toDomain(updatedTask);
  }
  async deleteTask(id: number): Promise<any> {
    await this.repository.delete(id);
    return `${id} was deleted successfully`;
  }
}
