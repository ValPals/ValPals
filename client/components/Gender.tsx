

type Props = {
  gender: string,
  color: string
}

export default function Gender({ gender, color }: Props) {
  return (
    <div className={`inline-flex items-center mr-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white ${color}`}>
      {gender}
    </div>
  );
}