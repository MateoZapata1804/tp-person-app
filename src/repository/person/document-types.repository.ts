import { Repository } from 'typeorm';
import { AppDataSource } from '../db';
import { DocumentType } from '../../entities/document-type';

export class DocumentTypesRepository {
  docTypesRepo: Repository<DocumentType>;

  constructor() {
    this.docTypesRepo = AppDataSource.getRepository(DocumentType);
  }

  async getAllDocumentTypes(): Promise<DocumentType[]> {
    return this.docTypesRepo.find();
  }
}
