"use client";

import { useLocale, useTranslations } from "next-intl";

export const GetStory = () => {
  const t = useTranslations("Common");
  const locale = useLocale();

  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href={`/${locale}/Despote_War.epub`}
        download
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
      >
        {t("download-format", { format: ".epub" })}
      </a>
      <a
        href={`/${locale}/Despote_War.pdf`}
        download
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
      >
        {t("download-format", { format: ".pdf" })}
      </a>
    </div>
  );
};
