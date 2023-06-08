import Image from "next/image";
import { useState } from "react";

interface AcceptedProps {
  user: string;
  imagePath: string;
  action: string;
  post?: string | null;
  postClub?: boolean | null;
  time: string;
  seen: boolean;
  commentImage?: string | null;
  comment?: string | null;
  messageFunction?: () => void;
}

export default function Usermessage({
  user,
  imagePath,
  action,
  post,
  postClub,
  time,
  seen,
  commentImage,
  comment,
  messageFunction,
}: AcceptedProps) {
  const postResponseColor = postClub ? "text-blue-500" : "text-slate-600";
  const postSeenBG = seen ? "bg-white" : "bg-slate-100";

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
                onClick={messageFunction}
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
