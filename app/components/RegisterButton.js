
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
    <div className='my-8'>
      <button
        className='rounded-full w-full py-2 px-4 bg-[#e5eafd] text-black font-extrabold '
        onClick={userDispatch}
      >
        Daftar Sekarang
      </button>
    </div>
  )
}

export default RegisterButton
