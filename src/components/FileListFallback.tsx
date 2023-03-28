import React, { FC } from 'react';
import PrimaryButton from './PrimaryButton';
import { useAppDispatch } from '../app/hooks/hooks';
import { fetchFilesAsync } from '../slices/fileSlice';

const FileListFallback: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="w-full text-xl text-center">No files to show</div>
      <div className="w-full justify-center flex">
        <PrimaryButton onClick={() => dispatch(fetchFilesAsync())}>Reload</PrimaryButton>
      </div>
    </div>
  );
};

export default FileListFallback;
