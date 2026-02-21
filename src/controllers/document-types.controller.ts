import { Request, Response } from 'express';
import { DocumentTypesService } from '../services/document-types.service';

const docTypesService = new DocumentTypesService();

export async function getAllDocumentTypes(_: Request, res: Response) {
  try {
    const docTypes = await docTypesService.getAllDocumentTypes();
    res.status(200).json(docTypes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tipos de documento' });
  }
}
