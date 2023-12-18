'use client'

const InputText = (props) => {
  const { type, placeholder, name, id, onChange, label, value, regis } = props

  return (
    <div className='py-3'>
      <b>{label}</b>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`border border-gray-500 rounded-full w-full py-2 px-4 mt-3 ${
          regis && 'bg-transparent'
        }`}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  )
}

export default InputText
