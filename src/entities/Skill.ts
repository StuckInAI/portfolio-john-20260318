import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  category!: string;

  @Column({ type: 'integer', default: 50 })
  proficiencyLevel!: number;

  @Column({ type: 'text', nullable: true })
  iconUrl!: string;

  @Column({ type: 'integer', default: 0 })
  sortOrder!: number;
}
