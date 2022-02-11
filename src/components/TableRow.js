import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglass } from '@fortawesome/free-regular-svg-icons';

const TableRow = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="flex-none w-14">
            <input type="checkbox" />{' '}
          </td>
          <td className="flex-none w-14"> img {/** SIIN PEAB OLEMA KAS FOLDER VÕI PDF VMS **/} </td>
          <td className="flex-initial w-64"> {item.name} </td>
          <td className="flex-none w-14">
            {item.signedBy || item.totalSigners ? (
              <>
                {item.status === 'DECLINED' ? (
                  <span className="p-1.5 text-xs tracking wider bg-errorred">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    {item.signedBy}/{item.totalSigners}
                  </span>
                ) : (
                  <>
                    <span className="p-1.5 text-xs tracking wider bg-warningyellow">
                      <FontAwesomeIcon icon={faHourglass} /> {item.signedBy}/{item.totalSigners}
                    </span>
                  </>
                )}
              </>
            ) : undefined}
          </td>
          <td className="flex-none w-14 text-xs"> {item.version} </td>
          <td className="flex-initial w-32">
            <div>{item.created} </div>
            <span className="text-xs text-secondary">{item.createdBy}</span>{' '}
            {/** SIIN PEAB TIMESTAMPI SPLITTIMA **/}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
