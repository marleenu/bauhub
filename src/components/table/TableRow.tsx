import { FC } from 'react';
import { IFile } from '../../models/IFile';
import { IFolder } from '../../models/IFolder';
import { IContainer } from '../../models/IContainer';
import { FileEntityType } from '../../models/FileEntityType';
import { classNames, formatDate } from '../../utils/utilities';
import { Draggable } from 'react-beautiful-dnd';
import ContainerStatusIndicator from '../ContainerStatusIndicator';
import ItemIcon from '../icons/ItemIcon';
import DnDHandler from './DnDHandler';
import { selectIsFileSelected, toggleSelected } from '../../slices/fileSlice';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';

interface Props {
  item: IFile | IFolder | IContainer;
  index: number;
}

const TableRow: FC<Props> = ({ item, index }) => {
  const isFileSelected = useAppSelector((state: RootState) => selectIsFileSelected(state, item.id));
  const dispatch = useAppDispatch();

  return (
    <Draggable draggableId={item.id as string} index={index}>
      {(provided, snapshot) => {
        return (
          <tr
            {...provided.draggableProps}
            ref={provided.innerRef}
            className={classNames(
              isFileSelected ? 'bg-green-50' : 'hover:bg-gray-50',
              snapshot.isDragging && 'opacity-40',
              'group peer relative peer-active:pointer-events-none transition ease-out duration-300'
            )}
            key={item.id}>
            <td className="text-right w-1/12">
              <DnDHandler {...provided.dragHandleProps} />
              <input
                type="checkbox"
                className="mx-2"
                checked={isFileSelected}
                onChange={() => dispatch(toggleSelected(item.id))}
              />
            </td>
            <td className="w-1/12">
              <ItemIcon item={item} isSelected={isFileSelected} />
            </td>
            <td className="w-1/3"> {item.name} </td>
            <td className="w-1/6 text-center">
              {item.type === FileEntityType.CONTAINER && (
                <ContainerStatusIndicator
                  container={item as IContainer}
                  isSelected={isFileSelected}
                />
              )}
            </td>
            <td className="text-center w-1/6"> {'version' in item && item.version} </td>
            <td className="w-1/6">
              <div>{formatDate(item.created)}</div>
              <span className="text-xs text-gray-500">{item.createdBy}</span>
            </td>
          </tr>
        );
      }}
    </Draggable>
  );
};

export default TableRow;
