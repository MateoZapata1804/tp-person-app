import { Request, Response } from 'express';
import { PersonService } from '../services/person.service';
import { PersonDocumentParamsDto } from '../http/dto/person/person-params.dto';
import { CreatePersonDto } from '../http/dto/person/create-person.dto';
import { ApplicationError } from '../http/exceptions/user-http.exception';

const personService = new PersonService();

export async function getPersonByDocumentId(req: Request, res: Response) {
  const { idType, idNumber } = req.params as any;
  const person = await personService.getPersonByDocumentId(idType, parseInt(idNumber));

  if (person) {
    res.status(200).json(person);
  } else {
    throw new ApplicationError(
      `No se encontró a la persona según los criterios (${idType} ${idNumber})`,
      404,
    );
  }
}

export async function createPerson(req: Request, res: Response) {
  const personData = req.body;
  const newPerson = await personService.createPerson(personData).catch((err) => {
    res.status(500).json({ error: 'Error al insertar registro: ' + err.message });
  });

  res.status(201).json(newPerson);
}

export async function updatePerson(req: Request, res: Response) {
  const { idType, idNumber } = req.params as any;
  const personData = req.body;
  const updatedPerson = await personService
    .updatePerson(idType, parseInt(idNumber), personData)
    .catch((err) => {
      res.status(500).json({ error: 'Error al actualizar registro: ' + err.message });
    });

  res.status(200).json(updatedPerson);
}

export async function getPersonFromBlacklist(req: Request, res: Response) {
  const { idType, idNumber } = req.params as any;
  const person = await personService.getPersonFromBlacklist(idType, parseInt(idNumber));
  const response = {
    ...person,
    isBlacklisted: !!person,
  };

  res.status(200).json(response);
}
