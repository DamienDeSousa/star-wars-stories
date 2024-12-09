import { GetStory } from "@/components/get-story";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen bg-starfield">
      <div className="text-center p-8 rounded-lg bg-gray-900 bg-opacity-70 shadow-lg">
        <Header />
        <GetStory />
      </div>
    </main>
  );
}
