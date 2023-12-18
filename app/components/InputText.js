'use client'

const InputText = (props) => {
  const { type, placeholder, name, id, onChange, label, value } = props
  return (
    <>
      <b>{label}</b>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required
      />
    </>
  )
}

export default InputText
