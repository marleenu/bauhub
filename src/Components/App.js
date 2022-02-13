import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';
import { deleteFile, getAllFiles } from '../services/getAllFiles';
import Table from './Table';
import React, { useEffect, useState } from 'react';

function App() {
  const [documents, setDocuments] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const isSomeChecked = (item) => {
    const someSelected = (item) => item.selected === true;
    return item.some(someSelected);
  };

  const fetchData = async () => {
    setLoading(true);
    const result = await getAllFiles('http://localhost:3333/list');
    if (result) {
      result.forEach((d) => {
        Object.assign(d, { selected: false });
      });
      setDocuments(result);
      setLoading(false);
    } else {
      alert('Oops, error');
    }
  };

  const selected = () => {
    const newArray = [];
    documents.map((d) => {
      if (d.selected) {
        newArray.push(parseInt(d.id));
      }
    });
    return newArray;
  };

  const deleteFiles = async () => {
    setLoading(true);
    const deleteArray = selected();
    for (const f of deleteArray) {
      const result = await deleteFile(`http://localhost:3333/list/${f}`);
      console.log('deleteFiles', result);
    }
    alert(`Deleted with ID-s ${deleteArray}`);
    await fetchData();
    setLoading(false);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  useEffect(() => {
    setEnabled(isSomeChecked(documents));
  }, [documents]);

  return (
    <div className="mt-8 justify-center mx-96">
      <div>
        {' '}
        <span className="mr-2 text-secondary hover:text-primary transition duration-900">
          Dokumendid
        </span>{' '}
        <>&gt;</>
        <span className="ml-2 font-bold">Hankedokumendid</span>
      </div>
      <button disabled={!enabled} onClick={deleteFiles}>
        <FontAwesomeIcon
          className={`fa-xl my-8 ml-1 ${
            enabled ? 'text-primary' : 'text-secondary'
          } transition duration-900`}
          icon={faTrashCan}
        />
      </button>
      {!isLoading && documents.length === 0 ? (
        <div className="fixed inset-1/2">
          <span>
            Andmed otsas :&#39;( Kopeeri andmed failist &#39;db.json.example&#39; faili
            &#39;db.json&#39;
          </span>
        </div>
      ) : undefined}
      {isLoading && (
        <div className="fixed inset-1/2">
          <div className="animate ease-in-out duration-900 text-green-jungle text-2xl">
            Laadib...
          </div>
        </div>
      )}
      <Table documents={documents} setDocuments={setDocuments} />
    </div>
  );
}

export default App;
