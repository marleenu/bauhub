import { FC } from 'react';
import { IFile } from '../../models/IFile';
import { IFolder } from '../../models/IFolder';
import { IContainer } from '../../models/IContainer';
import { FileEntityType } from '../../models/FileEntityType';
import { classNames, formatDate } from '../../utils/utilities';
import { Draggable } from 'react-beautiful-dnd';
import ContainerStatusIndicator from '../ContainerStatusIndicator';
import ItemLogo from '../icons/ItemLogo';
import DnDHandler from './DnDHandler';

interface Props {
  item: IFile | IFolder | IContainer;
  isSelected: boolean;
  handleCheckbox: any;
  index: number;
}

const TableRow: FC<Props> = ({ item, isSelected, handleCheckbox, index }) => {
  return (
    <Draggable draggableId={item.id as string} index={index}>
      {(provided, snapshot) => {
        return (
          <tr
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={classNames(
              isSelected && 'bg-green-300',
              snapshot.isDragging && 'opacity-40',
              'group peer relative peer-active:pointer-events-none'
            )}
            key={item.id}>
            <td className="text-center  w-1/12">
              <DnDHandler {...provided.dragHandleProps} />
              <input
                type="checkbox"
                className="mx-2"
                checked={isSelected}
                onChange={() => {
                  return '';
                }}
              />
            </td>
            <td className="w-1/12">
              <ItemLogo item={item} isSelected={isSelected} />
            </td>
            <td className="w-1/3"> {item.name} </td>
            <td className="text-center">
              {item.type === FileEntityType.CONTAINER && (
                <ContainerStatusIndicator container={item as IContainer} isSelected={isSelected} />
              )}
            </td>
            <td className="text-center w-1/6"> {'version' in item && item.version} </td>
            <td className="w-1/6">
              <div>{formatDate(item.created)}</div>
              <span>{item.createdBy}</span>
            </td>
          </tr>
        );
      }}
    </Draggable>
  );
};

export default TableRow;
