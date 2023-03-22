import React, { Dispatch, FC, SetStateAction } from 'react';
import { IFileEntity } from '../../models/IFileEntity';
import { ITableHeaderArray } from '../../models/ITableHeaderArray';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableRowSkeleton from './TableRowSkeleton';

interface Props {
  documents: Array<IFileEntity>;
  setDocuments: Dispatch<SetStateAction<Array<IFileEntity>>>;
  isLoading: boolean;
}

const Table: FC<Props> = ({ documents, setDocuments, isLoading }) => {
  const handleCheckbox = (e: any) => {
    setDocuments(
      documents.map((item) => {
        if (item.id === e.target.id) {
          return { ...item, selected: e.target.checked };
        }
        return { ...item };
      })
    );
  };

  const handleMasterCheckbox = (e: any) => {
    setDocuments(
      documents.map((item) => {
        if (item !== e.target.checked) {
          return { ...item, selected: e.target.checked };
        }
        return { ...item };
      })
    );
  };

  const tableHeaderData: Array<ITableHeaderArray> = [
    {
      id: 0,
      content: (
        <input
          className="accent-green-jungle h-5 w-5 border rounded-sm transition duration-800 cursor-pointer"
          type="checkbox"
          onChange={handleMasterCheckbox}
          checked={documents.every((document) => true)}
        />
      ),
      classes: ' w-1/12 h-8 '
    },
    {
      id: 1,
      content: '',
      classes: 'w-1/12'
    },
    { id: 2, content: '', classes: ' text-start w-1/3 ' },
    { id: 3, content: 'Allkirjad', classes: ' text-center w-1/6 ' },
    { id: 4, content: 'Versioon', classes: ' text-center w-1/6 ' },
    { id: 5, content: 'Uuendatud', classes: ' text-start w-1/6 ' }
  ];

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newDocumentIds = documents.map((doc) => doc.id);
    newDocumentIds.splice(source.index, 1);
    newDocumentIds.splice(destination.index, 0, draggableId);
    setDocuments(
      newDocumentIds.map((id) => documents.find((doc) => doc.id === id) || ({} as IFileEntity))
    );
  };

  return (
    <table className="table-auto w-full">
      <TableHeader headerData={tableHeaderData} />
      {isLoading && <TableRowSkeleton />}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-container">
          {(provided) => {
            return (
              <tbody ref={provided.innerRef} {...provided.droppableProps} className="divide-y">
                {!isLoading &&
                  documents.map((item, idx) => {
                    return (
                      <TableRow
                        key={item.id}
                        item={item}
                        isSelected={false}
                        handleCheckbox={handleCheckbox}
                        index={idx}
                      />
                    );
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
