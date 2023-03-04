import { FC, useRef, useState } from "react";
import { useEffectOnce } from "react-use";
import { match } from "ts-pattern";

import { GoogleButton } from "~components/GoogleButton/GoogleButton";
import { useStorageIconPosition } from "~hooks/useStorageIconPosition";
import { useStorageSearchWord } from "~hooks/useStorageSearchWord";
import { getGoogleSearchURL } from "~utils/getGoogleSearchURL";

import { Root } from "./Content.styles";

const Content: FC = () => {
  const { iconPosition } = useStorageIconPosition();
  const { searchWord } = useStorageSearchWord();

  const [selectedText, setSelectedText] = useState<string>("");
  const ref = useRef({ x: 0, y: 0 });

  const y = match(iconPosition.vertical.direction)
    .with("center", () => ref.current.y)
    .with("top", () => ref.current.y - iconPosition.vertical.space)
    .with("bottom", () => ref.current.y + iconPosition.vertical.space)
    .exhaustive();

  const x = match(iconPosition.horizontal.direction)
    .with("center", () => ref.current.x)
    .with("left", () => ref.current.x - iconPosition.horizontal.space)
    .with("right", () => ref.current.x + iconPosition.horizontal.space)
    .exhaustive();

  const onClickSearchButton = () => {
    const query = `${searchWord.prefix}${selectedText}${searchWord.suffix}`;
    const url = `${getGoogleSearchURL(query)}`;
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
    <Root y={y} x={x}>
      <GoogleButton onClick={onClickSearchButton} />
    </Root>
  );
};

export { Content };
