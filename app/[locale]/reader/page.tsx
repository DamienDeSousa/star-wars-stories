"use client";
// TODO : rendre ce composant côté serveur
import EpubReader from "@/components/epub/epub-reader";
import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();

  const storyPath = `/${locale}/Despote_War.epub`;

  return (
    <div className="h-screen w-screen">
      <EpubReader url={storyPath} />
    </div>
  );
}
