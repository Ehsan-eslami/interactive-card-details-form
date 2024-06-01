export default function Input(props) {
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label className="text-[10px] font-semibold">{props.name}</label>
      <input 
        type={props.type}
        onChange={props.func}
        placeholder={props.placeholder}
        className="px-3 py-2 border border-slate-300 w-full rounded-md"
      />
    </div>
  )
}
