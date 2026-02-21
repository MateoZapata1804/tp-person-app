import { Repository } from 'typeorm';
import { Person } from '../../entities/person';
import { AppDataSource } from '../db';

export class PersonRepository {
  personRepo: Repository<Person>;

  constructor() {
    this.personRepo = AppDataSource.getRepository(Person);
  }

  async getPersonByDocumentId(personDocType: string, personId: number): Promise<Person | null> {
    const person = await this.personRepo.findOne({
      where: {
        idType: { id: personDocType },
        idNumber: personId,
      },
      relations: ['idType'],
    });

    return person;
  }

  async savePerson(person: Person): Promise<Person> {
    return this.personRepo.save(person);
  }
}
