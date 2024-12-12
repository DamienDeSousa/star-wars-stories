"use client";

import ePub, { Rendition } from "epubjs";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ThemeButton } from "../ui/theme-button";

type EpubReaderProps = {
  url: string;
};

const EpubReader = (props: EpubReaderProps) => {
  const { url } = props;

  const viewerRef = useRef(null);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const t = useTranslations("Common");
  const { theme } = useTheme();

  useEffect(() => {
    const book = ePub(url);
    if (viewerRef.current) {
      const rdr = book.renderTo(viewerRef.current, {
        width: "100%",
        height: "100%",
      });
      rdr.display();
      setRendition(rdr);

      const epubTheme = {
        body: {
          background: theme === "light" ? "#E6EFF8" : "#1A1A1A",
          color: theme === "light" ? "#111A23" : "#E6E6E6",
        },
      };

      rdr.themes.register("theme", epubTheme);
      rdr.themes.select("theme");
      rdr.themes.fontSize("150%");
    }

    return () => {
      book.destroy();
    };
  }, [theme, url]);

  const handleNext = () => {
    if (rendition) {
      rendition.next();
    }
  };

  const handlePrev = () => {
    if (rendition) {
      rendition.prev();
    }
  };

  return (
    <div className="flex justify-center relative w-screen h-screen p-2">
      <div
        ref={viewerRef}
        className="w-full h-[90%] overflow-auto rounded-lg"
      ></div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 items-center">
        <Button size={"lg"} onClick={handlePrev}>
          {t("previous")}
        </Button>
        <Button size={"lg"} onClick={handleNext} style={{ marginLeft: 10 }}>
          {t("next")}
        </Button>
        <ThemeButton />
      </div>
    </div>
  );
};

export default EpubReader;
