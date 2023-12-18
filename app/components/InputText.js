'use client'

const InputText = (props) => {
  const { type, placeholder, name, id, onChange, label } = props
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
        required
      />
    </>
  )
}

export default InputText
