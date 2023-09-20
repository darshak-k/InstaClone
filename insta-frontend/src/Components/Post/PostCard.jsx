import React from "react";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import "./PostCard.css";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModel from "../Comment/CommentModel";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOpenCommentModal = () => {
    onOpen();
  };

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5">
          <div className="flex items-center ">
            <img
              className="h-12 w-12  rounded-full"
              src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"
              alt=""
            />

            <div className="flex pl-2">
              <p className="font-semibold text-sm">UserName</p>
              <p className="font-semibold text-sm">Location</p>
            </div>
          </div>

          <div className="justify-end">
            <BsThreeDots onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2019/02/19/13/40/horse-4006848_1280.jpg"
            alt=""
          />
        </div>

        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2 ">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-100 cursor-pointer text-red-700"
                onClick={handlePostLike}
              ></AiFillHeart>
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="w-full py-2 px-5">
          <p>Liked by papigixxer_702 and others</p>
          <p
            onClick={handleOpenCommentModal}
            className="opacity-50 py-2 cursor-pointer"
          >
            View all 10 comments
          </p>
        </div>
        <div>
          <div className="flex w-full items-center px-5 py-4">
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
            />
            <BsEmojiSmile className="flex justify-end" />
          </div>
        </div>
      </div>

      <CommentModel
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
