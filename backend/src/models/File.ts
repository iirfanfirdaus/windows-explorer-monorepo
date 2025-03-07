import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Folder } from "./Folder"; // Impor langsung tanpa require()

@Table({
  timestamps: true,
  tableName: "files",
})
export class File extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  type!: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  size!: number;

  @ForeignKey(() => Folder)
  @Column({ type: DataType.INTEGER, allowNull: false })
  folder_id!: number;

  @BelongsTo(() => Folder)
  folder?: Folder; // Gunakan tanda '?' agar bisa undefined
}
