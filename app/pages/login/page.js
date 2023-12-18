'use client'

import Link from 'next/link'
import { useState } from 'react'
import InputText from '../../components/InputText'
import LoginButton from '../../components/LoginButton'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <>
      <div>
        <h1>Silahkan Login</h1>
        <p>Masukkan Username dan password Anda untuk masuk</p>
      </div>
      <div>
        <div>
          <InputText
            label='Username'
            type='text'
            placeholder='Ketik username Anda'
            name='username'
            id='username'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <InputText
            label='Password'
            type='password'
            placeholder='Ketik password Anda'
            name='password'
            id='password'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <br />
        <LoginButton loginData={loginData} />
      </div>
      <p>
        Belum punya akun? <Link href='/pages/register'>Daftar Sekarang</Link>
      </p>
    </>
  )
}

export default Login
