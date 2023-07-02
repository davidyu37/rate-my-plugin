
const PluginCard = () => {

  const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" className="w-6 h-6">
      {/* SVG paths here */}
    </svg>
  );

  const Option = ({dataTip, svgPath, idSuffix}) => (
    <div className="tooltip tooltip-right" data-tip={dataTip}>
      <li className="rounded-lg">
        <label htmlFor={`vote-form-v23rnOdV8343tXf9oA65MnJq-${idSuffix}`} className="modal-button px-1 md:px-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath}></path>
          </svg>
        </label>
      </li>
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-b-2 border-b-base-200 px-2 py-4 hover:bg-base-200 gap-1 md:gap-2 justify-between flex flex-row">
      <ul className="menu menu-compact bg-inherit rounded-box gap-1 items-center p-0 flex-col justify-start relative">
        <Option dataTip="Yes" svgPath="M5 15l7-7 7 7" idSuffix="Yes" />
        <Option dataTip="Meh" svgPath="M19 9l-7 7-7-7" idSuffix="Meh" />
        {/* Other components */}
      </ul>
    </div>
  );
}

export default PluginCard;
