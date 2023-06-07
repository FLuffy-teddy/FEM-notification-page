import Navbar from "../components/navbar";
import Image from "next/image";
import Usermessage from "@/components/usermessage";

export default function Home() {
  return (
    <main className="p-4 bg-white min-h-screen">
      <Navbar />
      <Usermessage
        imagePath="/avatar-mark-webber.webp"
        user="Mark Webber"
        action="reacted to your recent post"
        post="My first tournament today!"
        time="1m ago"
      />
      <Usermessage
        imagePath="/avatar-angela-gray.webp"
        user="Angela Gray"
        action="followed you"
        time="5m ago"
      />
      <Usermessage
        imagePath="/avatar-mark-webber.webp"
        user="Mark Webber"
        action="reacted to your recent post"
        post="My first tournament today!"
        time="1m ago"
      />
      <Usermessage
        imagePath="/avatar-jacob-thompson.webp"
        user="Jacob Thompson"
        action="has joined your group"
        post="Chess Club"
        postClub={true}
        time="1 day ago"
      />
      <div className="bg-slate-100 p-4 my-1 flex items-center">
        <Image
          className="p-2"
          src="/avatar-jacob-thompson.webp"
          alt={"User Image"}
          width={50}
          height={50}
        />
        <div className="flex items-center">
          <h3 className="text-xl text-black">
            Jacob Thompson{" "}
            <span className="text-lg text-slate-400">
              has joined your group
            </span>
            <span className="text-lg text-blue-600"> Chess Club</span>
          </h3>
          <h4 className="text-lg text-slate-400">1 day ago</h4>
        </div>
      </div>
    </main>
  );
}
