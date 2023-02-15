

type Props = {
  pronoun: string
}

export default function Pronoun({ pronoun }: Props) {
  return (
    <div className="inline-flex items-center mr-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-700">
      {pronoun}
    </div>
  );
}