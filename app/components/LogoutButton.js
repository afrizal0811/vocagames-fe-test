import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
const LogoutButton = () => {
  const router = useRouter()
  const handleClick = () => {
    Cookies.remove('user')
    router.push('/pages/login')
  }
  return <button onClick={() => handleClick()}>Logout</button>
}

export default LogoutButton
