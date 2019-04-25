import React, { ReactNode } from 'react';

type Props = typeof defaultProps;
const defaultProps = { children: null as ReactNode };

export function P({ children }: Props) {
  const style = {
    fontSize: '15px',
  };

  // <P> is oftentimes used as a parent element of
  // <a> and <pre> elements, which is why <div>
  // is used as the outputted element when parsing
  // marksy content rather than <p>.
  return <div style={style}>{children}</div>;
}

P.defaultProps = defaultProps;

export function LI({ children }: Props) {
  const style = {
    fontSize: '15px',
  };
  return <li style={style}>{children}</li>;
}

LI.defaultProps = defaultProps;

export function UL({ children }: Props) {
  const style = {
    fontSize: '15px',
  };
  return <ul style={style}>{children}</ul>;
}

UL.defaultProps = defaultProps;

type AProps = {
  href: string;
} & Props;

export function A({ href, children }: AProps) {
  const style = {
    color: '#3498db',
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
      {children}
    </a>
  );
}

A.defaultProps = defaultProps;
