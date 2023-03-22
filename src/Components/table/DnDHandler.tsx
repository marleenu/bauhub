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
        'right-14 mx-4 w-5 pb-4 pt-3 group/ellipsis z-0 top-0 h-full group-hover:opacity-100 text-center text-sm rounded absolute bg-gray-100 transition ease-in opacity-0'
      )}>
      <FontAwesomeIcon icon={faEllipsisVertical as IconProp} size="sm" />
    </div>
  );
};

export default DnDHandler;
