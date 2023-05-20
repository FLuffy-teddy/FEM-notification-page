export default function Navbar() {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <h1 className="text-3xl text-black">
          Notifications
          <div className="bg-blue-600">
            <h2 className="text-3xl text-white p-4">3</h2>
          </div>
        </h1>
      </div>
      <div>
        <button className="text-slate-300 text-lg">Mark all as read</button>
      </div>
    </div>
  );
}
