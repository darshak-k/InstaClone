import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLike, setIsCommentLike] = useState();

    const handleCommentLike=()=>{
        setIsCommentLike(!isCommentLike);
    };

  return (
    <div>
        <div className='flex items-center justify-between py-4'>
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/06/13/15/05/astronaut-8061095_640.png" alt="" />
                </div>
                <div> 
                    <p>
                        <span className='font-semibold'>Username</span>
                        <span className='ml-2'>Nice post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>
                </div> 
            </div>

            {isCommentLike ? <AiFillHeart onClick={handleCommentLike} className='text-xs hover:opacity-50 cursor-pointer text-red-600' /> : <AiOutlineHeart onClick={handleCommentLike} className='text-xs hover:opacity-50 cursor-pointer' />}
        </div>
    </div>
  )
}

export default CommentCard