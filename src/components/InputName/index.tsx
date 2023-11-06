import { IProps } from "./InputName.structure";

export default function InputName({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled = false,
  className,
}: IProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full peer block py-2.5 px-4 text-base text-slate-700 font-semibold bg-transparent ${
          disabled ? "border-gray-300" : "border-gray-400"
        } border-[1px] border-solid focus:outline-none focus:ring-0 focus:border-amber-700 ${className}`}
        placeholder=""
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="absolute text-lg px-4 text-slate-950 duration-300 transform -translate-y-8 scale-75 top-3  origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
      >
        {label}
      </label>
    </div>
  );
}
