import styled from '@emotion/styled';
import React from 'react';

import defaultInputStyle from '../Input.style';

type TextareaProps = JSX.IntrinsicElements['textarea'];

type CustomTextareaProps = TextareaProps & {
  resize?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  (props, ref) => {
    return <TextareaTag {...props} ref={ref} />;
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

const TextareaTag = styled.textarea<CustomTextareaProps>`
  ${defaultInputStyle};
  min-height: 100px;
  resize: ${({ resize }) => resize || 'none'};
`;
