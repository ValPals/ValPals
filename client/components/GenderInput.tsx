import { ChangeEventHandler } from "react";

type GenderInputProps = {
  choice: 'self' | 'preferred';
  value: string
  onSelect?: ChangeEventHandler<HTMLSelectElement>,
}

export default function GenderInput({ choice, value, onSelect }: GenderInputProps) {
  const options: string[] = [ 'male','female','non-binary','other' ];

  const self = 'I associate my own gender with:';
  const preferred = 'The gender I prefer in a partner is:';
  
  return (
    <div>

      <label htmlFor={choice} className="block text-sm font-medium text-gray-700">
        { choice === 'self'? self: preferred }
      </label>

      <select
        id={choice}
        name={choice}
        value={value}
        onChange={onSelect}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={options[0]}
      >
        {options.map((element, i)=> <option key={i} value={element}>{element}</option>)}
      </select>
    </div>
  )
}