import Navbar from "@/components/navbar";
import Image from "next/image";
import Usermessage from "@/components/usermessage";

export default function Home() {
  return (
    <main className="p-4 bg-white min-h-screen max-w-xl m-auto">
      <Navbar />
      <Usermessage
        imagePath="/avatar-mark-webber.webp"
        user="Mark Webber"
        action="reacted to your recent post"
        post="My first tournament today!"
        time="1m ago"
        seen={false}
      />
      <Usermessage
        imagePath="/avatar-angela-gray.webp"
        user="Angela Gray"
        action="followed you"
        time="5m ago"
        seen={false}
      />
      <Usermessage
        imagePath="/avatar-jacob-thompson.webp"
        user="Jacob Thompson"
        action="has joined your group"
        post="Chess Club"
        postClub={true}
        time="1 day ago"
        seen={false}
      />
      <Usermessage
        imagePath="/avatar-rizky-hasanuddin.webp"
        user="Rizky Hasanuddin"
        action="sent you a private message"
        time="5 days ago"
        comment="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        seen={true}
      />
      <Usermessage
        imagePath="/avatar-kimberly-smith.webp"
        user="Kimberly Smith"
        action="commented on your picture"
        time="1 week ago"
        commentImage="/image-chess.webp"
        seen={true}
      />
      <Usermessage
        imagePath="/avatar-nathan-peterson.webp"
        user="Nathan Peterson"
        action="reacted to your recent post"
        post="5 end-game strategies to increase your win rate"
        time="2 weeks ago"
        seen={true}
      />
      <Usermessage
        imagePath="/avatar-anna-kim.webp"
        user="Ana Kim"
        action="has left the group"
        post="Chess Club"
        postClub={true}
        time="2 weeks ago"
        seen={true}
      />
    </main>
  );
}
