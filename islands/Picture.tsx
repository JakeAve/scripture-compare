import { IS_BROWSER } from "$fresh/runtime.ts";
import { MutableRef, useLayoutEffect, useRef, useState } from "preact/hooks";

type imgSize = "sm" | "md" | "lg" | "xl" | "xs";

export interface PictureProps {
  imagePath: string;
  alt: string;
  size?: imgSize;
  imgClass?: string;
  width?: number;
  height?: number;
  imgRef?: MutableRef<HTMLImageElement>;
  loading?: "lazy" | "eager";
  blur?: boolean;
}

export default function Picture(props: PictureProps) {
  const { loading = "lazy", blur = true } = props;
  let ref = useRef<HTMLImageElement | null>(null);
  if (props.imgRef) ref = props.imgRef;

  const [isLoadingError, setIsLoadingError] = useState(false);

  useLayoutEffect(() => {
    // in case it loaded server side
    const img = ref.current as HTMLImageElement;
    if (img && img.complete && blur) {
      img.style.filter = "";
    }
  });

  const handleLoad = (event: Event) => {
    if (blur) {
      const img = event.target as HTMLImageElement;
      img.style.filter = "";
    }
  };

  const handleError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    // img.style.background = genRandGradient();
    setIsLoadingError(true);
    console.error(`Error loading image: ${img.src}`);
  };

  const styleProps = blur ? { filter: "blur(2px)" } : {};

  const { imagePath, alt, size = "lg", imgClass = "", height, width } = props;
  const path = (s: imgSize) => `${imagePath}-${s}.webp`;
  let srcset = path("sm") + " 320w, ";
  if (size === "md" || size === "lg" || size === "xl") {
    srcset += path("md") + " 640w, ";
  }
  if (IS_BROWSER) {
    if (window.screen.width > 800) {
      if (size === "lg" || size === "xl") srcset += path("lg") + " 1024w, ";
    }
    if (window.screen.width > 1200) {
      if (size === "xl") srcset += path("xl") + " 1800w";
    }
  }

  return (
    <picture>
      <source srcset={isLoadingError ? "" : srcset} type="image/webp" />
      <img
        loading={loading}
        class={imgClass + " bg-gray-500 dark:bg-gray-900"}
        src={isLoadingError ? "/assets/smart_toy.svg" : imagePath + ".jpeg"}
        alt={alt}
        height={height}
        width={width}
        onLoad={handleLoad}
        onError={handleError}
        ref={ref}
        style={styleProps}
      />
    </picture>
  );
}
