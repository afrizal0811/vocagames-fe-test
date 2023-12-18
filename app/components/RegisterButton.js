'use client'
import { addUser } from '@/store/slice'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

const RegisterButton = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const router = useRouter()

  const userDispatch = () => {
    const { username, phone, password, confirmPassword } = data
    if (password === confirmPassword) {
      const userData = {
        username: username,
        phone: phone,
        password: password,
      }
      dispatch(addUser(userData))
      router.push('/pages/login')
    } else alert('beda')
  }
  return (
    <>
      <button onClick={userDispatch}>Daftar Sekarang</button>
    </>
  )
}

export default RegisterButton
