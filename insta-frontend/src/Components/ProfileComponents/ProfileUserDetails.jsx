import React from 'react'
import {TbCircleDashed} from "react-icons/tb"
import UserPost from './UserPost'

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-90'>
        <div className='flex items-center justify-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" alt="" />
            </div>

            <div className='space-y-5'>
                <div className='flex space-x-10 item-center'>
                    <p>User Name</p>
                    <button> Edit Profile</button>
                    <TbCircleDashed>Settings</TbCircleDashed>
                </div>
            
                <div className='flex space-x-10 mt-5'>
                    <div>
                        <span className='font-semibold mr-2'>37</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>910</span>
                        <span>followers</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>910</span>
                        <span>following</span>
                    </div>                
                </div>

                <div>
                    <p className='flex space-x-10 mt-5 font-semibold'>Full Name</p>
                    <p className='font-thin text-sm'>📍Montreal 🇨🇦 🎓MSU’19 | Concordia’23</p>
                </div>
            </div>
        </div>
        

        <UserPost />
    </div>
  )
}

export default ProfileUserDetails