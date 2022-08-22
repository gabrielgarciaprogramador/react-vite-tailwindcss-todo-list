
function InputSearch({value, onChange}:any) {
  
  return (
    <input
      className="
        w-full bg-neutral-100 border-none outline-none
        py-2.5 px-5 text-sm rounded-md text-neutral-500 
        placeholder:text-neutral-300 placeholder:font-light
      "
      type="text"
      placeholder="Pesquise por uma task"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default InputSearch