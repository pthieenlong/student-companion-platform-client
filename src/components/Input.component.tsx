import React from "react"

type InputProps = {
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "time"
  label?: string | React.JSX.Element
  placeholder?: string
  error?: string
  name: string
  id: string
  className?: string
  step?: number
  min?: number
  max?: number
  required?: boolean
  value?: string | number
}

const InputComponent = ({
  name,
  id,
  type,
  label,
  placeholder,
  error,
  className,
  required,
  step,
  min,
  max,
  value,
}: InputProps) => {
  const [inputValue, setValue] = React.useState(value || "")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2">
        {label && (
          <label className="max-w-[5rem]" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          name={name}
          id={id}
          className={
            `mt-1 block w-full border ${error ? "border-red-500" : "border-gray-300"} font-monserrat rounded-md px-[1.25rem] py-[0.25rem] shadow-sm` +
            className
          }
          required={required}
          step={step}
          min={min}
          max={max}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default InputComponent
