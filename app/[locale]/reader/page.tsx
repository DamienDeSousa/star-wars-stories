"use client";

import EpubReader from "@/components/epub/epub-reader";
import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();

  const storyPath = `/${locale}/Despote_War.epub`;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <EpubReader url={storyPath} />
    </div>
  );
}
