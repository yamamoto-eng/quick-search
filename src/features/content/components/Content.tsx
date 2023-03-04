import { FC, useRef, useState } from "react";
import { useEffectOnce } from "react-use";
import { match } from "ts-pattern";

import { GoogleButton } from "~components";
import { useStorageIconPosition, useStorageSearchWord, useStorageShowMode } from "~hooks";
import { getGoogleSearchURL } from "~utils";

import { Root } from "./Content.styles";

const Content: FC = () => {
  const { iconPosition } = useStorageIconPosition();
  const { searchWord } = useStorageSearchWord();
  const { showMode } = useStorageShowMode();

  const [selectedText, setSelectedText] = useState<string>("");
  const ref = useRef({ x: 0, y: 0 });

  const y = match(iconPosition.vertical.direction)
    .with("top", () => ref.current.y - iconPosition.vertical.space)
    .with("bottom", () => ref.current.y + iconPosition.vertical.space)
    .exhaustive();

  const x = match(iconPosition.horizontal.direction)
    .with("left", () => ref.current.x - iconPosition.horizontal.space)
    .with("right", () => ref.current.x + iconPosition.horizontal.space)
    .exhaustive();

  const windowOpen = (url: string) => {
    match(showMode)
      .with("tab", () => window.open(url, "_blank", "noreferrer"))
      .with("window", () => window.open(url, "_blank", "noreferrer popup width=800px height=600px"))
      .exhaustive();
  };

  const onClickSearchButton = () => {
    const query = `${searchWord.prefix}${selectedText}${searchWord.suffix}`;
    const url = `${getGoogleSearchURL(query)}`;
    windowOpen(url);
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
