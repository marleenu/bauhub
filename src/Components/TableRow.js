import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglass } from '@fortawesome/free-regular-svg-icons';
import { Aisce, Pdf } from './Icons/Icons.js';

const TableRow = ({ documents, icon, handleCheckbox }) => {
  const dateFormat = (created) => {
    const date = new Date(created.created);
    const minute = `${date.getMinutes()}`.padStart(2, 0);
    const hour = `${date.getHours()}`.padStart(2, 0);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}.${month}.${year} ${hour}:${minute}`;
  };

  return (
    <>
      {documents.map((item) => (
        <tr className={`!flex items-center ${item.selected ? 'bg-mint' : undefined}`} key={item.id}>
          <td className="place-content-center p-2">
            <input
              className="accent-green-jungle h-5 w-5 border rounded-sm transition duration-800 cursor-pointer"
              type="checkbox"
              id={item.id}
              checked={item.selected}
              onChange={handleCheckbox}
            />
          </td>
          <td className="!flex place-content-center w-8">
            {item.type === 'CONTAINER' && <Aisce selected={item.selected} />}
            {item.type === 'FILE' && <Pdf selected={item.selected} />}
            {icon && <FontAwesomeIcon className="fa-xl" icon={icon} />}
          </td>
          <td className="basis-1/2 p-2"> {item.name} </td>
          <td className="!flex place-content-center w-28 p-2">
            {item.signedBy || item.totalSigners ? (
              <>
                {item.status === 'DECLINED' ? (
                  <span
                    className={`!flex box-content items-center justify-evenly p-1.5 w-12 text-xs place-content-center tracking wider bg-lightred rounded-sm 
                  ${item.selected ? ' border border-red-mid ' : undefined}"`}>
                    <FontAwesomeIcon className="fa-lg mr-1" icon={faCircleXmark} color="#BB2612" />
                    {item.signedBy}/{item.totalSigners}
                  </span>
                ) : (
                  <>
                    <span
                      className={`!flex box-content items-center justify-evenly p-1.5 w-12 text-xs place-content-center tracking wider  bg-warningyellow rounded-sm
                    ${item.selected ? ' border border-yellow' : undefined}`}>
                      <FontAwesomeIcon className="fa-lg mr-1" icon={faHourglass} /> {item.signedBy}/
                      {item.totalSigners}
                    </span>
                  </>
                )}
              </>
            ) : undefined}
          </td>
          <td className="!flex justify-center w-28 p-2 "> {item.version} </td>
          <td className="basis-1/6 p-2">
            <div>{dateFormat(item)}</div>
            <span className="text-xs text-secondary">{item.createdBy}</span>{' '}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
