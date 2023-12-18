'use client'

import RegisterButton from '@/app/components/RegisterButton'
import InputText from '@/app/components/InputText'
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
    <>
      <div>
        <h1>Daftarkan Akun</h1>
        <p>Daftar akun Anda dangan mengisi form dibawah</p>
      </div>
      <div>
        <div>
          <InputText
            label='Nama Anda'
            type='text'
            placeholder='Ketik nama Anda disini'
            name='username'
            id='username'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <InputText
            label='Nomor Handphone'
            type='number'
            placeholder='Nomor handphone Anda'
            name='phone'
            id='phone'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <InputText
            label='Password'
            type='password'
            placeholder='Masukkan password Anda'
            name='password'
            id='password'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <InputText
            label='Konfirmasi Password'
            type='password'
            placeholder='Masukkan kembali password Anda'
            name='confirmPassword'
            id='confirmPassword'
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <br />
        <RegisterButton data={data} />
      </div>
      <p>
        Sudah punya akun? <Link href='/pages/login'>Login Sekarang</Link>
      </p>
    </>
  )
}

export default Register
