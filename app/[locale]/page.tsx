export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen bg-starfield">
      <div className="text-center p-8 rounded-lg bg-gray-900 bg-opacity-70 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-yellow-400 font-orbitron text-glow">
          Star Wars Fiction : La Guerre Despotique
        </h1>
        <p className="mb-6 text-gray-300 text-xl">
          {
            "Plongez dans cette toute nouvelle histoire où mythes et légendes se croisent..."
          }
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="/fr/Despote_War.epub"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            {"Télécharger .epub"}
          </a>
          <a
            href="/fr/Despote_War.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            {"Télécharger .pdf"}
          </a>
        </div>
      </div>
    </main>
  );
}
