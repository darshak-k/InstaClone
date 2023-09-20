import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './UserPostCard.css'

const UserPostCard = () => {
  return (
    <div>
        <div className='post w-80 h-80'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex  space-x-8  justify-center'>
                    <div className='flex'>
                        <AiFillHeart></AiFillHeart> <span className='px-1'>10</span>
                    </div>
                    <div className='flex sticky-top'>
                        <FaComment/> <span  className='px-1'>30</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPostCard