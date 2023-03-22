import React, { FC } from 'react';
import { classNames } from '../../utils/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const DnDHandler: FC = (props) => {
  return (
    <div
      {...props}
      className={classNames(
        'left-0 w-5 mr-2 group/ellipsis top-0 h-full group-hover:flex items-center justify-center text-center text-sm rounded absolute bg-gray-100 transition ease-in hidden'
      )}>
      <FontAwesomeIcon icon={faEllipsisVertical as IconProp} size="sm" />
    </div>
  );
};

export default DnDHandler;
