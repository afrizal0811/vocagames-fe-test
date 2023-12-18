'use client'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const LoginButton = (props) => {
  const { loginData } = props
  const router = useRouter()
  const storedData = useSelector((data) => data.register.users)

  const handleClick = () => {
    const loggedUser = storedData.find(
      (data) =>
        data.username === loginData.username &&
        data.password === loginData.password
    )
    if (loggedUser) router.push('/pages/profile')
    else alert('kosong')
  }
  return (
    <>
      <button onClick={() => handleClick()}>Masuk Sekarang</button>
    </>
  )
}

export default LoginButton
