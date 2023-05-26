import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 bg-white">
      <Navbar />
      <div className="bg-slate-100 p-4 my-1 flex items-center">
        <Image
          className="p-2"
          src="/avatar-mark-webber.webp"
          alt={"User Image"}
          width={50}
          height={50}
        />
        <div className="flex items-center">
          <h3 className="text-xl text-black">
            Mark Webber{" "}
            <span className="text-lg text-slate-400">
              reacted to your recent post
            </span>
            <span className="text-lg text-slate-600">
              {" "}
              My first tournament today!
            </span>
          </h3>
          <h4 className="text-lg text-slate-400">1m ago</h4>
        </div>
      </div>
      <div className="bg-slate-100 p-4 my-1 flex items-center">
        <Image
          className="p-2"
          src="/avatar-angela-gray.webp"
          alt={"User Image"}
          width={50}
          height={50}
        />
        <div className="flex items-center">
          <h3 className="text-xl text-black">
            Angela Gray{" "}
            <span className="text-lg text-slate-400">followed you</span>
          </h3>
          <h4 className="text-lg text-slate-400">5m ago</h4>
        </div>
      </div>
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
