import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from '@/entities/Project';
import { Skill } from '@/entities/Skill';
import { ContactMessage } from '@/entities/ContactMessage';
import path from 'path';

const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.resolve('./data/portfolio.sqlite');

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: dbPath,
    entities: [Project, Skill, ContactMessage],
    synchronize: true,
    logging: false,
  });

  await dataSource.initialize();
  return dataSource;
}
