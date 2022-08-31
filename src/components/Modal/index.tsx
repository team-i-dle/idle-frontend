import React from 'react';
import { createPortal } from 'react-dom';
import { Title } from './style';

interface ModalProps {
  children: React.ReactNode;
  selector: string;
  title: string;
}

const Modal = ({ children, selector = '#modal_root', title }: ModalProps) => {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children
    ? createPortal(
        <Title>
          {!!title && <strong>{title}</strong>}

          {children}
        </Title>,
        element
      )
    : null;
};

export default Modal;
