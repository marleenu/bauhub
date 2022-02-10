import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ data }) => {
  return (
    <table className="min-h-screen bg-gray-100 text-gray-900">
      <TableHead />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
