"use client";

import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Common");

  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-secondary drop-shadow-xl">
        {t("title")}
      </h1>
      <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
        {t("description")}
      </p>
    </>
  );
};
