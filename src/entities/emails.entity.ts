import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity("emails")
class Emails {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  email: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @BeforeInsert()
  transformNameUpperEmailLowerCase() {
    this.email = this.email.toLocaleLowerCase();
  }

  @ManyToMany(() => Contacts, (contacts) => contacts.emails, {
    onDelete: "CASCADE",
  })
  contacts: Contacts[];
}

export { Emails };
