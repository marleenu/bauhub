import React, { FC } from 'react';
import { FileEntityType } from '../../models/FileEntityType';
import { IFile } from '../../models/IFile';
import { IFolder } from '../../models/IFolder';
import { IContainer } from '../../models/IContainer';
import { classNames } from '../../utils/utilities';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  item: IFile | IFolder | IContainer;
  isSelected: boolean;
}
const ItemLogo: FC<Props> = ({ item, isSelected }) => {
  let classes = 'flex items-center justify-center m-2 w-8 h-8 rounded-sm ';
  let content;

  switch (item.type) {
    case FileEntityType.FILE:
      classes += ' border-red-mid bg-red-100 text-red-900 text-tiny';
      content = <span>PDF</span>;
      break;
    case FileEntityType.CONTAINER:
      classes += ' border-blue-mid bg-blue-100 text-blue-900 text-tiny';
      content = <span>ASICE</span>;
      break;
    case FileEntityType.FOLDER:
      classes += ' text-gray-400';
      content = <FontAwesomeIcon icon={faFolder as IconProp} size="lg" />;
      break;
  }

  return <div className={classNames(classes, isSelected && 'border')}>{content}</div>;
};

export default ItemLogo;
