const TableRow = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <input type="checkbox" />{' '}
          </td>
          <td> img {/** SIIN PEAB OLEMA KAS FOLDER VÕI PDF VMS **/} </td>
          <td> {item.name} </td>
          <td>
            {item.signedBy || item.totalSigners ? (
              <div style={{ background: 'red' }}>
                {item.status === 'DECLINED' ? <span>x</span> : <span>v</span>}
                {`${item.signedBy}/${item.totalSigners}`}
              </div>
            ) : undefined}
          </td>
          <td> {item.version} </td>
          <td>
            <div>{item.created}</div>
            <div>{item.createdBy}</div>
            {/** SIIN PEAB TIMESTAMPI SPLITTIMA **/}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
