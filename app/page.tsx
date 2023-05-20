import Navbar from '../components/navbar';
import Feed from '../components/feed';

export default function Home() {
  return (
    <main className="p-4 bg-white">
      <Navbar/>
      <Feed/>
    </main>
  );
}
