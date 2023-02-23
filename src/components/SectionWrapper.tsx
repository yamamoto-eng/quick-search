import { Divider } from "antd";
import React, { FC, PropsWithChildren } from "react";

type SectionWrapperProps = {
  sectionName: string;
};

const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = (props) => {
  const { children, sectionName } = props;

  return (
    <div style={{ margin: "40px 0" }}>
      <Divider orientation="left" style={{ fontSize: "24px" }}>
        {sectionName}
      </Divider>
      {children}
    </div>
  );
};

export { SectionWrapper };
