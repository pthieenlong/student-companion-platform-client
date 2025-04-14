import React from 'react'

const CheckboxComponent = ({ color, title, id } : { color: string, title: string, id: string }) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setIsChecked(event.target.checked)
    console.log(isChecked);
  }
  return (
    <label htmlFor={id} className='flex items-center transition gap-2  px-[1.25rem] py-[0.15rem] rounded-2xl w-[10rem] hover:bg-black/20 hover:cursor-pointer'>
      <input type="checkbox"
        id={id} 
        onChange={handleChange}
        className={`bg-blue inline-block h-[1.5rem] w-[1.5rem]`}
        style={
          {
            accentColor: isChecked ? color : 'gray',
          }
        }
      />
      <span className='checkmark'></span>
      <span aria-hidden='true'>{title}</span>
    </label>
  )
}

export default CheckboxComponent