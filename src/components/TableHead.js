const TableHead = () => {
  return (
    <thead>
      <tr className="text-xs font-bold">
        <th className="flex-none w-14">
          <input type="checkbox"></input>
        </th>
        <th className="flex-none w-14"></th>
        <th className="flex-initial w-64"></th>
        <th className="flex-none w-14">Allkirjad</th>
        <th className="flex-none w-14">Versioon</th>
        <th className="flex-initial w-32">Uuendatud</th>
      </tr>
    </thead>
  );
};

export default TableHead;
