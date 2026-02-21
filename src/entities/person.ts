import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DocumentType } from './document-type';

@Entity()
@Unique('UQ_Person_Id', ['idType', 'idNumber'])
export class Person {
  @PrimaryGeneratedColumn()
  id?: number;

  @JoinColumn({ name: 'IdType' })
  @ManyToOne(() => DocumentType)
  idType: DocumentType;

  @Column({ type: 'bigint' })
  idNumber: number;

  @Column({ type: 'varchar' })
  companyName?: string;

  @Column({ type: 'varchar' })
  firstName?: string;

  @Column({ type: 'varchar' })
  secondName?: string;

  @Column({ type: 'varchar' })
  firstLastName?: string;

  @Column({ type: 'varchar' })
  secondLastName?: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'bit' })
  authorizeCellPhoneMessages: boolean;

  @Column({ type: 'bit' })
  authorizeEmailMessages: boolean;
}
