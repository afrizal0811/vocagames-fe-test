import InputText from '@/app/components/InputText'

const Profile = () => {
  return (
    <>
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
          />
          <div>
            <InputText
              label='No Handphone'
              type='number'
              placeholder='Ketik nomor handphone Anda'
              name='phone'
              id='phone'
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
