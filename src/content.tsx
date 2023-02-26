import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { FC } from "react";

import { Content } from "~features/content";

const styleElement = document.createElement("style");

const styleCache = createCache({
  key: "plasmo-emotion-cache",
  prepend: true,
  container: styleElement,
});

export const getStyle = () => styleElement;

const content: FC = () => {
  return (
    <CacheProvider value={styleCache}>
      <Content />
    </CacheProvider>
  );
};

export default content;
