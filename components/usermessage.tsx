import Image from "next/image";

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
  const postResponseColor = postClub ? "text-blue" : "text-grayblue";
  const postSeenBG = seen ? "bg-white" : "bg-lightblue1";

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
            <h3 className="text-black font-bold">
              {user} <span className="text-grayblue">{action}</span>
              {post ? (
                <span className={`font-bold ${postResponseColor} `}>
                  {" "}
                  {post}
                </span>
              ) : null}
            </h3>
            {!seen ? (
              <button
                onClick={messageFunction}
                className="h-2 w-2 bg-red rounded-full ml-4"
              ></button>
            ) : null}
          </div>
          <div>
            <h4 className="text-grayblue">{time}</h4>
          </div>
          {comment ? (
            <div className="border border-darkgrayblue text-darkgrayblue bg-lightblue2 rounded-md p-4">
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
