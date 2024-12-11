import { GetStory } from "@/components/get-story";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center p-8 rounded-lg shadow-lg bg-background/80">
        <Header />
        <GetStory />
      </div>
    </main>
  );
}
