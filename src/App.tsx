import './index.css';
import Table from './components/table/Table';
import React, { FC, useEffect, useState } from 'react';
import { IFileEntity } from './models/IFileEntity';
import { deleteFile, getAllFiles } from './api/fileApi';
import Breadcrumbs from './components/Breadcrumbs';
import DeleteButton from './components/DeleteButton';

const App: FC = () => {
  const [documents, setDocuments] = useState<Array<IFileEntity>>([]);
  const [enabled, setEnabled] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllFiles().then((res) => setDocuments(res));
    setLoading(false);
  }, []);

  const removeFile = () => {
    setLoading(true);
    //TODO
    deleteFile(1).then((res) => {
      setDocuments(documents.filter((doc) => doc.id !== res.id));
    });
    setLoading(false);
  };

  useEffect(() => {
    setEnabled(documents.length > 0);
  }, [documents]);

  const noFilesToShow = !isLoading && documents.length === 0;

  return (
    <div className="mt-8 justify-center xl:mx-96 lg:mx-44 md:mx-24 mx-0 sm:mx-8">
      <Breadcrumbs />
      <DeleteButton handleDelete={removeFile} enabled={enabled} />
      {noFilesToShow && (
        <div className="fixed inset-1/2">
          <span>
            Andmed otsas :&#39;( Kopeeri andmed failist &#39;db.json.example&#39; faili
            &#39;db.json&#39;
          </span>
        </div>
      )}
      <Table documents={documents} setDocuments={setDocuments} isLoading={isLoading} />
    </div>
  );
};

export default App;
