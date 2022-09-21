import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'components/Icon';
import { colors } from 'constants/theme';
import React from 'react';

interface ToastProps {
  text: string;
  button?: React.ReactNode;
}

const Toast = ({ text, button }: ToastProps) => {
  return (
    <Wrap className="on">
      <Text>
        <Link width="20" color={colors.gray05} />
        <URL>{text}</URL>
      </Text>
      {!!button && <LinkButton>{button}</LinkButton>}
    </Wrap>
  );
};

export default Toast;

const slidein = keyframes`
  0% {
    /* transform: translate(-50% , 10px); */
    bottom: calc(60px);
  }
  100% {
    /* transfrom: translate(-50% , 0px); */
    bottom: calc(60px + 20px);
  }
`;

const Wrap = styled.div`
  position: fixed;
  /* bottom: calc(60px); */
  left: 50%;
  transform: translateX(-50%);
  min-width: 85%;
  padding: 12px 20px 16px;
  background: ${colors.secondary04};
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 1px 2px 12px rgba(12, 13, 14, 0.16);
  border-radius: 4px;
  font-size: 16px;
  animation: ${slidein} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const URL = styled.span`
  margin-left: 6px;
  color: ${colors.gray08};
`;

const LinkButton = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: flex-end;
`;
