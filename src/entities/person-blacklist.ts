import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DocumentType } from './document-type';

@Entity({ name: 'PersonBlacklist' })
@Unique('UQ_Person_Blacklist_Id', ['idType', 'idNumber'])
export class PersonBlacklist {
  @PrimaryGeneratedColumn()
  id?: number;

  @JoinColumn({ name: 'IdType' })
  @ManyToOne(() => DocumentType)
  idType: DocumentType;

  @Column({ type: 'bigint' })
  idNumber: number;

  @Column({ type: 'varchar' })
  reason?: string;
}
