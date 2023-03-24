import { IFileEntity } from '../models/IFileEntity';
import { EntityId } from '@reduxjs/toolkit';

export function fetchFiles(): Promise<Array<IFileEntity>> {
  return fetch('http://localhost:3333/list')
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('something went wrong');
      }
    })
    .then((json) => {
      return json;
    });
}

export function deleteFile(fileId: EntityId): Promise<IFileEntity> {
  return fetch(`http://localhost:3333/list/${fileId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('something went wrong');
      }
    })
    .then((json) => {
      return json;
    });
}
