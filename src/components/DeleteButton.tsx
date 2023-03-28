import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useAppDispatch, useAppSelector } from '../app/hooks/hooks';
import { deleteFileAsync, selectSelectedFileIds } from '../slices/fileSlice';
import { classNames } from '../utils/utilities';

const DeleteButton: FC = () => {
  const selectedFileIds = useAppSelector(selectSelectedFileIds);
  const dispatch = useAppDispatch();

  const anyFilesSelected = selectedFileIds.length > 0;

  const handleDelete = () => {
    // looping through selected files array, because mock server takes one path variable,
    // normally I wouldn't do this
    selectedFileIds.forEach((id) => dispatch(deleteFileAsync(id)));
  };

  return (
    <table className="my-8 w-full">
      <tbody>
        <tr>
          <td className="text-right w-1/12">
            <button disabled={!anyFilesSelected} onClick={handleDelete}>
              <FontAwesomeIcon
                className={classNames(
                  anyFilesSelected ? 'text-gray-700' : 'text-gray-300',
                  `fa-xl px-1 mr-1 transition duration-300 disabled:cursor-not-allowed`
                )}
                icon={faTrashCan as IconProp}
                size="3x"
              />
            </button>
          </td>
          <td className="w-11/12" />
        </tr>
      </tbody>
    </table>
  );
};

export default DeleteButton;
