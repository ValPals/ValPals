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
      <div className="mt-1">
        <input
          type="name"
          name="name"
          id="name"
          value= { value }
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Name"
        />
      </div>
    </div>
  )
}