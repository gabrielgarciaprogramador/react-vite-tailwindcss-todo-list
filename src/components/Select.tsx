import {useState} from 'React';

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
  }

  const identifyOption = (optionId:number | null) => {
    let option = options.map((option) => option.id);
    return optionId ? options[option.indexOf(optionId)]?.name : null;
  }

  return (
    <>
      <span onClick={handleVisibleList}>
        {identifyOption(value) || placeholder}
      </span>
      {visibleList && (
        <ul>
          {
            options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option?.id)}
              >
                {option?.name}
              </li>
            ))
          }
        </ul>
      )}
    </>
  )
}

export default Select;