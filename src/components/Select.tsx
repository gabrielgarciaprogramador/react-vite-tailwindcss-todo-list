import {useState, useEffect} from 'React';
import { ChevronDown as ChevronDownIcon } from 'react-feather';

interface SelectOptions {
  id: number;
  name: string;
}

interface ISelect {
  placeholder?: string;
  value: number | null;
  options: SelectOptions[];
  onChange: (value: number) => void;
}

function Select(props: ISelect) {
  let {options, placeholder, value} = props;

  const [visibleList, setVisibleList] = useState<boolean>(false);

  const handleVisibleList = () => {
    setVisibleList(!visibleList);
  }

  const handleOptionClick = (optionId:number) => {
    props.onChange(optionId);
    setVisibleList(false);
  }

  const identifyOption = (optionId:number | null) => {
    let option = options.map((option) => option.id);
    return optionId ? options[option.indexOf(optionId)]?.name : null;
  }

  return (
    <div className="relative z-[999]">
      <div
        className="
          py-0.5 px-2 pl-2.5 min-w-[160px] h-fit
          flex justify-between items-center
          rounded-sm text-red border border-red cursor-pointer
        "
        onClick={handleVisibleList}
      >
        <span className="text-xs">{identifyOption(value) || placeholder}</span>
        <ChevronDownIcon size={12} />
      </div>
      {visibleList && (
        <ul className="bg-red absolute w-full px-2 pl-2.5 pt-1 pb-2 gap-y-5">
          {
            options.map((option, index) => (
              <li
                className={`text-white text-xs inline-block w-full cursor-pointer hover:opacity-70 ${option.id === value && "font-bold"}`} 
                key={index}
                onClick={() => handleOptionClick(option?.id)}
              >
                {option?.name}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
}

export default Select;