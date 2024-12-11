"use client";

import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const GetStory = () => {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();

  const downloadStory = (fileType: string, locale: string) => {
    const fileUrl = `/${locale}/Despote_War.${fileType}`;
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = fileUrl;
    a.download = `Despote_War.${fileType}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(fileUrl);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size={"lg"}
            className="w-full sm:w-auto transition duration-300 transform hover:scale-105"
          >
            {t("download")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem onClick={() => downloadStory("epub", locale)}>
            .epub
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => downloadStory("pdf", locale)}>
            .pdf
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        size={"lg"}
        className="w-full sm:w-auto transition duration-300 transform hover:scale-105"
        onClick={() => router.push("/reader")}
      >
        {t("read-online")}
      </Button>
    </div>
  );
};
