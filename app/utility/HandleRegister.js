import { useState } from 'react'
import validation from './validation'

export default function HandleRegister(props) {
  const [errors, setErrors] = useState({})
  setErrors(validation(props))
  return errors
}
