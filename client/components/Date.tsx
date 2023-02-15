
type Props = {
  date: string
}

export default function Date({ date }: Props) {
  return (
    <div className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-pink-600">
      {date}
    </div>
  );
}