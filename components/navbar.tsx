export default function Navbar() {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center">
        <h1 className="text-3xl text-black pr-2">Notifications</h1>
        <div className="bg-blue-600 rounded-md">
          <h2 className="text-xl text-white px-2">3</h2>
        </div>
      </div>
      <div>
        <button className="text-slate-500 text-lg">Mark all as read</button>
      </div>
    </div>
  );
}
