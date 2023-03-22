import { IFileEntity } from './IFileEntity';
import { ContainerStatus } from './ContainerStatus';

export interface IContainer extends IFileEntity {
  status: ContainerStatus;
  totalSigners: number;
  signedBy: number | string;
  version: number;
}
