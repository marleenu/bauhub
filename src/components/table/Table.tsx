import React, { FC } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableRowSkeleton from './TableRowSkeleton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { handleFileOrdering, selectAllFiles, selectFileStateStatus } from '../../slices/fileSlice';
import { StateStatus } from '../../models/StateStatus';

const Table: FC = () => {
  const status = useAppSelector(selectFileStateStatus);
  const files = useAppSelector(selectAllFiles);
  const dispatch = useAppDispatch();

  if (!files) return null;

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    dispatch(handleFileOrdering(result));
  };

  return (
    <table className="table-auto w-full">
      <TableHeader />
      {status === StateStatus.INITIAL && <TableRowSkeleton />}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-container">
          {(provided) => {
            return (
              <tbody ref={provided.innerRef} {...provided.droppableProps} className="divide-y">
                {status === StateStatus.FULFILLED &&
                  files.map((item, idx) => {
                    return <TableRow key={item.id} item={item} index={idx} />;
                  })}
                {provided.placeholder}
              </tbody>
            );
          }}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

export default Table;
