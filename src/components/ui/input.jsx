import React from "react";
import clsx from 'clsx';



export const Input = React.forwardRef(
    (
        {
            name,
            placeholder,
            value,
            onChange,
            id,
            type,
            label,
            error,
            helperText,
            variant,
            clasname,
            ...resTprop
        },
        ref,
    ) => {
        return (
            <div className="flex flex-col  text-left ml-auto mr-auto translate-y-1/2">
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    {...resTprop}
                    className={clsx(" rounded-[8px] px-[30px] py-[10px] outline-none", {
                        "w-[360px] h-[56px] bg-white border border-black mb-[20px]": variant == 'primary',
                        "w-[300px] h-[40px] outline-none rounded-[20px] px-[10px] text-xl border-2 text-center border-gray-600 mb-[10px]": variant == "secondary",
                        " w-[350px] h-[50px] outline-none rounded-[20px] px-[10px] text-xl border-2 text-center border-gray-600 mb-[10px]": variant == "third",
                        " ": variant == "smooth",
                    }, clasname)}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    type={type}

                />
                {helperText && <p className=" text-red-700 text-xs text-left mt-[-15px]">{helperText}</p>}
            </div>
        )
    })

