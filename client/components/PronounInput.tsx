import { ChangeEventHandler } from "react";

type PronounInputProps = {
  value: string,
  onSelect?: ChangeEventHandler<HTMLSelectElement>,
}

export default function PronounInput({ value, onSelect }: PronounInputProps) {
  const options: string[] = [ '(f)ae', 'e/ey', 'he', 'per', 'she', 'they', 've', 'xe', 'ze/zie' ];
  
  return (
    <div>

      <label htmlFor="pronoun" className="block text-sm font-medium text-gray-700">
        Pronouns
      </label>

      <select
        id="pronoun"
        name="pronoun"
        value={value}
        onChange={ onSelect }
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={options[1]}
      >
        {options.map((element, i)=> <option key={i} value={element}>{element}</option>)}
      </select>
    </div>
  )
}