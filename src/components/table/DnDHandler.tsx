import React, { FC } from 'react';
import { classNames } from '../../utils/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons/faGripVertical';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const DnDHandler: FC = (props) => {
  return (
    <div
      {...props}
      className={classNames(
        'left-0 w-6 mr-2 group/ellipsis top-0 h-full group-hover:flex items-center justify-center absolute hidden'
      )}>
      <FontAwesomeIcon
        className="w-4 h-4 text-xs text-gray-400 text-center transition ease-in"
        icon={faGripVertical as IconProp}
        size="xs"
      />
    </div>
  );
};

export default DnDHandler;
