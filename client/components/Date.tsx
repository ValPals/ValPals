
type Props = {
  date: string
}

export default function Date({ date }: Props) {
  // maybe change the color based on the 1st, 2nd, or 3rd choice?? gold / silver / bronze?
  // TODO: props is still abbreviated! need to extract to full words!
  
  return (
    <div className="inline-flex items-center mr-2 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-zinc-700">
      {date}
    </div>
  );
}