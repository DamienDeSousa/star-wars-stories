"use client";

import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Common");

  return (
    <>
      <h1 className="text-5xl font-bold mb-6 text-yellow-400 font-orbitron text-glow">
        {t("title")}
      </h1>
      <p className="mb-6 text-gray-300 text-xl">{t("description")}</p>
    </>
  );
};
