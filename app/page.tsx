import Header from '@/components/Header';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <Header />
      <main className="flex flex-col gap-8">
        <h1 className="text-white">Dom van Almsick</h1>
      </main>
    </div>
  );
}
