import React, { FC } from 'react';
import { IContainer } from '../models/IContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ContainerStatus } from '../models/ContainerStatus';
import { classNames } from '../utils/utilities';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';

interface Props {
  container: IContainer;
  isSelected: boolean;
}

const ContainerStatusIndicator: FC<Props> = ({ container, isSelected }) => {
  let classes =
    ' items-center shadow-sm rounded justify-center text-center max-w-min h-8 flex gap-x-2 justify-evenly p-1.5 text-xs rounded-full ';
  let icon;
  if (container.status === ContainerStatus.DECLINED) {
    classes += ' text-red-600 bg-red-100 ';
    icon = faCircleXmark;
  }

  if (container.status === ContainerStatus.SIGNING) {
    classes += ' text-amber-600  bg-yellow-100 ';
    icon = faHourglass;
  }

  return (
    <div>
      <div className={classNames(isSelected && 'outline outline-white', classes)}>
        <FontAwesomeIcon icon={icon as IconProp} /> {container.signedBy}/{container.totalSigners}
      </div>
    </div>
  );
};

export default ContainerStatusIndicator;
