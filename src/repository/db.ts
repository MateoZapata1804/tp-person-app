import { DataSource } from 'typeorm';
import { apiEnv } from '../config/env';
import { Person } from '../entities/person';
import { DocumentType } from '../entities/document-type';
import { PersonBlacklist } from '../entities/person-blacklist';

export const AppDataSource = new DataSource({
  type: 'mssql',
  url: apiEnv.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [Person, DocumentType, PersonBlacklist],
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
});
