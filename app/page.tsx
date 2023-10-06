"use client";

import Navbar from "@/components/navbar";
import Usermessage from "@/components/usermessage";
import { useState } from "react";
import users from "./JSON/users.json";

interface AcceptedJSON {
  id: string;
  user: string;
  imagePath: string;
  action: string;
  post?: string | null;
  postClub?: boolean | null;
  time: string;
  seen: boolean;
  commentImage?: string | null;
  comment?: string | null;
}

export default function Home() {
  const [messageSeen, setMessageSeen] = useState(users);

  const data = users;

  function updateSeen() {
    setMessageSeen(
      messageSeen.map((notification) => {
        console.log("triggered");
        return { ...notification, seen: !notification.seen };
      })
    );
  }

  return (
    <main className="p-4 bg-white min-h-screen max-w-3xl m-auto text-[16px]">
      <Navbar />
      {data.map((notification) => (
        <Usermessage
          key={notification.id}
          user={notification.user}
          imagePath={notification.image}
          action={notification.action}
          post={notification.post}
          postClub={notification.postClub}
          time={notification.time}
          seen={notification.seen}
          commentImage={notification.commentImage}
          comment={notification.comment}
          messageFunction={updateSeen}
        />
      ))}
    </main>
  );
}
