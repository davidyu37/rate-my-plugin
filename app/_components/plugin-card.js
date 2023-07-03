const PluginCard = ({ id, logoUrl, url, name, description, category, color }) => {
  const Option = ({ dataTip, svgPath, idSuffix }) => (
    <div className="tooltip tooltip-right" data-tip={dataTip}>
      <li className="rounded-lg">
        <label
          htmlFor={`vote-form-v23rnOdV8343tXf9oA65MnJq-${idSuffix}`}
          className="modal-button px-1 md:px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={svgPath}
            ></path>
          </svg>
        </label>
      </li>
    </div>
  );

  return (
    <div className="w-full overflow-hidden border-b-2 p-4 hover:bg-base-200 gap-1 md:gap-2 justify-between flex flex-row">
      <ul className="bg-inherit rounded-box gap-1 items-center p-0 flex-col justify-start relative">
        <Option dataTip="Yes" svgPath="M5 15l7-7 7 7" idSuffix="Yes" />
        <Option dataTip="Meh" svgPath="M19 9l-7 7-7-7" idSuffix="Meh" />
      </ul>
      <div className="divider divider-horizontal m-0" />
      <div className="w-full overflow-hidden gap-1 md:gap-2 flex flex-col md:flex-row justify-between">
        <a href="" className="flex flex-col w-full">
          <div className="text-xl leading-7">
            <div className="flex justify-between mb-2">
              <div className="inline-flex my-2 font-semibold text-lg leading-6">
                {name}
              </div>
              <div className="inline-flex">
                <div style={{backgroundColor: color ? color : 'grey'}} className="select-none px-2 py-1 mr-2 rounded-lg text-white text-sm flex items-center bg-green">
                  <span>{category}</span>
                </div>
              </div>
            </div>
            <div className="font-light text-sm">{description}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PluginCard;
