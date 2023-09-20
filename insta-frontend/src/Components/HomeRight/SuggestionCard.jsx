import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center py-2">
        <img
          className="w-9 h-9 rounded-full"
          src="https://cdn.pixabay.com/photo/2023/06/26/13/41/wolf-8089783_640.jpg"
          alt=""
        />
        <div className=" ml-5">
          <p className="text-sm font-semibold">username</p>
          <p className="text-xs font-semibold opacity-70">
            Followed by ishan_3213_ + 27 more
          </p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
