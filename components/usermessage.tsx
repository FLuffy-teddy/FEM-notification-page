import Image from "next/image";

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

  return (
    <div className="bg-slate-100 p-4 my-1 flex items-center">
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
            <span className={`text-lg ${postResponseColor} `}>{post}</span>
          </h3>
          {commentImage ? (
            <Image src={commentImage} alt="User Image" height={20} width={20} />
          ) : null}
        </div>
        <div>
          <h4 className="text-lg text-slate-400">{time}</h4>
        </div>
      </div>
      {comment ? (
        <div className="border-1 border-slate-500 rounded-md p-4">
          {comment}
        </div>
      ) : null}
    </div>
  );
}
