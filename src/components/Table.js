import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ data }) => {
  return (
    <table className="text-primary flex flex-col flex-nowrap">
      <TableHead />
      <TableBody className="text-base" data={data} />
    </table>
  );
};

export default Table;
