import { Person } from '../entities/person';
import { UpdatePersonDto } from '../http/dto/person/update-person.dto';
import { ApplicationError } from '../http/exceptions/user-http.exception';
import { PersonRepository } from '../repository/person/person.repository';

export class PersonService {
  personRepository: PersonRepository;

  constructor() {
    this.personRepository = new PersonRepository();
  }

  async getPersonByDocumentId(idType: string, idNumber: number): Promise<Person | null> {
    return this.personRepository.getPersonByDocumentId(idType, idNumber);
  }

  async createPerson(person: Person): Promise<Person> {
    return this.personRepository.savePerson(person);
  }

  async updatePerson(idType: string, idNumber: number, person: UpdatePersonDto): Promise<Person> {
    const foundPerson = await this.personRepository.getPersonByDocumentId(idType, idNumber);

    if (foundPerson) {
      Object.assign(foundPerson, person);
      return this.personRepository.savePerson(foundPerson);
    } else {
      throw new ApplicationError(`Persona no encontrada: ${idType} ${idNumber}`, 404);
    }
  }

  async getPersonFromBlacklist(idType: string, idNumber: number) {
    return this.personRepository.getPersonFromBlacklist(idType, idNumber);
  }
}
