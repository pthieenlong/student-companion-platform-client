import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputItemProps = {
  icon?: React.JSX.Element
  name: string
  id: string
  type: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  registerName: string
  registerOptions?: object
}

function Input(item: InputItemProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-[0.5rem] rounded-xl px-[1.25rem] py-[0.25rem] shadow">
      <label htmlFor={item.id} className="mr-2 block">
        {item.icon}
      </label>
      <input
        className="font-monserrat h-[2rem] w-[16rem] border-none py-[1.25rem]"
        type={item.type}
        id={item.id}
        placeholder={item.placeholder}
        {...item.register(item.registerName, {
          ...item.registerOptions,
        })}
      />
    </div>
  )
}

export default Input
