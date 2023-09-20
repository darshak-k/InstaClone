import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  IconButton,
} from "@chakra-ui/react";

import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModel.css";

const CommentModel = ({
  onClose,
  isOpen,
  isSaved,
  isPostLiked,
  handlePostLike,
  handleSavePost,
}) => {
  return (
    <div>
      <Modal size={"6xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[90vh] relative">
              <div className="w-[50%] flex flex-col justify-center border-r-2">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/06/06/14/49/chamois-8044855_640.jpg"
                  alt=""
                />
              </div>

              <div className="w-[50%] pl-5">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://cdn.pixabay.com/photo/2023/06/06/14/49/chamois-8044855_640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>Username</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>
                <hr />

                <div className="comment">
                  {[1, 1, 1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>

                <div className="absolute bottom-0 w-[55%]">
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
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
                        <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
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

                    <div className="w-full py-3">
                      <p>Liked by papigixxer_702 and others</p>
                      <p className="opacity-50 text-sm">2 days ago</p>
                    </div>
                    <hr className="w-[90%]" />
                    <div>
                      <div className="border-top flex w-[90%] items-center">
                        <BsEmojiSmile className="text-xl hover:opacity-50 cursor-pointer" />
                        <input
                          className="commentInput"
                          type="text"
                          placeholder="Add a comment..."
                        />
                        <button className=" hover:opacity-50 cursor-pointer">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModel;
