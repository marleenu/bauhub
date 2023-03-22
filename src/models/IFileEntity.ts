import { FileEntityType } from './FileEntityType';

export interface IFileEntity {
  id: string | number;
  name: string;
  type: FileEntityType;
  created: Date;
  createdBy: string;
}
