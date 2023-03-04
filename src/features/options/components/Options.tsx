import {
  Button,
  Input,
  InputNumber,
  InputNumberProps,
  Radio,
  RadioChangeEvent,
  RadioGroupProps,
  Space,
  Typography,
} from "antd";
import { FC, useState } from "react";

import { SectionWrapper } from "~components/SectionWrapper/SectionWrapper";
import { useStorageIconPosition } from "~hooks/useStorageIconPosition";
import { isHorizontalDirection } from "~utils/isHorizontalDirection";
import { isNumber } from "~utils/isNumber";
import { isVerticalDirection } from "~utils/isVerticalDirection";

import { Root } from "./Options.styles";

const { Title, Text } = Typography;

const Options: FC = () => {
  const { iconPosition, setVerticalDirection, setVerticalSpace, setHorizontalDirection, setHorizontalSpace } =
    useStorageIconPosition();

  const [showMode, setShowMode] = useState("tab");

  const onChangeVerticalDirection: RadioGroupProps["onChange"] = (e) => {
    if (isVerticalDirection(e.target.value)) {
      setVerticalDirection(e.target.value).catch(console.error);
    }
  };

  const onChangeVerticalSpace: InputNumberProps["onChange"] = (value) => {
    if (isNumber(value)) {
      setVerticalSpace(value).catch(console.error);
    }
  };

  const onChangeHorizontalDirection = (e: RadioChangeEvent) => {
    if (isHorizontalDirection(e.target.value)) {
      setHorizontalDirection(e.target.value).catch(console.error);
    }
  };

  const onChangeHorizontalSpace: InputNumberProps["onChange"] = (value) => {
    if (isNumber(value)) {
      setHorizontalSpace(value).catch(console.error);
    }
  };

  const onChangeShowMode = (e: RadioChangeEvent) => {
    if (typeof e.target.value === "string") {
      setShowMode(e.target.value);
    }
  };

  return (
    <Root>
      <Title italic underline>
        Quick Search ~ Setting
      </Title>

      <SectionWrapper sectionName="Icon Position">
        <Space>
          <Space direction="vertical">
            <Text strong>Vertical</Text>
            <Radio.Group value={iconPosition.vertical.direction} onChange={onChangeVerticalDirection}>
              <Radio value="top">top</Radio>
              <Radio value="center">center</Radio>
              <Radio value="bottom">bottom</Radio>
            </Radio.Group>
            <InputNumber addonBefore="Space" value={iconPosition.vertical.space} onChange={onChangeVerticalSpace} />
          </Space>

          <Space direction="vertical">
            <Text strong>Horizontal</Text>
            <Radio.Group onChange={onChangeHorizontalDirection} value={iconPosition.horizontal.direction}>
              <Radio value="left">left</Radio>
              <Radio value="center">center</Radio>
              <Radio value="right">right</Radio>
            </Radio.Group>
            <InputNumber addonBefore="Space" value={iconPosition.horizontal.space} onChange={onChangeHorizontalSpace} />
          </Space>
        </Space>
      </SectionWrapper>

      <SectionWrapper sectionName="Search Word">
        <Space>
          <Space direction="vertical">
            <Text strong>Prefix</Text>
            <Input placeholder="Prefix" />
          </Space>

          <Space direction="vertical">
            <Text strong>Suffix</Text>
            <Input placeholder="Suffix" />
          </Space>
        </Space>
      </SectionWrapper>

      <SectionWrapper sectionName="Show Mode">
        <Radio.Group onChange={onChangeShowMode} value={showMode}>
          <Radio value="tab">tab</Radio>
          <Radio value="window">window</Radio>
        </Radio.Group>
      </SectionWrapper>

      <Button type="primary" size="large" block>
        Save
      </Button>
    </Root>
  );
};

export { Options };
