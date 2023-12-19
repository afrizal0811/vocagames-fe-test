'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import InputText from '../../components/InputText'
import { setCookies } from '../../utility/cookies'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const router = useRouter()
  const storedData = useSelector((data) => data.register.users)

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClick = () => {
    const loggedUser = storedData.find(
      (data) =>
        data.username === loginData.username &&
        data.password === loginData.password
    )
    if (loggedUser) {
      setCookies('user', loggedUser)
      router.push('/pages/profile')
    } else alert('tidak ada data')
  }
  return (
    <div className='m-0 p-0 h-screen flex flex-row'>
      <div className='bg-[#131167] flex-1 flex flex-col items-center justify-center'>
        <Image
          src='/logo.png'
          width={250}
          height={250}
          alt='logo'
        />
        <h1 className='text-6xl font-extrabold mt-5 p-5 text-white'>LOREM</h1>
        <p className='font-normal text-white text-center w-96'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error culpa
          provident consequatur et sint! Expedita, dolorem iusto inventore error
          nostrum porro aut temporibus consequatur harum. Ipsum deleniti ut qui
          sunt.
        </p>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center text-gray-500'>
        <div>
          <h1 className='text-6xl font-extrabold pb-4 text-[#20184e]'>
            Silahkan Login
          </h1>
          <p className='font-normal mt-2 mb-5'>
            Masukkan Username dan password Anda untuk masuk
          </p>
          <div className='pt-4'>
            <InputText
              label='Username'
              type='text'
              placeholder='Username Anda'
              name='username'
              id='username'
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Password'
              type='password'
              placeholder='Password Anda'
              name='password'
              id='password'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='my-8'>
            <button
              className='rounded-full w-full py-2 px-4 bg-[#e5e7fd] text-[#20184e] font-extrabold '
              onClick={() => handleClick()}
            >
              Masuk Sekarang
            </button>
          </div>
          <p className='text-center'>
            Belum punya akun?{' '}
            <Link
              href='/pages/register'
              className='font-extrabold text-[#20184e]'
            >
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
