import { FileEntityType } from './FileEntityType';
import { EntityId } from '@reduxjs/toolkit';

export interface IFileEntity {
  id: EntityId;
  name: string;
  type: FileEntityType;
  created: Date;
  createdBy: string;
}
