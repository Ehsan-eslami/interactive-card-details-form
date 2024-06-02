import React from 'react';

interface InputProps {
  name: string;
  type: string;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errors?: string;
}

const Input: React.FC<InputProps> = ({ name, type, func, placeholder, errors }) => {
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <label className="text-[10px] font-semibold">{name}</label>
      <input 
        type={type}
        onChange={func}
        placeholder={placeholder}
        className="px-3 py-2 border border-slate-300 w-full rounded-md"
      />
      {errors && <p className="text-red-500 text-xs">{errors}</p>}
    </div>
  );
}

export default Input;
