import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hai</h1>
      <Link href='/pages/login'>Login</Link>
      <br/>
      <Link href='/pages/register'>Register</Link>
    </>
  )
}
