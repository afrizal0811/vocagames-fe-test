'use client'
import InputText from '@/app/components/InputText'
import LogoutButton from '@/app/components/LogoutButton'
import { getCookies } from '@/app/utility/cookies'
import { redirect } from 'next/navigation'
const Profile = () => {
  const userData = getCookies('user')
  if (!userData) redirect('/pages/login')

  return (
    <>
      <LogoutButton />
      <div>
        <h1>Edit Profile</h1>
      </div>
      <div>
        <div>
          <InputText
            label='Nama'
            type='text'
            placeholder='Ketik nama Anda'
            name='username'
            id='username'
            value={userData.username}
          />
          <div>
            <InputText
              label='No Handphone'
              type='number'
              placeholder='Ketik nomor handphone Anda'
              name='phone'
              id='phone'
              value={userData.phone}
            />
          </div>
          <div>
            <InputText
              label='Old Password'
              type='password'
              placeholder='Ketik password lama Anda'
              name='password'
              id='password'
            />
          </div>
          <div>
            <InputText
              label='New Password'
              type='password'
              placeholder='Ketik password baru Anda'
              name='newPassword'
              id='newPassword'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
