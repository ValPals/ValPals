import { ChangeEventHandler } from "react";


type AboutInputProps = {
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

export default function AboutInput({ value, onChange }: AboutInputProps) {
  return (
    <div>
      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
        Add your About Me
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="about"
          id="about"
          value={value}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
    </div>
  )
}