import { faFolder } from '@fortawesome/free-solid-svg-icons';
import TableRow from './TableRow';

const Table = ({ documents, setDocuments }) => {
  const containers = documents.filter((item) => item.type === 'CONTAINER');
  const files = documents.filter((item) => item.type === 'FILE');
  const folders = documents.filter((item) => item.type === 'FOLDER');

  const handleCheckbox = (e) => {
    setDocuments(
      documents.map((item) => {
        if (item.id === e.target.id) {
          return { ...item, selected: e.target.checked };
        }
        return { ...item };
      })
    );
  };

  const handleMasterCheckbox = (e) => {
    setDocuments(
      documents.map((item) => {
        if (item.selected !== e.target.checked) {
          return { ...item, selected: e.target.checked };
        }
        return { ...item };
      })
    );
  };

  return (
    <table className="w-full !flex">
      <tbody className="w-full !flex flex-col divide-y divide-lightgray">
        <tr className="!flex text-xs font-bold">
          <td className="place-content-center p-2 ">
            <input
              className="accent-green-jungle h-5 w-5 border rounded-sm transition duration-800 cursor-pointer"
              type="checkbox"
              onChange={handleMasterCheckbox}
              checked={documents.every((document) => document?.selected === true)}
            />
          </td>
          <td className="!flex place-content-center w-8">{''}</td>
          <td className="basis-1/2 p-2">{''}</td>
          <td className="!flex place-content-center w-28 p-2">Allkirjad</td>
          <td className="!flex justify-center w-28 p-2 ">Versioon</td>
          <td className="basis-1/6 p-2">Uuendatud</td>
        </tr>
        <TableRow documents={folders} icon={faFolder} handleCheckbox={handleCheckbox} />
        <TableRow documents={containers} handleCheckbox={handleCheckbox} />
        <TableRow documents={files} handleCheckbox={handleCheckbox} />
      </tbody>
    </table>
  );
};

export default Table;
