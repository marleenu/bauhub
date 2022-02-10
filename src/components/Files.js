// const Files = ({ list }) => {
//   const listFiles = list.filter((item) => item.type === 'FILE');
//   return (
//     <>
//       {listFiles.map((item) => (
//         <tr key={item.id}>
//           <td>
//             {' '}
//             <input type="checkbox" />{' '}
//           </td>
//           <td> img</td>
//           <td> {item.name} </td>
//           <td>{item.signedBy || item.totalSigners ? '' + 'show' : undefined}</td>
//           <td> {item.version} </td>
//           <td>
//             {' '}
//             {item.created} {'\n'} {item.createdBy}
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// };
//
// export default Files;
