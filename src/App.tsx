import './index.css';
import Table from './components/table/Table';
import React, { FC, useEffect } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import DeleteButton from './components/DeleteButton';
import { fetchFilesAsync, selectFileCount } from './slices/fileSlice';
import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import FileListFallback from './components/FileListFallback';
import Sidebar from './components/Sidebar';

const App: FC = () => {
  const fileCount = useAppSelector(selectFileCount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilesAsync());
  }, []);

  const fileListEmpty = fileCount === 0;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="mt-8 min-w-0 w-full justify-center xl:mx-24 lg:mx-16 md:mx-8 mx-0">
        <Breadcrumbs />
        <DeleteButton />
        {fileListEmpty && <FileListFallback />}
        {!fileListEmpty && <Table />}
      </div>
    </div>
  );
};

export default App;
