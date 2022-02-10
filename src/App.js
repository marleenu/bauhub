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

  return <div>{data && <Table className="text-3xl font-bold underline" data={data} />}</div>;
}

export default App;
