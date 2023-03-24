import './index.css';
import Table from './components/table/Table';
import React, { FC, useEffect } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import DeleteButton from './components/DeleteButton';
import { fetchFilesAsync, selectFileCount } from './slices/fileSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import FileListFallback from './components/FileListFallback';

const App: FC = () => {
  const fileCount = useAppSelector(selectFileCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilesAsync());
  }, []);

  const fileListEmpty = fileCount === 0;

  return (
    <div className="mt-8 justify-center xl:mx-96 lg:mx-44 md:mx-24 mx-0 sm:mx-8">
      <Breadcrumbs />
      <DeleteButton />
      {fileListEmpty && <FileListFallback />}
      {!fileListEmpty && <Table />}
    </div>
  );
};

export default App;
