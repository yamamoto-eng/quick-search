import { Divider } from "antd";
import React, { FC, PropsWithChildren } from "react";

import { Root } from "./SectionWrapper.styles";

type SectionWrapperProps = {
  sectionName: string;
};

const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = (props) => {
  const { children, sectionName } = props;

  return (
    <Root>
      <Divider orientation="left" style={{ fontSize: "24px" }}>
        {sectionName}
      </Divider>
      {children}
    </Root>
  );
};

export { SectionWrapper };
