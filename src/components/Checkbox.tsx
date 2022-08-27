import { useState } from 'React'
import { Check as CheckIcon} from 'react-feather'

interface ICheckbox {
  value: boolean;
  handleCheckbox: () => void;
}

function Checkbox(props: ICheckbox) {
  
  return (
    <div
      className={`
        w-5 h-5 rounded-[4px] border border-red
        flex items-center justify-center
        hover:cursor-pointer
        ${props.value && "bg-red"}`
      }
      onClick={props.handleCheckbox}
    >
      {props.value && (
        <CheckIcon className="text-white" size={16} />
      )}
    </div>
  )
}

export default Checkbox