"use client";

import ePub, { Rendition } from "epubjs";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

type EpubReaderProps = {
  url: string;
};

const EpubReader = (props: EpubReaderProps) => {
  const { url } = props;
  const viewerRef = useRef(null);
  const [rendition, setRendition] = useState<Rendition | null>(null);

  useEffect(() => {
    const book = ePub(url);
    if (viewerRef.current) {
      const rdr = book.renderTo(viewerRef.current, {
        width: "100%",
        height: "100%",
      });
      rdr.display();
      setRendition(rdr);

      const lightTheme = {
        body: {
          // background: "#ffffff",
          // color: "#000000",
          color: "#F5F8FF",
        },
      };

      rdr.themes.register("light", lightTheme);
      rdr.themes.select("light");
      rdr.themes.fontSize("150%");
    }

    return () => {
      book.destroy();
    };
  }, [url]);

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
    <div className="flex justify-center relative w-screen h-screen">
      <div
        ref={viewerRef}
        className="w-full h-[90%] overflow-auto text-primary-foreground"
      ></div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <Button size={"lg"} onClick={handlePrev}>
          Précedent
        </Button>
        <Button size={"lg"} onClick={handleNext} style={{ marginLeft: 10 }}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default EpubReader;
