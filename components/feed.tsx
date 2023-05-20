import Image from "next/image";

export default function Feed() {
  return (
    <div className="bg-slate-100 p-4 my-1 flex">
      <Image
        className="p-2"
        src='/favicon-32x32.png'
        alt={"User Image"}
        width={50}
        height={50}
      />
      <div>
        <h3 className="text-xl text-black">
          Mark Webber
          <span className="text-lg text-slate-200">
            reacted to your recent post
          </span>{" "}
          <span className="text-lg text-slate-400">
            {" "}
            My first tournament today!
          </span>
        </h3>
        <h4 className="text-lg text-slate-100">1m ago</h4>
      </div>
    </div>
  );
}
