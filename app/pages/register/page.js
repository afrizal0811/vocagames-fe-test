'use client'

import InputText from '@/app/components/InputText'
import RegisterButton from '@/app/components/RegisterButton'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className='m-0 p-0 h-screen flex flex-row'>
      <div className='flex-1 flex flex-col items-center justify-center bg-[#131167] text-white'>
        <div className='w-4/12'>
          <div>
            <h1 className='text-6xl font-extrabold pb-4'>Daftarkan Akun</h1>
            <p className='font-normal mt-2 mb-5'>
              Daftar akun Anda dangan mengisi form dibawah
            </p>
          </div>
          <div className='pt-4'>
            <InputText
              label='Nama Anda'
              type='text'
              placeholder='Ketik nama Anda disini'
              name='username'
              id='username'
              regis={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Nomor Handphone'
              type='number'
              placeholder='Nomor handphone Anda'
              name='phone'
              id='phone'
              regis={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Password'
              type='password'
              placeholder='Masukkan password Anda'
              name='password'
              id='password'
              regis={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Konfirmasi Password'
              type='password'
              placeholder='Masukkan kembali password Anda'
              name='confirmPassword'
              id='confirmPassword'
              regis={true}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <RegisterButton data={data} />
          <p className='text-center'>
            Sudah punya akun?{' '}
            <Link
              href='/pages/login'
              className='font-extrabold'
            >
              Login Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
