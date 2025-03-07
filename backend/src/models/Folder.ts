import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { File } from "./File"; // Pastikan tidak menggunakan require()

@Table({
  timestamps: true,
  tableName: "folders",
})
export class Folder extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @ForeignKey(() => Folder)
  @Column({ type: DataType.INTEGER, allowNull: true })
  parent_id?: number; // Gunakan tanda '?' agar bisa undefined

  @HasMany(() => File)
  files?: File[]; // Gunakan tanda '?' agar bisa undefined
}
