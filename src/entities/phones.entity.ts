import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity("phones")
class Phones {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;

  @ManyToMany(() => Contacts, (contacts) => contacts.phones, {
    onDelete: "CASCADE",
  })
  contacts: Contacts[];
}

export { Phones };
