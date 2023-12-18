import { useRouter } from 'next/navigation'
import { removeCookies } from '../utility/cookies'
const LogoutButton = () => {
  const router = useRouter()
  const handleClick = () => {
    removeCookies('user')
    router.push('/pages/login')
  }
  return <button onClick={() => handleClick()}>Logout</button>
}

export default LogoutButton
