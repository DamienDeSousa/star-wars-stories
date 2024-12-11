import { GetStory } from "@/components/get-story";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-5xl text-center p-6 sm:p-8 rounded-lg shadow-lg bg-background/80">
        <Header />
        <GetStory />
      </div>
    </main>
  );
}
