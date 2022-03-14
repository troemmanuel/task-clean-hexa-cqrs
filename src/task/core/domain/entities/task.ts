import { TaskMustHaveIdException } from '../exceptions/task.must.have.id.exception';

export class Task {
  private readonly id: number;
  private readonly title: string;
  private readonly content: string;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.validate();
  }

  get getId(): number {
    return this.id;
  }

  get getTitle(): string {
    return this.title;
  }

  get getContent(): string {
    return this.content;
  }

  private validate(): void {
    if (this.id === null || undefined)
      throw new TaskMustHaveIdException('This task is not valid !');
  }
}
