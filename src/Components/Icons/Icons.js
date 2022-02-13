export const Pdf = ({ selected }) => {
  return (
    <div>
      <div
        className={`flex ${
          selected ? 'border border-red-mid' : undefined
        } items-center justify-center bg-lightred w-8 h-8 text-tiny rounded-sm`}>
        <span className="text-darkred">PDF</span>
      </div>
    </div>
  );
};

export const Aisce = ({ selected }) => {
  return (
    <div>
      <div
        className={`flex ${
          selected ? ' border border-blue-mid ' : undefined
        } items-center justify-center bg-lightblue w-8 h-8 text-tiny rounded-sm`}>
        <span className="text-darkblue">AISCE</span>
      </div>
    </div>
  );
};
