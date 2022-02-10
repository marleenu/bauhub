import TableRow from './TableRow';

const TableBody = ({ data }) => {
  const folders = data.filter((item) => item.type === 'FOLDER');
  const containers = data.filter((item) => item.type === 'CONTAINER');
  const files = data.filter((item) => item.type === 'FILE');

  return (
    <tbody>
      <TableRow data={folders} />
      <TableRow data={containers} />
      <TableRow data={files} />
    </tbody>
  );
};

export default TableBody;
