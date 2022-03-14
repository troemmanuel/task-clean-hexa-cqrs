import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
