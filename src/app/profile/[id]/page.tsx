import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='my-4'>User Profile Page</h1>
        <hr />
        <p className='px-2'>User Profile<span className='text-2xl mx-2 p-2 bg-orange-600 text-black rounded-lg'>{params.id}</span> </p>
    </div>
  )
}

export default UserProfile;