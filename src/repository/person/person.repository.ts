import { Repository } from 'typeorm';
import { Person } from '../../entities/person';
import { AppDataSource } from '../db';
import { PersonBlacklist } from '../../entities/person-blacklist';

export class PersonRepository {
  personRepo: Repository<Person>;
  blacklistRepo: Repository<PersonBlacklist>;

  constructor() {
    this.personRepo = AppDataSource.getRepository(Person);
    this.blacklistRepo = AppDataSource.getRepository(PersonBlacklist);
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

  async getPersonFromBlacklist(personDocType: string, personId: number): Promise<PersonBlacklist | null> {
    const blacklistedPerson = await this.blacklistRepo.findOne({
      where: {
        idType: { id: personDocType },
        idNumber: personId,
      },
      relations: ['idType'],
    });

    return blacklistedPerson;
  }
}
