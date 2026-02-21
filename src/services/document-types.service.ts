import { DocumentTypesRepository } from '../repository/person/document-types.repository';

export class DocumentTypesService {
  docTypesRepository: DocumentTypesRepository;

  constructor() {
    this.docTypesRepository = new DocumentTypesRepository();
  }

  async getAllDocumentTypes(): Promise<any[]> {
    return this.docTypesRepository.getAllDocumentTypes();
  }
}
