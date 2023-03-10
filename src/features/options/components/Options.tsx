import {
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Radio,
  RadioChangeEvent,
  RadioGroupProps,
  Space,
  Typography,
} from "antd";
import type { FC } from "react";

import { SectionWrapper } from "~components";
import { useStorageIconPosition, useStorageSearchWord } from "~hooks";
import { useStorageShowMode } from "~hooks/useStorageShowMode/useStorageShowMode";
import { isHorizontalDirection, isNumber, isShowMode, isVerticalDirection } from "~utils";

import { Root } from "./Options.styles";

const { Title, Text } = Typography;

const Options: FC = () => {
  const { iconPosition, setVerticalDirection, setVerticalSpace, setHorizontalDirection, setHorizontalSpace } =
    useStorageIconPosition();
  const { searchWord, setPrefix, setSuffix } = useStorageSearchWord();
  const { showMode, setShowMode } = useStorageShowMode();

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

  const onChangePrefix: InputProps["onChange"] = (e) => {
    setPrefix(e.target.value).catch(console.error);
  };

  const onChangeSuffix: InputProps["onChange"] = (e) => {
    setSuffix(e.target.value).catch(console.error);
  };

  const onChangeShowMode = (e: RadioChangeEvent) => {
    if (isShowMode(e.target.value)) {
      setShowMode(e.target.value).catch(console.error);
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
              <Radio value="bottom">bottom</Radio>
            </Radio.Group>
            <InputNumber addonBefore="Space" value={iconPosition.vertical.space} onChange={onChangeVerticalSpace} />
          </Space>

          <Space direction="vertical">
            <Text strong>Horizontal</Text>
            <Radio.Group onChange={onChangeHorizontalDirection} value={iconPosition.horizontal.direction}>
              <Radio value="left">left</Radio>
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
            <Input placeholder="Prefix" value={searchWord.prefix} onChange={onChangePrefix} />
          </Space>

          <Space direction="vertical">
            <Text strong>Suffix</Text>
            <Input placeholder="Suffix" value={searchWord.suffix} onChange={onChangeSuffix} />
          </Space>
        </Space>
      </SectionWrapper>

      <SectionWrapper sectionName="Show Mode">
        <Radio.Group onChange={onChangeShowMode} value={showMode}>
          <Radio value="tab">tab</Radio>
          <Radio value="window">window</Radio>
        </Radio.Group>
      </SectionWrapper>
    </Root>
  );
};

export { Options };
