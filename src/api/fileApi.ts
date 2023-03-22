import { IFileEntity } from '../models/IFileEntity';

export function getAllFiles(): Promise<Array<IFileEntity>> {
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

export function deleteFile(fileId: string | number): Promise<IFileEntity> {
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
