import { Check as CheckIcon} from 'react-feather';
interface CheckboxProps {
  value: boolean;
}

function Checkbox(props: CheckboxProps) {
  return (
    <div className={`w-5 h-5 rounded-[4px] border border-red flex items-center justify-center ${props.value && "bg-red"}`}>
      {props.value && (
        <CheckIcon className="text-white" size={16} />
      )}
    </div>
  )
}

export default Checkbox