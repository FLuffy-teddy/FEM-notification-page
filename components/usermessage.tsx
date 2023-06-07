"use client";

import Image from "next/image";
import { useState } from "react";

interface AcceptedProps {
  imagePath: string;
  user: string;
  action: string;
  post?: string;
  postClub?: boolean;
  time: string;
  seen?: boolean;
  commentImage?: string;
  comment?: string;
}

export default function Usermessage({
  imagePath,
  user,
  action,
  post,
  postClub,
  time,
  seen,
  commentImage,
  comment,
}: AcceptedProps) {
  const postResponseColor = postClub ? "text-blue-500" : "text-slate-600";
  const postSeenBG = seen ? "bg-white" : "bg-slate-100";

  const [messageSeen, setMessageSeen] = useState(Boolean);

  function updateSeen() {
    seen: !messageSeen;
  }

  return (
    <>
      <div className={`p-4 my-1 flex items-center ${postSeenBG} rounded-md`}>
        <Image
          className="p-2"
          src={imagePath}
          alt={"User Image"}
          width={50}
          height={50}
        />
        <div>
          <div className="flex items-center">
            <h3 className="text-xl text-black">
              {user} <span className="text-lg text-slate-400">{action}</span>
              {post ? (
                <span className={`text-lg ${postResponseColor} `}> {post}</span>
              ) : null}
            </h3>
            {!seen ? (
              <button
                onClick={updateSeen}
                className="h-2 w-2 bg-red-500 rounded-full"
              ></button>
            ) : null}
          </div>
          <div>
            <h4 className="text-lg text-slate-400">{time}</h4>
          </div>
          {comment ? (
            <div className="border border-slate-400 text-slate-400 rounded-md p-4">
              {comment}
            </div>
          ) : null}
        </div>
        {commentImage ? (
          <div>
            <Image src={commentImage} alt="User Image" height={30} width={30} />
          </div>
        ) : null}
      </div>
    </>
  );
}
