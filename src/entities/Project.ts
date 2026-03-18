import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  techStack!: string;

  @Column({ type: 'text', nullable: true })
  thumbnailUrl!: string;

  @Column({ type: 'text', nullable: true })
  liveDemoUrl!: string;

  @Column({ type: 'text', nullable: true })
  githubUrl!: string;

  @Column({ type: 'boolean', default: false })
  featured!: boolean;

  @Column({ type: 'integer', default: 0 })
  sortOrder!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
