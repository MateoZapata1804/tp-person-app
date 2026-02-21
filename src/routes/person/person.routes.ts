import { Router } from 'express';
import {
  createPerson,
  getPersonFromBlacklist,
  getPersonByDocumentId,
  updatePerson,
} from '../../controllers/person.controller';
import { validateDto } from '../../http/middlewares/dto-validator';
import { CreatePersonDto } from '../../http/dto/person/create-person.dto';
import { UpdatePersonDto } from '../../http/dto/person/update-person.dto';
import { PersonDocumentParamsDto } from '../../http/dto/person/person-params.dto';

const personRouter = Router();

personRouter.get(
  '/persons/:idType/:idNumber',
  validateDto(PersonDocumentParamsDto, 'params'),
  getPersonByDocumentId,
);
personRouter.post('/persons', validateDto(CreatePersonDto, 'body'), createPerson);
personRouter.patch(
  '/persons/:idType/:idNumber',
  validateDto(UpdatePersonDto, 'body'),
  validateDto(PersonDocumentParamsDto, 'params'),
  updatePerson,
);

personRouter.get(
  '/persons/blacklist/:idType/:idNumber',
  validateDto(PersonDocumentParamsDto, 'params'),
  getPersonFromBlacklist,
);

export default personRouter;
