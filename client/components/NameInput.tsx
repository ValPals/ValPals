import { ChangeEventHandler } from "react";

type NameInputProps = {
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

export default function NameInput({ value, onChange}: NameInputProps) {
  return (
    <div>
      {/* Label */}
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>

      {/* Input Field */}
      <div className="mt-1 text-zinc-700">
        <input
          type="name"
          name="name"
          id="name"
          value= { value }
          onChange={onChange}
          className="block w-full rounded-md text-slate-200 border-gray-300 text- shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Name"
        />
      </div>
    </div>
  )
}