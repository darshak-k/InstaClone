import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="py-10">
          <div className="flex  justify-between ">
            <div className="flex items-center">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://cdn.pixabay.com/photo/2023/06/28/08/13/public-speaking-8093767_1280.png"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold">UserName</p>
                <p className="opacity-70">Full Name</p>
              </div>
            </div>
            <div>
              <p>Switch</p>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <p className="font-semibold opacity-70">Suggested for you</p>
            <p className="justify-center">See All</p>
          </div>

          <div className="mt-3">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <SuggestionCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
