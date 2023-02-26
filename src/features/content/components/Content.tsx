import { FC, useRef, useState } from "react";
import { useEffectOnce } from "react-use";

import { GoogleButton } from "~components/GoogleButton/GoogleButton";
import { getGoogleSearchURL } from "~utils/getGoogleSearchURL";

import * as Styles from "./Content.styles";

const Content: FC = () => {
  const [selectedText, setSelectedText] = useState<string>("");
  const ref = useRef({ x: 0, y: 0 });

  const onClickSearchButton = () => {
    const url = getGoogleSearchURL(selectedText);
    window.open(url, "_blank", "noreferrer");
  };

  useEffectOnce(() => {
    document.addEventListener("mouseup", (e) => {
      ref.current = {
        x: e.pageX,
        y: e.pageY,
      };

      // mouseup時には、選択された状態になっているので、処理を遅らせる
      setTimeout(() => {
        const text = document.getSelection()?.toString() ?? "";
        setSelectedText(text);
      });
    });
  });

  if (!selectedText.trim()) {
    return null;
  }

  return (
    <Styles.Root y={ref.current.y} x={ref.current.x}>
      <GoogleButton onClick={onClickSearchButton} />
    </Styles.Root>
  );
};

export { Content };
