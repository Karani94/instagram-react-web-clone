import React, { useState, useEffect } from "react";

export default function Input({ type, label, ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);

  return (
    <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
      <input
        type={inputType}
        required={true}
        className="px-2 outline-none text-xs w-full h-[38px] valid:pt-[10px] peer"
        {...props}
      />
      <small
        className="absolute top-1/2 left-[9px] text-gray-400 text-xs cursor-text pointer-events-none -translate-y-1/2 transition-all 
      peer-valid:text-[10px] peer-valid:top-2.5"
      >
        {label}
      </small>
      {type === "password" && props?.value && (
        <div
          type="button"
          onClick={() => setShow((show) => !show)}
          className="h-full cursor-pointer select-none flex items-center text-sm bg-white font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}
