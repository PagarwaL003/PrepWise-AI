import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="bg-slate-200 rounded-3xl ml-13 mr-3 mt-5 relative w-[40vw]">
      <div className="container ml-5 px-10 md:px-0">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-medium">{role}</h2>
                  <div className="flex mt-1.5">
                    <div className="text-[12px] font-semibold text-white bg-black px-2.5 py-1 rounded-full mr-1.5">
                      Topics
                    </div>
                    <p className="text-s text-medium text-gray-900 mt-1">
                      {topicsToFocus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="text-[12px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Experience: {experience} {experience == 1 ? "Year" : "Years"}
            </div>
            <div className="text-[12px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              {questions} Q/A
            </div>
            <div className="text-[12px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Last Updated: {lastUpdated}
            </div>
          </div>
          <div className="text-black text-sm mt-4 ml-1 font-semibold">
            Description - <span className="font-light">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;
