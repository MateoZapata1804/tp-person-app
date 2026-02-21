import { Router } from 'express';
import { getAllDocumentTypes } from '../../controllers/document-types.controller';

const documentTypesRouter = Router();

documentTypesRouter.get('/document-types/list', getAllDocumentTypes);

export default documentTypesRouter;
