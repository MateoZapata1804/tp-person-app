import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'DocumentType' })
export class DocumentType {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  description: string;
}
