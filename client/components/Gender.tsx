

type Props = {
  gender: string
}

export default function Gender({ gender }: Props) {
  return (
    <div className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-purple-600">
      {gender}
    </div>
  );
}