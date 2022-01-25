import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn('uuid')
  uuid!: Uuid;

  @Column('varchar', { name: 'email', unique: true })
  @Index('IDX_USER_EMAIL')
  email!: Email;

  @Column('varchar', { name: 'password', select: false })
  password!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, type: 'timestamp with time zone' })
  updatedAt?: Date;
}
