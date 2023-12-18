import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { setCookies } from '../utility/cookies'

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
    setCookies('user', loggedUser)
    if (loggedUser) router.push('/pages/profile')
    else alert('tidak ada data')
  }
  return (
    <div className='my-8'>
      <button
        className='rounded-full w-full py-2 px-4 bg-[#e5e7fd] text-[#20184e] font-extrabold '
        onClick={() => handleClick()}
      >
        Masuk Sekarang
      </button>
    </div>
  )
}

export default LoginButton
