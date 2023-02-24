import type { FC, HTMLProps } from "react";
import { FcGoogle } from "react-icons/fc";

import * as Styles from "./GoogleButton.styles";

type SearchButtonProps = {
  onClick: HTMLProps<HTMLDivElement>["onClick"];
};

const GoogleButton: FC<SearchButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <Styles.Root onClick={onClick}>
      <FcGoogle style={{ width: "20px", height: "20px" }} />
    </Styles.Root>
  );
};

export { GoogleButton };
