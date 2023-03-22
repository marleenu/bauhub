import React, { FC } from 'react';
import { IContainer } from '../models/IContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglass } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ContainerStatus } from '../models/ContainerStatus';

interface Props {
  container: IContainer;
  isSelected: boolean;
}

const ContainerStatusIndicator: FC<Props> = ({ container, isSelected }) => {
  return (
    <>
      {container.status === ContainerStatus.DECLINED ? (
        <span
          className={`box-content text-red-700  items-center justify-evenly p-1.5 w-12 text-xs place-content-center tracking wider bg-red-100 rounded-sm 
                  ${isSelected && ' border '}"`}>
          <FontAwesomeIcon className="fa-lg mr-1" icon={faCircleXmark as IconProp} />
          {container.signedBy}/{container.totalSigners}
        </span>
      ) : (
        <>
          <span
            className={`box-content items-center text-amber-600 justify-evenly p-1.5 w-12 text-xs place-content-center tracking wider  bg-yellow-100 rounded-sm
                    ${isSelected && ' border '}`}>
            <FontAwesomeIcon className="fa-lg mr-1" icon={faHourglass as IconProp} />{' '}
            {container.signedBy}/{container.totalSigners}
          </span>
        </>
      )}
    </>
  );
};

export default ContainerStatusIndicator;
