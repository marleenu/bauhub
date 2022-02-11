import React, { useEffect, useState } from 'react';
import './index.css';
import Table from './components/Table';
import getAllFiles from './services/getAllFiles';

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await getAllFiles('http://localhost:3333/list');
    setData(result);
  }, []);

  return (
    <div>
      <ul className="flex-inline">
        <li>Dokumendid</li>
        <li>Hankedokumendid</li>
      </ul>
      {data && <Table data={data} />}
    </div>
  );
}

export default App;
