import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  handleDelete: () => void;
  enabled: boolean;
}

const DeleteButton: FC<Props> = ({ handleDelete, enabled }) => {
  return (
    <button disabled={!enabled} onClick={() => handleDelete()}>
      <FontAwesomeIcon
        className={`fa-xl my-8 ml-1 ${
          enabled ? 'text-primary' : 'text-secondary'
        } transition duration-900`}
        icon={faTrashCan as IconProp}
      />
    </button>
  );
};

export default DeleteButton;
