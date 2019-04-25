import React, { ReactNode } from 'react';
import { SyntaxHighlighter } from '@storybook/components';

interface CodeProps {
  props: SyntaxHighlighter['props'];
}

// XXX: is this a bug? should it be (props) => ?
const Code = ({ props }: CodeProps) => <SyntaxHighlighter bordered copyable {...props} />;

export { Code };

interface BlockquoteProps {
  children: ReactNode;
}

export function Blockquote({ children }: BlockquoteProps) {
  const style = {
    fontSize: '1.88em',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    borderLeft: '8px solid #fafafa',
    padding: '1rem',
  };
  return <blockquote style={style}>{children}</blockquote>;
}

Blockquote.defaultProps = { children: null };

export { default as Pre } from './pre/pre';
